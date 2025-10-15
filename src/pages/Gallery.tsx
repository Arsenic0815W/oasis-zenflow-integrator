import { Card } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function Gallery() {
  // Placeholder for gallery images - will be populated with actual images from documents
  const galleryItems = [
    { title: "Spa Massage Room", category: "Atlanta" },
    { title: "Yoga Retreat Room", category: "Atlanta" },
    { title: "Creek View Deck", category: "Atlanta" },
    { title: "Relaxation Lounge", category: "Atlanta" },
    { title: "Fitness & Sauna", category: "Atlanta" },
    { title: "Modern Basement", category: "Atlanta" },
    { title: "Ocean View Balcony", category: "St. Lucia" },
    { title: "Gazebo Sunset", category: "St. Lucia" },
    { title: "Caribbean Interior", category: "St. Lucia" },
    { title: "Tropical Surroundings", category: "St. Lucia" },
    { title: "Beach & Gardens", category: "St. Lucia" },
    { title: "Wellness Spaces", category: "Both Locations" },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">Visual Gallery</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Spaces</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a visual journey through our tranquil Atlanta and St. Lucia locations
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden hover:shadow-[var(--shadow-soft)] transition-[var(--transition-smooth)] group"
            >
              <div className="relative h-64 bg-gradient-calm flex items-center justify-center">
                <div className="text-center p-6">
                  <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <span className="text-sm text-primary">{item.category}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-calm border-2 border-primary/20 max-w-2xl mx-auto">
            <p className="text-muted-foreground">
              📸 High-resolution images showcasing our facilities, accommodations, and natural surroundings 
              will be added here. Contact us for a virtual tour or visit our social media for more photos.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
