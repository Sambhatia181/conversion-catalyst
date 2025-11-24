import { Card } from "@/components/ui/card";
import { Zap, Users, Clock, TrendingUp, Shield, Rocket } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Lightning Fast Results",
    description: "See measurable improvements in lead generation within the first 30 days"
  },
  {
    icon: Users,
    title: "More Qualified Leads",
    description: "AI-powered targeting ensures you connect with high-intent prospects"
  },
  {
    icon: Clock,
    title: "24/7 Automation",
    description: "Your AI agents work around the clock, never missing an opportunity"
  },
  {
    icon: TrendingUp,
    title: "Scalable Growth",
    description: "Systems that grow with your business, from startup to enterprise"
  },
  {
    icon: Shield,
    title: "Data-Driven Decisions",
    description: "Real-time analytics and insights to optimize your strategy"
  },
  {
    icon: Rocket,
    title: "Competitive Edge",
    description: "Stay ahead with cutting-edge AI technology and proven strategies"
  }
];

const Benefits = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground">
            Transform your business with proven AI automation solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="animate-border bg-card border-border p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="mb-4 inline-flex p-2 rounded-lg bg-primary/10 group-hover:bg-accent/10 transition-colors">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
