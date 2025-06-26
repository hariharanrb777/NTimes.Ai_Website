import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Home, Plane, MapPin, Calendar, Users, Search, Check } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import superAgentPath from "@assets/superagent.jpg";
import zipTripPath from "@assets/ziptrip.jpg";

export default function ProductsPage() {
  const products = [
    {
      name: "SuperAgent",
      category: "Real Estate AI",
      categoryColor: "bg-blue-100 text-blue-800",
      image: superAgentPath,
      description: "Revolutionary AI-powered real estate platform designed specifically for the US market. SuperAgent connects buyers, sellers, and real estate professionals through intelligent matching, market insights, and automated workflows.",
      features: [
        "AI-powered property matching and recommendations",
        "Real-time market analytics and insights", 
        "Streamlined transaction management",
        "Mobile-first design for on-the-go access",
        "Smart property search and filtering",
        "Automated lead generation and nurturing"
      ],
      detailedFeatures: [
        { icon: Search, text: "Smart Property Search" },
        { icon: MapPin, text: "Location Intelligence" },
        { icon: Users, text: "Agent Matching" },
        { icon: Home, text: "Market Analysis" }
      ],
      buttonText: "Learn More About SuperAgent",
      buttonClass: "bg-blue-600 hover:bg-blue-700"
    },
    {
      name: "ZipTrip", 
      category: "Travel AI",
      categoryColor: "bg-green-100 text-green-800",
      image: zipTripPath,
      description: "Your intelligent travel companion that revolutionizes trip planning and booking. ZipTrip uses AI to handle everything from flight and hotel reservations to restaurant recommendations and personalized itinerary creation.",
      features: [
        "Voice-activated trip planning and booking",
        "Integrated flight, hotel, and restaurant booking",
        "Smart itinerary optimization", 
        "Real-time travel updates and assistance",
        "Personalized recommendations based on preferences",
        "Multi-platform booking integration"
      ],
      detailedFeatures: [
        { icon: Plane, text: "Flight Booking" },
        { icon: Home, text: "Hotel Reservations" },
        { icon: Calendar, text: "Trip Planning" },
        { icon: MapPin, text: "Local Recommendations" }
      ],
      buttonText: "Discover ZipTrip Features",
      buttonClass: "bg-green-600 hover:bg-green-700"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our AI-Powered Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative applications that leverage artificial intelligence to solve real-world challenges and enhance user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <div key={product.name} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <Badge className={`mb-4 ${product.categoryColor}`}>{product.category}</Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{product.name}</h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {product.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {product.detailedFeatures.map((feature, idx) => {
                      const Icon = feature.icon;
                      return (
                        <div key={idx} className="flex items-center">
                          <Icon className={`h-5 w-5 mr-3 ${product.name === 'SuperAgent' ? 'text-blue-600' : 'text-green-600'}`} />
                          <span className="text-gray-700">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-600">
                        <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${product.name === 'SuperAgent' ? 'text-blue-600' : 'text-green-600'}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>


                </div>

                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <Card className="border-0 shadow-2xl overflow-hidden">
                    <div className="aspect-square relative">
                      <img 
                        src={product.image} 
                        alt={`${product.name} ${product.category}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Product Capabilities</h2>
            <p className="text-xl text-gray-600">Advanced AI features that set our products apart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Home className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold">SuperAgent Features</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "AI-powered property valuation",
                    "Predictive market analytics", 
                    "Automated lead generation",
                    "Smart contract management",
                    "Virtual property tours",
                    "Real-time market monitoring"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Plane className="h-6 w-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-semibold">ZipTrip Features</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    "Intelligent itinerary optimization",
                    "Real-time price monitoring",
                    "Personalized recommendations", 
                    "Multi-platform booking integration",
                    "Voice-activated planning",
                    "Smart travel notifications"
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}