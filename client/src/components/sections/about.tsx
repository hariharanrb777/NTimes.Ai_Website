import { Card, CardContent } from "@/components/ui/card";
import { Users, Globe, Rocket, Handshake, Star, Lightbulb, Heart } from "lucide-react";
import logoPath from "@assets/logo.png";

export default function About() {
  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "AI specialists & developers",
      color: "bg-primary"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Worldwide client base",
      color: "bg-secondary"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge solutions",
      color: "bg-accent"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Long-term relationships",
      color: "bg-primary"
    }
  ];

  const values = [
    {
      icon: Star,
      title: "Excellence",
      description: "We strive for perfection in every solution we deliver, ensuring the highest quality and performance standards.",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI, creating groundbreaking solutions for tomorrow's challenges.",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We build trust through transparency, ethical practices, and genuine commitment to our clients' success.",
      color: "bg-accent/10 text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-6">
              About NTimes.AI
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              At NTimes.AI, we're passionate about empowering global businesses with cutting-edge artificial intelligence solutions. Our mission is to make AI accessible, practical, and transformative for organizations of all sizes.
            </p>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Founded by industry experts with decades of combined experience in AI, software development, and business strategy, we understand the unique challenges modern businesses face in today's rapidly evolving digital landscape.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div key={highlight.title} className="flex items-center">
                    <div className={`${highlight.color} w-12 h-12 rounded-full flex items-center justify-center mr-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800">{highlight.title}</h4>
                      <p className="text-neutral-600 text-sm">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <Card className="gradient-card rounded-2xl p-8 border-none">
              <CardContent className="text-center p-0">
                <img 
                  src={logoPath} 
                  alt="NTimes.AI Company Logo" 
                  className="h-20 w-auto mx-auto mb-6" 
                />
                <h3 className="text-2xl font-bold text-neutral-800 mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To be the global leader in AI-powered business solutions, democratizing artificial intelligence and enabling every organization to achieve exponential growth through smart technology adoption.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-neutral-800 text-center mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="text-center">
                  <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-semibold text-neutral-800 mb-3">{value.title}</h4>
                  <p className="text-neutral-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
