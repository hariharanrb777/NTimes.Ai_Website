import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Target, Lightbulb, Award, ArrowRight, Globe, Rocket, Handshake, Star, Heart } from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import logoPath from "@assets/logo.png";
import bannerPath from "@assets/banner.jpg";
import aboutImagePath from "@assets/about_1750861561002.jpg";

export default function AboutPage() {
  const highlights = [
    {
      icon: Users,
      title: "Expert Team",
      description: "AI specialists & developers",
      color: "bg-blue-600"
    },
    {
      icon: Globe,
      title: "Global Reach", 
      description: "Worldwide client base",
      color: "bg-green-600"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Cutting-edge solutions",
      color: "bg-purple-600"
    },
    {
      icon: Handshake,
      title: "Partnership",
      description: "Long-term relationships",
      color: "bg-blue-600"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We continuously push the boundaries of what's possible with AI technology, constantly exploring new solutions and approaches to solve tomorrow's challenges.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Target,
      title: "Excellence", 
      description: "We deliver high-quality solutions that exceed expectations and drive measurable business results, maintaining the highest standards in everything we do.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We work closely with our clients as partners, ensuring solutions that truly fit their unique needs and fostering long-term relationships.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain the highest ethical standards in AI development and business practices, building trust through transparency and commitment.",
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const team = [
    {
      name: "Srinivas Menta",
      role: "CEO",
      bio: "Strategic leader driving AI innovation across global markets with extensive experience in technology transformation."
    },
    {
      name: "Kiran Mandhadi",
      role: "CFO",
      bio: "Financial strategist ensuring sustainable growth and optimal resource allocation for AI development initiatives."
    },
    {
      name: "Rajesh N",
      role: "Digital Marketing Manager",
      bio: "Marketing expert specializing in AI solutions promotion and building strong digital presence for tech products."
    },
    {
      name: "Hariharan R B",
      role: "AI Engineer",
      bio: "Senior AI engineer developing cutting-edge machine learning solutions and neural network architectures."
    },
    {
      name: "Thilak Sai K",
      role: "AI Engineer",
      bio: "AI specialist focused on natural language processing and computer vision applications for business solutions."
    },
    {
      name: "Mahalakshmi A",
      role: "AI Engineer",
      bio: "AI engineer specializing in data analytics and intelligent automation systems for enterprise applications."
    },
    {
      name: "Harish A",
      role: "AI Engineer",
      bio: "AI engineer developing innovative algorithms and implementing scalable AI solutions for diverse industry applications."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-100 text-blue-800">About NTimes.AI</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Pioneering the Future of AI Innovation
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                At NTimes.AI, we're passionate about empowering global businesses with cutting-edge artificial intelligence solutions. Our mission is to make AI accessible, practical, and transformative for organizations of all sizes.
              </p>
            </div>
            <div className="relative flex justify-center">
              <img 
                src={aboutImagePath} 
                alt="NTimes.AI - AI Innovation Network" 
                className="max-w-full h-auto rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                About NTimes.AI
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded by industry experts with decades of combined experience in AI, software development, and business strategy, we understand the unique challenges modern businesses face in today's rapidly evolving digital landscape.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our team combines deep technical expertise with practical business acumen to deliver AI solutions that not only work but drive real, measurable impact for our clients worldwide.
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
                        <h4 className="font-semibold text-gray-800">{highlight.title}</h4>
                        <p className="text-gray-600 text-sm">{highlight.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="relative">
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-0 shadow-lg">
                <CardContent className="text-center p-8">
                  <img 
                    src={logoPath} 
                    alt="NTimes.AI Company Logo" 
                    className="h-20 w-auto mx-auto mb-6" 
                  />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the global leader in AI-powered business solutions, democratizing artificial intelligence and enabling every organization to achieve exponential growth through smart technology adoption.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and help us deliver exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="text-center p-8">
                    <div className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Industry experts driving innovation and excellence in AI solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => {
              const colors = [
                'from-blue-500 to-blue-700',
                'from-purple-500 to-purple-700', 
                'from-green-500 to-green-700',
                'from-indigo-500 to-indigo-700',
                'from-orange-500 to-orange-700',
                'from-pink-500 to-pink-700',
                'from-teal-500 to-teal-700'
              ];
              const textColors = [
                'text-blue-600',
                'text-purple-600',
                'text-green-600', 
                'text-indigo-600',
                'text-orange-600',
                'text-pink-600',
                'text-teal-600'
              ];
              return (
                <Card key={member.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                  <div className={`h-32 bg-gradient-to-br ${colors[index]} flex items-center justify-center`}>
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardContent className="text-center p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className={`${textColors[index]} font-medium text-sm mb-3`}>{member.role}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Join Us on the AI Journey</h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your business with AI? Let's work together to unlock your organization's potential.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}