import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Atlanta Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Atlanta Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>Suburbs of Atlanta, GA<br />Near Stone Mountain Park</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p>Contact for details</p>
              </div>
            </div>
          </div>

          {/* St. Lucia Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">St. Lucia Location</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>The Morne/LA Toc<br />St. Lucia, W.I</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <p>758.451.7375</p>
              </div>
            </div>
          </div>

          {/* Contact & Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:oasiscalmholisticcenter@gmail.com" className="hover:text-primary-foreground">
                  oasiscalmholisticcenter@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <Link to="/book" className="text-primary-foreground hover:underline font-medium">
                  Book Your Retreat →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Oasis of Calm Holistic Wellness & SPA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
