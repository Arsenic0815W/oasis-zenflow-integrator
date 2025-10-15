import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, MapPin, Calendar } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";

export default function Home() {
  const features = [
    {
      title: "Atlanta Sanctuary",
      description: "Luxurious suite and modern basement retreat amidst lush foliage and flowing creek",
      price: "From $82/night",
      link: "/atlanta",
    },
    {
      title: "St. Lucia Paradise",
      description: "Caribbean escape with breathtaking ocean views and tropical ambiance",
      price: "From $100/night",
      link: "/st-lucia",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Peaceful wellness retreat" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Premium Wellness Experience</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Restore Your <span className="bg-gradient-ocean bg-clip-text text-transparent">Balance</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience tranquility at our Atlanta and St. Lucia locations. Book your personalized wellness journey today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="lg" className="text-lg px-8">
              <Link to="/book">
                <Calendar className="mr-2 h-5 w-5" />
                Book Your Appointment
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 px-4 bg-gradient-calm">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Retreat</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Two exceptional locations designed for ultimate relaxation and rejuvenation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group">
                <CardContent className="p-8">
                  <MapPin className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <p className="text-lg font-semibold text-primary mb-4">{feature.price}</p>
                  <Button asChild variant="default" className="group-hover:bg-primary-glow">
                    <Link to={feature.link}>Learn More →</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Holistic Wellness Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive treatments designed to restore your body, mind, and spirit
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {["Massage Therapy", "Facial Treatments", "Body Treatments", "Aromatherapy", 
              "Yoga Sessions", "Meditation Classes", "Sauna & Jacuzzi", "Fitness Room"].map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)]">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-ocean rounded-full mx-auto mb-3 flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="hero" size="lg">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-ocean text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Begin Your Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the perfect blend of luxury, nature, and holistic wellness
          </p>
          <Button asChild variant="secondary" size="lg" className="text-lg px-8">
            <Link to="/book">
              <Calendar className="mr-2 h-5 w-5" />
              Book Your Retreat Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
