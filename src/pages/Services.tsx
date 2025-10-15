import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Heart, Leaf, Dumbbell, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Sparkles,
      title: "Massage Therapy",
      description: "Professional therapeutic massage to release tension and restore balance",
      offerings: ["Swedish Massage", "Deep Tissue", "Hot Stone", "Aromatherapy Massage"],
    },
    {
      icon: Heart,
      title: "Facial Treatments",
      description: "Rejuvenating facial treatments for glowing, healthy skin",
      offerings: ["Deep Cleansing Facial", "Anti-Aging Treatment", "Hydrating Facial", "Organic Facials"],
    },
    {
      icon: Leaf,
      title: "Body Treatments",
      description: "Luxurious body treatments to detoxify and nourish",
      offerings: ["Body Scrubs", "Body Wraps", "Detox Treatments", "Island Scrubs"],
    },
    {
      icon: Sparkles,
      title: "Aromatherapy",
      description: "Healing power of essential oils for mind and body wellness",
      offerings: ["Custom Blends", "Aromatherapy Sessions", "Essential Oil Therapy"],
    },
    {
      icon: Dumbbell,
      title: "Yoga & Meditation",
      description: "Guided sessions for inner peace and physical wellness",
      offerings: ["Beach Yoga (St. Lucia)", "Meditation Classes", "Private Sessions", "Group Classes"],
    },
    {
      icon: Heart,
      title: "Wellness Classes",
      description: "1-hour Body, Mind, and Spirit Wellness classes",
      offerings: ["Holistic Wellness", "Guided Meditation", "Breathwork", "Mindfulness Training"],
    },
  ];

  const facilities = [
    {
      title: "Sauna",
      description: "Traditional sauna for detoxification and relaxation",
      location: "Atlanta",
    },
    {
      title: "Jacuzzi",
      description: "Private jacuzzi in luxury suite",
      location: "Atlanta",
    },
    {
      title: "Fitness Room",
      description: "Fully equipped fitness facility",
      location: "Atlanta",
    },
    {
      title: "SPA Services",
      description: "Professional spa treatments",
      location: "Both Locations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Holistic Wellness Services</span>
          </div>
          <h1 className="text-5xl font-bold mb-6">Restore Body, Mind & Spirit</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive wellness treatments designed to rejuvenate and heal. Experience authentic 
            holistic care from certified wellness therapists.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-ocean rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Sparkles className="h-3 w-3 text-primary mt-1 flex-shrink-0" />
                          <span>{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Premium Facilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-sunset rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{facility.description}</p>
                  <span className="text-xs text-primary font-medium">{facility.location}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Special Offerings</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-2 border-primary/20">
              <CardContent className="p-0">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Complimentary Amenities</h3>
                <p className="text-muted-foreground">
                  Enjoy complimentary snacks, beverages, and a surprise SPA treatment for special occasions
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-2 border-primary/20">
              <CardContent className="p-0">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Certified Therapists</h3>
                <p className="text-muted-foreground">
                  All treatments performed by certified Holistic Wellness Therapists
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-8 border-2 border-primary/20">
              <CardContent className="p-0">
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Mediterranean Cuisine</h3>
                <p className="text-muted-foreground">
                  Optional authentic Mediterranean cuisine available at Atlanta location
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-ocean text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Begin Your Wellness Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book your personalized wellness experience today
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/book">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Your Service
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
