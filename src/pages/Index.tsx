
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Code, Users, Briefcase, BookOpen, Mail, Linkedin, Facebook, ArrowRight, ChevronLeft, Target, Zap } from "lucide-react";
import ServiceModal from "@/components/ServiceModal";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const mainCategories = [
    {
      id: "development",
      title: "Software/AI Development",
      description: "Building cutting-edge software solutions and AI applications",
      icon: <Code className="w-12 h-12" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      id: "interview-prep",
      title: "Interview Preparation",
      description: "Expert guidance to ace your technical interviews",
      icon: <Target className="w-12 h-12" />,
      color: "from-purple-600 to-pink-600"
    },
    {
      id: "career-coaching",
      title: "Career Coaching",
      description: "Personalized mentorship for your tech career journey",
      icon: <Users className="w-12 h-12" />,
      color: "from-green-600 to-teal-600"
    }
  ];

  const categoryServices = {
    development: [
      {
        id: "software-development",
        title: "Custom Software Development",
        description: "Full-stack development with modern technologies and AI integration",
        icon: <Code className="w-8 h-8" />,
        features: ["Full-stack development", "AI integration", "Modern tech stack", "Scalable architecture"]
      },
      {
        id: "mvp-development",
        title: "MVP Development",
        description: "Rapid prototyping and low-cost MVP development by world-class engineers",
        icon: <Zap className="w-8 h-8" />,
        features: ["Rapid prototyping", "Cost-effective solutions", "World-class engineers", "Quick turnaround"]
      },
      {
        id: "backend-development",
        title: "AI App Backends",
        description: "Robust backend systems specifically designed for AI-powered applications",
        icon: <Code className="w-8 h-8" />,
        features: ["AI model integration", "API development", "Cloud deployment", "Performance optimization"]
      }
    ],
    "interview-prep": [
      {
        id: "mock-interviews",
        title: "Mock Interviews - $100/session",
        description: "Practice with real FAANG engineers and receive comprehensive feedback",
        icon: <Briefcase className="w-8 h-8" />,
        features: ["Technical interviews", "Behavioral rounds", "Detailed feedback report", "FAANG engineers"]
      },
      {
        id: "resume-review",
        title: "Resume Review & Optimization",
        description: "Professional resume review and feedback from Big-Tech engineers",
        icon: <Mail className="w-8 h-8" />,
        features: ["ATS optimization", "Technical skills highlighting", "Industry-specific tips", "Big-Tech insights"]
      }
    ],
    "career-coaching": [
      {
        id: "career-coaching",
        title: "1:1 Career Coaching",
        description: "Personalized guidance from FAANG and ex-FAANG engineers",
        icon: <Users className="w-8 h-8" />,
        features: ["Personalized sessions", "Industry insights", "Career strategy", "Goal setting"]
      },
      {
        id: "faang-roadmap",
        title: "FAANG Career Roadmap",
        description: "Structured pathway to land your dream job at top tech companies",
        icon: <BookOpen className="w-8 h-8" />,
        features: ["Comprehensive study plans", "Resource recommendations", "Timeline optimization", "Success tracking"]
      }
    ]
  };

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

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

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
              Choose your path to tech success with our comprehensive service offerings
            </p>
          </div>
          
          {!selectedCategory ? (
            // Main Categories View
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {mainCategories.map((category) => (
                <Card 
                  key={category.id} 
                  className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm cursor-pointer transform hover:scale-105"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-6 bg-gradient-to-r ${category.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-2xl mb-3 text-gray-800">{category.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base leading-relaxed">
                      {category.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center pt-0">
                    <Button 
                      className="w-full bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white font-medium py-3"
                    >
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            // Specific Services View
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center mb-8">
                <Button 
                  variant="ghost" 
                  onClick={handleBackToCategories}
                  className="flex items-center text-gray-600 hover:text-gray-800"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Categories
                </Button>
              </div>
              
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold mb-4">
                  {mainCategories.find(cat => cat.id === selectedCategory)?.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {mainCategories.find(cat => cat.id === selectedCategory)?.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {categoryServices[selectedCategory as keyof typeof categoryServices]?.map((service) => (
                  <Card key={service.id} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg text-blue-600 group-hover:scale-110 transition-transform">
                          {service.icon}
                        </div>
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
          )}
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
          serviceName={categoryServices[selectedCategory as keyof typeof categoryServices]?.find(s => s.id === selectedService)?.title || ""}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Index;
