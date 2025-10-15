import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useToast } from "@/hooks/use-toast";
import { Loader2, LogOut, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Booking {
  id: string;
  location: string;
  accommodation: string;
  check_in: string;
  check_out: string;
  guests: number;
  status: string;
  special_requests: string | null;
  total_price: number | null;
  created_at: string;
  profiles: {
    full_name: string | null;
    email: string | null;
    phone: string | null;
  } | null;
}

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  useEffect(() => {
    checkAdminAccess();
  }, []);

  const checkAdminAccess = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      navigate("/auth");
      return;
    }

    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", session.user.id)
      .eq("role", "admin")
      .single();

    if (!roleData) {
      toast({
        variant: "destructive",
        title: "Access Denied",
        description: "You don't have admin privileges.",
      });
      navigate("/");
      return;
    }

    setIsAdmin(true);
    fetchBookings();
  };

  const fetchBookings = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("bookings")
      .select(`
        *,
        profiles (
          full_name,
          email,
          phone
        )
      `)
      .order("created_at", { ascending: false });

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load bookings",
      });
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    const { error } = await supabase
      .from("bookings")
      .update({ status: newStatus })
      .eq("id", bookingId);

    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update booking status",
      });
    } else {
      toast({
        title: "Success",
        description: "Booking status updated",
      });
      fetchBookings();
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) return null;

  return (
    <div className="min-h-screen bg-gradient-calm py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Total Bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{bookings.length}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {bookings.filter((b) => b.status === "pending").length}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Confirmed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">
                {bookings.filter((b) => b.status === "confirmed").length}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest</TableHead>
                  <TableHead>Location</TableHead>
                  <TableHead>Accommodation</TableHead>
                  <TableHead>Dates</TableHead>
                  <TableHead>Guests</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{booking.profiles?.full_name || "N/A"}</p>
                        <p className="text-sm text-muted-foreground">
                          {booking.profiles?.email || "N/A"}
                        </p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {booking.location === "atlanta" ? "Atlanta" : "St. Lucia"}
                      </div>
                    </TableCell>
                    <TableCell>{booking.accommodation}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">
                          {new Date(booking.check_in).toLocaleDateString()} -{" "}
                          {new Date(booking.check_out).toLocaleDateString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{booking.guests}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          booking.status === "confirmed"
                            ? "default"
                            : booking.status === "pending"
                            ? "secondary"
                            : "destructive"
                        }
                      >
                        {booking.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {booking.status === "pending" && (
                          <Button
                            size="sm"
                            onClick={() =>
                              updateBookingStatus(booking.id, "confirmed")
                            }
                          >
                            Confirm
                          </Button>
                        )}
                        {booking.status !== "cancelled" && (
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() =>
                              updateBookingStatus(booking.id, "cancelled")
                            }
                          >
                            Cancel
                          </Button>
                        )}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
