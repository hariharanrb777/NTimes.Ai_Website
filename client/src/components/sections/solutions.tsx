import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Brain, Plug, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Solutions() {
  const solutions = [
    {
      icon: Settings,
      title: "Automation Services",
      description: "Transform manual processes into intelligent, automated workflows that increase efficiency and reduce operational costs.",
      gradient: "from-primary/5 to-primary/10",
      iconBg: "bg-primary",
      buttonColor: "bg-primary hover:bg-secondary",
      features: [
        "Process automation and optimization",
        "Workflow intelligence and monitoring",
        "Custom automation solutions",
        "ROI tracking and analytics"
      ],
      buttonText: "Explore Automation"
    },
    {
      icon: Brain,
      title: "Enabling AI Features",
      description: "Enhance your applications with cutting-edge AI capabilities that improve user experience and business outcomes.",
      gradient: "from-secondary/5 to-secondary/10",
      iconBg: "bg-secondary",
      buttonColor: "bg-secondary hover:bg-blue-700",
      features: [
        "Machine learning model integration",
        "Natural language processing",
        "Computer vision and image recognition",
        "Predictive analytics and insights"
      ],
      buttonText: "Discover AI Features"
    },
    {
      icon: Plug,
      title: "AI Integration",
      description: "Seamlessly integrate AI technologies into your existing systems and infrastructure for maximum impact.",
      gradient: "from-accent/5 to-accent/10",
      iconBg: "bg-accent",
      buttonColor: "bg-accent hover:bg-red-600",
      features: [
        "API development and integration",
        "Legacy system modernization",
        "Cloud AI services deployment",
        "Performance optimization"
      ],
      buttonText: "Learn Integration"
    }
  ];



  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive AI services designed to transform your business operations and drive innovation across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <Card 
                key={solution.title} 
                className={`bg-gradient-to-br ${solution.gradient} rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-none`}
              >
                <CardContent className="p-0">
                  <div className={`${solution.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4">{solution.title}</h3>
                  <p className="text-neutral-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-neutral-600">
                        <ArrowRight className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/solutions">
                    <Button className={`w-full ${solution.buttonColor} text-white py-3 font-semibold`}>
                      {solution.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Solutions CTA Section */}
        <div className="mt-16 gradient-primary rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
            Let our experts help you identify the perfect AI solution for your unique business challenges and goals.
          </p>

        </div>
      </div>
    </section>
  );
}
