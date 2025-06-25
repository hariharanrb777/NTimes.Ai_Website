import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        service: "",
        message: ""
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: ["hello@ntimes.ai", "support@ntimes.ai"],
      color: "bg-primary"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      color: "bg-secondary"
    },
    {
      icon: MapPin,
      title: "Office",
      details: ["123 Innovation Drive", "San Francisco, CA 94102"],
      color: "bg-accent"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM PST" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM PST" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="bg-neutral-50 rounded-2xl border-none">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-neutral-700 mb-2">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="John"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-neutral-700 mb-2">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Doe"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-neutral-700 mb-2">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.doe@company.com"
                    className="mt-2"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="company" className="text-sm font-medium text-neutral-700 mb-2">
                    Company
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    placeholder="Your Company Name"
                    className="mt-2"
                  />
                </div>
                
                <div>
                  <Label htmlFor="service" className="text-sm font-medium text-neutral-700 mb-2">
                    Service Interest
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automation">Automation Services</SelectItem>
                      <SelectItem value="ai-features">AI Features Integration</SelectItem>
                      <SelectItem value="ai-integration">AI Integration</SelectItem>
                      <SelectItem value="products">Product Development</SelectItem>
                      <SelectItem value="consultation">General Consultation</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-neutral-700 mb-2">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project or requirements..."
                    rows={4}
                    className="mt-2 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-secondary text-white py-4 font-semibold"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex items-start">
                      <div className={`${info.color} w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-neutral-800 mb-1">{info.title}</h4>
                        {info.details.map((detail, index) => (
                          <p key={index} className="text-neutral-600">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h4 className="text-xl font-semibold text-neutral-800 mb-4">Business Hours</h4>
              <div className="space-y-2 text-neutral-600">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold text-neutral-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {["twitter", "linkedin", "github", "youtube"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-secondary transition-colors duration-200"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <span className="text-sm font-bold">{platform[0].toUpperCase()}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
