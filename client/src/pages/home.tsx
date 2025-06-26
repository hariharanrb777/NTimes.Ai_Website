import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Target, Users, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
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

  // Animation variants
  const staggerContainer = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeInUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.43, 0.13, 0.23, 0.96],
      },
    },
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
          style={{
            backgroundImage: `url('${bannerPath}')`,
          }}
        ></div>
        
        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-16 h-16 bg-blue-400/20 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-40 right-32 animate-float-delay">
            <div className="w-24 h-24 bg-blue-300/15 rounded-full blur-md"></div>
          </div>
          <div className="absolute bottom-32 left-32 animate-pulse">
            <div className="w-12 h-12 bg-white/10 rounded-full blur-sm"></div>
          </div>
          <div className="absolute top-1/2 right-20 animate-bounce-slow">
            <div className="w-8 h-8 bg-blue-200/20 rotate-45"></div>
          </div>
          <div className="absolute bottom-20 right-1/3 animate-spin-slow">
            <div className="w-6 h-6 border-2 border-blue-300/30 rounded-full"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              variants={fadeInUp}
            >
              Empowering Global Businesses with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                AI Innovation
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto"
              variants={fadeInUp}
            >
              Transform your business with cutting-edge AI solutions. We build intelligent applications that drive growth, efficiency, and innovation.
            </motion.p>


          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-scroll-indicator"></div>
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-6 flex items-center justify-center">
                  <motion.img
                    src={superAgentPath}
                    alt="SuperAgent Real Estate AI Platform"
                    className="w-full h-full object-contain"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 2,
                      transition: { duration: 0.6 }
                    }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ArrowRight className="h-5 w-5 text-blue-600" />
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Target className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      SuperAgent
                    </motion.h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    AI-powered real estate platform for the US market, connecting buyers, sellers, and agents with
                    intelligent matching and insights.
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 w-0 group-hover:w-full transition-all duration-700"></div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group bg-gradient-to-br from-green-50 via-white to-green-50 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center">
                  <motion.img 
                    src={zipTripPath} 
                    alt="ZipTrip AI Travel Companion" 
                    className="w-full h-full object-contain"
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: -2,
                      transition: { duration: 0.6 }
                    }}
                  />
                  <motion.div 
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ArrowRight className="h-5 w-5 text-green-600" />
                    </div>
                  </motion.div>
                </div>
                <CardContent className="p-8 relative z-10">
                  <div className="flex items-center mb-6">
                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mr-4 shadow-lg"
                      whileHover={{ 
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <Sparkles className="w-7 h-7 text-white" />
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      ZipTrip
                    </motion.h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    Your AI travel companion that handles everything from booking flights and hotels to restaurant
                    recommendations and trip planning.
                  </p>

                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-500 to-teal-500 w-0 group-hover:w-full transition-all duration-700"></div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300/10 rounded-full animate-float-delay"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rotate-45 animate-spin-slow"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8 animate-fade-in-up">
              <Sparkles className="h-16 w-16 text-blue-200 mx-auto mb-6 animate-pulse hover:scale-110 transition-transform duration-300" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-text-reveal">Ready to Transform Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 animate-text-fade-in">
              Join the AI revolution and unlock your business potential with our cutting-edge solutions.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
