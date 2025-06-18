
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Facebook, MapPin, Phone } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to take your tech career or project to the next level? Let's connect!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-xl">Email Us</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-4">For business inquiries and service requests</p>
              <Button 
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = 'mailto:corp.brainhouse@gmail.com'}
              >
                corp.brainhouse@gmail.com
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="text-center">
              <Linkedin className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-xl">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-4">Connect with us professionally</p>
              <Button 
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://www.linkedin.com/company/brainhousebd', '_blank')}
              >
                Follow Us
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
            <CardHeader className="text-center">
              <Facebook className="w-12 h-12 mx-auto mb-4 text-blue-200" />
              <CardTitle className="text-xl">Facebook</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-blue-100 mb-4">Join our community</p>
              <Button 
                variant="outline"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://www.facebook.com/BHBrainHouse', '_blank')}
              >
                Like Our Page
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-blue-100 mb-6">
              Whether you're looking to advance your career or build your next big idea, 
              BrainHouse is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.location.href = 'mailto:corp.brainhouse@gmail.com?subject=General Inquiry'}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View All Services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
