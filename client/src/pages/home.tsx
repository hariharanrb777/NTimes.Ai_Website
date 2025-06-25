import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import bannerPath from "@assets/banner.jpg";
import superAgentPath from "@assets/superagent.jpg";
import zipTripPath from "@assets/ziptrip.jpg";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section
        className="relative py-20 lg:py-32 bg-cover bg-center bg-no-repeat min-h-[600px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('${bannerPath}')`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            <h1 className={`text-4xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <span className="font-bold text-white">Empowering Global Businesses with AI Innovation</span>
            </h1>
            <p className={`text-xl text-white font-bold mb-8 leading-relaxed max-w-3xl mx-auto drop-shadow-md transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              Transform your business with cutting-edge AI solutions. We build intelligent applications that drive
              growth, efficiency, and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Why Choose NTimes.AI?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver innovative AI solutions that transform businesses and drive measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">Lightning Fast</h3>
                <p className="text-gray-600">
                  Rapid development and deployment of AI solutions that get you to market faster.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">Precision Focused</h3>
                <p className="text-gray-600">
                  Tailored AI solutions that address your specific business challenges and goals.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 transform group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">Expert Team</h3>
                <p className="text-gray-600">Experienced AI engineers and consultants dedicated to your success.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Featured Products</h2>
            <p className="text-xl text-gray-600">Innovative AI applications that solve real-world problems</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={superAgentPath}
                  alt="SuperAgent Real Estate AI Platform"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">SuperAgent</h3>
                <p className="text-gray-600 mb-6">
                  AI-powered real estate platform for the US market, connecting buyers, sellers, and agents with
                  intelligent matching and insights.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-500 overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={zipTripPath} 
                  alt="ZipTrip AI Travel Companion" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-600 transition-colors duration-300">ZipTrip</h3>
                <p className="text-gray-600 mb-6">
                  Your AI travel companion that handles everything from booking flights and hotels to restaurant
                  recommendations and trip planning.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <Sparkles className="h-16 w-16 text-blue-200 mx-auto mb-6 animate-pulse" />
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Join the AI revolution and unlock your business potential with our cutting-edge solutions.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
