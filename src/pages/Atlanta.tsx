import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Users, Bed, Sparkles, Calendar } from "lucide-react";

export default function Atlanta() {
  const accommodations = [
    {
      title: "Luxurious Private Suite",
      view: "Hillside view",
      sleeps: "2 Guests",
      bed: "King Bed",
      features: ["Private deck overlooking creek", "Jacuzzi", "Walk-in closet", "Keyless entry"],
      price: "$82",
      period: "nightly",
    },
    {
      title: "Modern Basement Retreat",
      view: "Creekside view",
      sleeps: "5 Guests",
      bed: "Multiple beds",
      features: ["Entertainment room", "Fitness room", "Sauna", "Private lounge", "Dining area"],
      price: "$125",
      period: "nightly",
    },
  ];

  const amenities = [
    "Walk-in Showers",
    "Walk-in closet",
    "Pull-Out Sofa",
    "Fridge",
    "Microwave",
    "Air Fryer Cooker",
    "Air Conditioning",
    "Free Parking",
    "Keyless Entry",
    "Free WiFi",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-medium">Atlanta, Georgia</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">Oasis of Calm Atlanta</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Located in the suburbs of Atlanta, amidst lush foliage and a continuously flowing creek 
            that beckons you to rest, reset and rejuvenate. Experience a peaceful sanctuary 
            conveniently near Stone Mountain Park, theaters, restaurants, and shopping.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Card className="border-2 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6">A Unique Wellness Retreat</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The expansive grounds feature indigenous trees, plants, and birds—an amazingly peaceful 
                  and tranquil ambience for nature lovers. Guests can relax in a swing hammock or go for a 
                  nature walk along the nearby walking trail.
                </p>
                <p>
                  Enjoy complimentary snacks, beverages and a surprise SPA treatment if you are celebrating 
                  a special occasion. The grounds can be set up for weddings, anniversaries or birthday parties.
                </p>
                <p>
                  Optional authentic Mediterranean cuisine and SPA services including sauna are available. 
                  1-hour Body, Mind, and Spirit Wellness classes are presented by our certified on-site 
                  Holistic Wellness Therapist.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Choose Your Accommodation</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {accommodations.map((room, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <CardHeader className="bg-gradient-ocean text-white">
                  <CardTitle className="text-2xl">{room.title}</CardTitle>
                  <p className="text-sm opacity-90">{room.view}</p>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex gap-6 mb-6 text-sm">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      <span>{room.sleeps}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Bed className="h-4 w-4 text-primary" />
                      <span>{room.bed}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {room.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{room.price}</span>
                    <span className="text-muted-foreground">/ {room.period}</span>
                  </div>
                  
                  <Button asChild variant="hero" className="w-full">
                    <Link to="/book">
                      <Calendar className="mr-2 h-4 w-4" />
                      Book This Room
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Amenities & Features</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {amenities.map((amenity, index) => (
              <Card key={index} className="text-center p-4 hover:bg-gradient-calm transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <Sparkles className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">{amenity}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-ocean text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience Atlanta's Hidden Oasis?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your peaceful retreat today and discover true tranquility
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/book">Reserve Your Stay</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
