import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Bot, Cog, Zap, Brain, Target, Workflow } from "lucide-react"

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Bot,
      title: "AI Integration Services",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
      features: [
        "Custom AI model development",
        "API integration and deployment",
        "Legacy system modernization",
        "Performance optimization",
      ],
      color: "blue",
    },
    {
      icon: Cog,
      title: "Business Process Automation",
      description: "Automate repetitive tasks and streamline operations with intelligent automation.",
      features: [
        "Workflow automation design",
        "Document processing automation",
        "Customer service automation",
        "Data entry and validation",
      ],
      color: "green",
    },
    {
      icon: Brain,
      title: "Machine Learning Solutions",
      description: "Leverage advanced ML algorithms to extract insights and predict outcomes.",
      features: [
        "Predictive analytics models",
        "Natural language processing",
        "Computer vision applications",
        "Recommendation systems",
      ],
      color: "purple",
    },
    {
      icon: Zap,
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with intelligent analytics platforms.",
      features: ["Real-time data processing", "Interactive dashboards", "Automated reporting", "Anomaly detection"],
      color: "orange",
    },
    {
      icon: Target,
      title: "Custom AI Applications",
      description: "Build tailored AI applications that address your specific business challenges.",
      features: [
        "Requirements analysis",
        "Prototype development",
        "Full-scale implementation",
        "Ongoing support and maintenance",
      ],
      color: "red",
    },
    {
      icon: Workflow,
      title: "AI Consulting & Strategy",
      description: "Strategic guidance to help you navigate your AI transformation journey.",
      features: [
        "AI readiness assessment",
        "Technology roadmap planning",
        "ROI analysis and planning",
        "Change management support",
      ],
      color: "teal",
    },
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", badge: "bg-blue-100 text-blue-800" },
      green: { bg: "bg-green-100", text: "text-green-600", badge: "bg-green-100 text-green-800" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", badge: "bg-purple-100 text-purple-800" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", badge: "bg-orange-100 text-orange-800" },
      red: { bg: "bg-red-100", text: "text-red-600", badge: "bg-red-100 text-red-800" },
      teal: { bg: "bg-teal-100", text: "text-teal-600", badge: "bg-teal-100 text-teal-800" },
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.blue
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">AI Solutions & Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI services to transform your business operations, enhance efficiency, and drive innovation
              across all sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const colors = getColorClasses(solution.color)
              const IconComponent = solution.icon

              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mb-4`}>
                      <IconComponent className={`h-8 w-8 ${colors.text}`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                    <p className="text-gray-600">{solution.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 ${colors.text.replace("text-", "bg-")} rounded-full mr-3`}></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant="outline"
                      className="w-full bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
            <p className="text-xl text-gray-600">A structured approach to ensure successful AI implementation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understand your business needs and identify AI opportunities",
              },
              { step: "02", title: "Strategy", description: "Develop a comprehensive AI implementation roadmap" },
              {
                step: "03",
                title: "Development",
                description: "Build and test AI solutions tailored to your requirements",
              },
              {
                step: "04",
                title: "Deployment",
                description: "Launch and integrate AI solutions into your operations",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI solutions can drive growth and efficiency for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
