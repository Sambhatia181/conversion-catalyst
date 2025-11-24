import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Bot } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Organic Content Strategy",
    description: "Build authority and attract clients with data-driven content that converts. We create and distribute content that positions you as the industry leader.",
    features: ["Content Creation", "SEO Optimization", "Multi-Platform Distribution", "Analytics & Reporting"]
  },
  {
    icon: Target,
    title: "Social Media AD Campaigns",
    description: "Precision-targeted advertising that reaches your ideal customers. Our campaigns are optimized for maximum ROI and conversion rates.",
    features: ["Audience Research", "Creative Design", "Campaign Management", "A/B Testing"]
  },
  {
    icon: Bot,
    title: "AI Automation Integration",
    description: "Transform your business with intelligent automation. From AI calling agents to CRM management and personalized email campaigns.",
    features: ["AI Voice Agents", "CRM Automation", "Email Campaigns", "Lead Qualification"]
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,133,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,133,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive solutions to scale your business with AI-powered automation and strategic marketing
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-card border-border p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 inline-flex p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
