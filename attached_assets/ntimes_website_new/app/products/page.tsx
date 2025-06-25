import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Home, Plane, MapPin, Calendar, Users, Search } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our AI-Powered Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover innovative applications that leverage artificial intelligence to solve real-world challenges and
              enhance user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {/* SuperAgent */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="mb-4 bg-blue-100 text-blue-800">Real Estate AI</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">SuperAgent</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Revolutionary AI-powered real estate platform designed specifically for the US market. SuperAgent
                  connects buyers, sellers, and real estate professionals through intelligent matching, market insights,
                  and automated workflows.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Search className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Smart Property Search</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Location Intelligence</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Agent Matching</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">Market Analysis</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                    Request Demo
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="aspect-square relative">
                    <Image
                      src="/images/product.jpg"
                      alt="SuperAgent Real Estate AI Platform"
                      fill
                      className="object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>

            {/* ZipTrip */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="aspect-square relative">
                    <Image src="/images/ziptrip.jpg" alt="ZipTrip AI Travel Companion" fill className="object-cover" />
                  </div>
                </Card>
              </div>

              <div>
                <Badge className="mb-4 bg-green-100 text-green-800">Travel AI</Badge>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">ZipTrip</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Your intelligent travel companion that revolutionizes trip planning and booking. ZipTrip uses AI to
                  handle everything from flight and hotel reservations to restaurant recommendations and personalized
                  itinerary creation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <Plane className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Flight Booking</span>
                  </div>
                  <div className="flex items-center">
                    <Home className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Hotel Reservations</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Trip Planning</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Local Recommendations</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline" className="bg-white text-gray-700 border-gray-300 hover:bg-gray-50">
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
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
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="h-6 w-6 text-blue-600 mr-3" />
                  SuperAgent Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>AI-powered property valuation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Predictive market analytics</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Automated lead generation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Smart contract management</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span>Virtual property tours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Plane className="h-6 w-6 text-green-600 mr-3" />
                  ZipTrip Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Intelligent itinerary optimization</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Real-time price monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Personalized recommendations</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Multi-platform booking integration</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    <span>Voice-activated planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
