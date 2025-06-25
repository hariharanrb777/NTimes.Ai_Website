import { Card, CardContent } from "@/components/ui/card";
import { Bot, Lightbulb, Settings } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Bot,
      title: "AI Automation",
      description: "Streamline operations with intelligent automation that reduces costs and increases efficiency."
    },
    {
      icon: Lightbulb,
      title: "Smart Features",
      description: "Enable cutting-edge AI capabilities that enhance user experience and drive engagement."
    },
    {
      icon: Settings,
      title: "Seamless Integration",
      description: "Integrate AI solutions effortlessly into your existing systems and workflows."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Why Choose NTimes.AI?
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We deliver comprehensive AI solutions that transform how businesses operate, innovate, and scale globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="text-center p-8 hover:shadow-lg transition-shadow duration-200 border-none">
                <CardContent className="pt-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-800 mb-4">{feature.title}</h3>
                  <p className="text-neutral-600">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
