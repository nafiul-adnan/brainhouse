
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Code, Users, Briefcase, BookOpen, Mail, Linkedin, Facebook, ArrowRight } from "lucide-react";
import ServiceModal from "@/components/ServiceModal";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: "career-coaching",
      title: "Software Engineering Career Coaching",
      description: "Personalized guidance to accelerate your software engineering career",
      icon: <Users className="w-8 h-8" />,
      category: "Coaching",
      features: ["Career roadmap planning", "Skill gap analysis", "Goal setting & tracking"]
    },
    {
      id: "faang-roadmap",
      title: "FAANG Software Engineer Roadmap",
      description: "Structured path to land your dream job at top tech companies",
      icon: <BookOpen className="w-8 h-8" />,
      category: "Coaching",
      features: ["Comprehensive study plans", "Resource recommendations", "Timeline optimization"]
    },
    {
      id: "one-on-one-coaching",
      title: "1:1 Coaching with FAANG/Ex-FAANG Engineers",
      description: "Direct mentorship from engineers who've been there and done that",
      icon: <Star className="w-8 h-8" />,
      category: "Coaching",
      features: ["Personalized sessions", "Industry insights", "Career strategy"]
    },
    {
      id: "mock-interviews",
      title: "Mock Interviews - $100/session",
      description: "Practice with real FAANG engineers and get detailed feedback",
      icon: <Briefcase className="w-8 h-8" />,
      category: "Interview Prep",
      features: ["Technical interviews", "Behavioral rounds", "Detailed feedback report"]
    },
    {
      id: "resume-review",
      title: "Resume Review & Feedback",
      description: "Get your resume reviewed by Big-Tech engineers",
      icon: <Mail className="w-8 h-8" />,
      category: "Career Services",
      features: ["ATS optimization", "Technical skills highlighting", "Industry-specific tips"]
    },
    {
      id: "software-development",
      title: "Software Development",
      description: "Building AI/Non-AI software solutions for your business",
      icon: <Code className="w-8 h-8" />,
      category: "Development",
      features: ["Full-stack development", "AI integration", "Modern tech stack"]
    },
    {
      id: "mvp-development",
      title: "MVP Development",
      description: "Low-cost MVP development by world-class engineers",
      icon: <ArrowRight className="w-8 h-8" />,
      category: "Development",
      features: ["Rapid prototyping", "Cost-effective solutions", "Scalable architecture"]
    },
    {
      id: "backend-development",
      title: "Backend for AI Apps",
      description: "Writing robust backends for AI-powered applications",
      icon: <Code className="w-8 h-8" />,
      category: "Development",
      features: ["AI model integration", "API development", "Cloud deployment"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      service: "FAANG Roadmap & Coaching",
      content: "BrainHouse's roadmap helped me land my dream job at Google. The structured approach and personalized coaching made all the difference.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Senior SDE at Amazon",
      service: "Mock Interviews",
      content: "The mock interviews were incredibly realistic. The feedback I received helped me identify and fix my weak areas before the real interviews.",
      rating: 5
    },
    {
      name: "Emily Johnson",
      role: "Startup Founder",
      service: "MVP Development",
      content: "BrainHouse delivered our MVP in record time and within budget. Their world-class engineers understood our vision perfectly.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "ML Engineer at Meta",
      service: "Resume Review",
      content: "The resume review from Big-Tech engineers was eye-opening. Got 3x more interview calls after implementing their suggestions.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                BrainHouse
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            Elevate Your Tech Career
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            From FAANG coaching to world-class software development - we're your partner in tech success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-4">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive solutions for your software engineering journey and development needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <Badge variant="secondary">{service.category}</Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => setSelectedService(service.id)}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600">See how we've helped others achieve their goals</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-0 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription>
                    {testimonial.role}
                    <Badge variant="outline" className="ml-2 text-xs">
                      {testimonial.service}
                    </Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal 
          serviceId={selectedService}
          serviceName={services.find(s => s.id === selectedService)?.title || ""}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Index;
