import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Bot, Cog, Brain, Target, Workflow, Zap } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Bot,
      title: "AI Integration Services", 
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows with our comprehensive integration services.",
      features: [
        "Custom AI model development and deployment",
        "API integration and system connectivity",
        "Legacy system modernization and upgrades",
        "Performance optimization and monitoring"
      ],
      color: "blue",
      gradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Cog,
      title: "Business Process Automation",
      description: "Transform manual processes into intelligent, automated workflows that increase efficiency and reduce operational costs.",
      features: [
        "Workflow automation design and implementation",
        "Document processing and data extraction",
        "Customer service automation and chatbots", 
        "Data entry validation and processing"
      ],
      color: "green", 
      gradient: "from-green-50 to-green-100",
      iconBg: "bg-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: Brain,
      title: "Enabling AI Features",
      description: "Enhance your applications with cutting-edge AI capabilities that improve user experience and drive measurable business outcomes.",
      features: [
        "Machine learning model integration",
        "Natural language processing capabilities",
        "Computer vision and image recognition",
        "Predictive analytics and insights generation"
      ],
      color: "purple",
      gradient: "from-purple-50 to-purple-100", 
      iconBg: "bg-purple-600",
      buttonColor: "bg-purple-600 hover:bg-purple-700"
    },
    {
      icon: Zap,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with intelligent analytics platforms that drive informed decision-making.",
      features: [
        "Real-time data processing and analysis",
        "Interactive dashboards and visualizations",
        "Automated reporting and notifications",
        "Anomaly detection and alerting systems"
      ],
      color: "orange",
      gradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-600", 
      buttonColor: "bg-orange-600 hover:bg-orange-700"
    },
    {
      icon: Target,
      title: "Custom AI Applications",
      description: "Build tailored AI applications that address your specific business challenges and deliver measurable results.",
      features: [
        "Comprehensive requirements analysis",
        "Prototype development and testing",
        "Full-scale implementation and deployment",
        "Ongoing support and maintenance services"
      ],
      color: "red",
      gradient: "from-red-50 to-red-100",
      iconBg: "bg-red-600",
      buttonColor: "bg-red-600 hover:bg-red-700"
    },
    {
      icon: Workflow,
      title: "AI Consulting & Strategy",
      description: "Strategic guidance and expert consultation to help you navigate your AI transformation journey successfully.",
      features: [
        "AI readiness assessment and planning",
        "Technology roadmap development",
        "ROI analysis and business case development", 
        "Change management and training support"
      ],
      color: "teal",
      gradient: "from-teal-50 to-teal-100",
      iconBg: "bg-teal-600",
      buttonColor: "bg-teal-600 hover:bg-teal-700"
    }
  ];

  const scrollToContact = () => {
    window.location.href = "/contact";
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">AI Solutions & Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services to transform your business operations, enhance efficiency, and drive innovation across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={solution.title}
                  className={`bg-gradient-to-br ${solution.gradient} border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
                >
                  <CardContent className="p-8">
                    <div className={`${solution.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    <ul className="space-y-3 mb-8">
                      {solution.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-600">
                          <ArrowRight className="h-4 w-4 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className={`w-full ${solution.buttonColor} text-white py-3 font-semibold`}>
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let our experts help you identify the perfect AI solution for your unique business challenges and goals. Schedule a consultation to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={scrollToContact}
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 font-semibold"
                size="lg"
              >
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 font-semibold"
                size="lg"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}