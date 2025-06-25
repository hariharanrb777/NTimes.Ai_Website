import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import superAgentPath from "@assets/superagent.jpg";
import zipTripPath from "@assets/ziptrip.jpg";

export default function Products() {
  const products = [
    {
      name: "SuperAgent",
      category: "Real Estate",
      categoryColor: "bg-primary/10 text-primary",
      image: superAgentPath,
      description: "Revolutionary real estate application designed specifically for the US market. SuperAgent empowers both agents and clients with AI-driven property search, market analytics, and seamless transaction management.",
      features: [
        "AI-powered property matching and recommendations",
        "Real-time market analytics and insights",
        "Streamlined transaction management",
        "Mobile-first design for on-the-go access"
      ],
      buttonText: "Learn More About SuperAgent",
      buttonClass: "bg-primary hover:bg-secondary"
    },
    {
      name: "ZipTrip",
      category: "Travel",
      categoryColor: "bg-accent/10 text-accent",
      image: zipTripPath,
      description: "Your ultimate AI-powered travel companion that handles everything from flight bookings to restaurant reservations. ZipTrip uses voice interaction and smart planning to create seamless travel experiences.",
      features: [
        "Voice-activated trip planning and booking",
        "Integrated flight, hotel, and restaurant booking",
        "Smart itinerary optimization",
        "Real-time travel updates and assistance"
      ],
      buttonText: "Discover ZipTrip Features",
      buttonClass: "bg-accent hover:bg-red-600"
    }
  ];

  return (
    <section id="products" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Discover our innovative AI-powered applications designed to revolutionize industries and enhance user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <Card key={product.name} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <img 
                  src={product.image} 
                  alt={`${product.name} - ${product.category} App Technology`} 
                  className="w-full h-64 object-cover rounded-xl mb-6"
                />
                
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold text-neutral-800">{product.name}</h3>
                  <Badge className={`ml-3 ${product.categoryColor}`}>
                    {product.category}
                  </Badge>
                </div>
                
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-neutral-600">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/products">
                  <Button className={`w-full ${product.buttonClass} text-white py-3 font-semibold`}>
                    {product.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
