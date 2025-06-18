
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface ServiceModalProps {
  serviceId: string;
  serviceName: string;
  onClose: () => void;
}

const ServiceModal = ({ serviceId, serviceName, onClose }: ServiceModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    details: "",
    budget: "",
    deadline: ""
  });

  const serviceOptions = {
    "career-coaching": ["Career Planning", "Skill Assessment", "Industry Transition", "Promotion Strategy"],
    "faang-roadmap": ["Complete Roadmap", "Interview Prep", "Technical Skills", "Behavioral Prep"],
    "one-on-one-coaching": ["Technical Mentoring", "Career Guidance", "Code Review", "System Design"],
    "mock-interviews": ["Technical Interview", "Behavioral Interview", "System Design", "Coding Challenge"],
    "resume-review": ["Complete Review", "ATS Optimization", "Technical Skills", "Format Enhancement"],
    "software-development": ["Web Application", "Mobile App", "AI Integration", "Custom Software"],
    "mvp-development": ["Web MVP", "Mobile MVP", "SaaS Platform", "E-commerce"],
    "backend-development": ["API Development", "Database Design", "AI Model Integration", "Cloud Deployment"]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `
New Service Request - ${serviceName}

Client Details:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}

Service Details:
- Service: ${serviceName}
- Type: ${formData.serviceType}
- Budget: ${formData.budget}
- Deadline: ${formData.deadline}

Description:
${formData.details}
    `;

    // Create mailto link
    const mailtoLink = `mailto:corp.brainhouse@gmail.com?subject=Service Request - ${serviceName}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    toast({
      title: "Request Submitted!",
      description: "Your email client has been opened. Please send the email to complete your request.",
    });
    
    onClose();
  };

  const currentServiceOptions = serviceOptions[serviceId as keyof typeof serviceOptions] || [];
return (

  <Dialog open={true} onOpenChange={onClose}>
    <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="text-xl font-semibold">
      Request: {serviceName}
      </DialogTitle>
    </DialogHeader>

    <p className="text-sm text-black bg-yellow-200 mb-4">
      Our service request system is currently full. Please contact us via email or WhatsApp for urgent requests.
    </p>
    <div className="flex justify-center space-x-4 mb-4">
      <Button
        variant="outline"
        className="flex items-center gap-2 bg-orange-500 text-white"
        onClick={() => window.location.href = 'mailto:corp.brainhouse@gmail.com'}
      >
        <span>Email Us</span>
      </Button>
      <Button
        variant="outline"
          className="flex items-center gap-2 bg-green-500 text-white"
        onClick={() => window.open('https://wa.me/+353871886502', '_blank')}
      >
        <span>WhatsApp</span>
      </Button>
      <Button
        variant="outline"
        className="flex items-center gap-2 bg-blue-600 text-white"
        onClick={() => window.open('https://www.facebook.com/BHBrainHouse', '_blank')}
      >
        <span>Facebook</span>
      </Button>
    </div>
    
    <form onSubmit={handleSubmit} className="space-y-4">
      <fieldset disabled style={{ filter: "blur(2px)", pointerEvents:"none" }}>
      <div className="space-y-2">
        <Label htmlFor="name">Full Name *</Label>
        <Input
        id="name"
        required
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
        id="email"
        type="email"
        required
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number *</Label>
        <Input
        id="phone"
        type="tel"
        required
        value={formData.phone}
        onChange={(e) => setFormData({...formData, phone: e.target.value})}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="serviceType">Service Type *</Label>
        <Select value={formData.serviceType} onValueChange={(value) => setFormData({...formData, serviceType: value})}>
        <SelectTrigger>
          <SelectValue placeholder="Select service type" />
        </SelectTrigger>
        <SelectContent>
          {currentServiceOptions.map((option) => (
          <SelectItem key={option} value={option}>
            {option}
          </SelectItem>
          ))}
        </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="budget">Budget Range</Label>
        <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
        <SelectTrigger>
          <SelectValue placeholder="Select budget range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="under-1k">Under $1,000</SelectItem>
          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
          <SelectItem value="25k-plus">$25,000+</SelectItem>
          <SelectItem value="discuss">Discuss</SelectItem>
        </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="deadline">Preferred Deadline</Label>
        <Select value={formData.deadline} onValueChange={(value) => setFormData({...formData, deadline: value})}>
        <SelectTrigger>
          <SelectValue placeholder="Select timeline" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asap">ASAP</SelectItem>
          <SelectItem value="1-week">Within 1 week</SelectItem>
          <SelectItem value="2-weeks">Within 2 weeks</SelectItem>
          <SelectItem value="1-month">Within 1 month</SelectItem>
          <SelectItem value="2-months">Within 2 months</SelectItem>
          <SelectItem value="flexible">Flexible</SelectItem>
        </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="details">Project Details *</Label>
        <Textarea
        id="details"
        required
        placeholder="Please describe your requirements, goals, and any specific details about the service you need..."
        value={formData.details}
        onChange={(e) => setFormData({...formData, details: e.target.value})}
        className="min-h-[100px]"
        />
      </div>
      </fieldset>

      {/* <div className="flex gap-3 pt-4">
      <Button
        type="button"
        variant="outline"
        onClick={onClose}
        className="flex-1"
      >
        Cancel
      </Button>
      <Button
        type="submit"
        className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
      >
        Submit Request
      </Button>
      </div> */}
    </form>
    </DialogContent>
  </Dialog>
  );
};

export default ServiceModal;
