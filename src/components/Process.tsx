import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "We analyze your business, target audience, and competitors to create a customized growth strategy."
  },
  {
    number: "02",
    title: "Implementation",
    description: "Our team deploys AI automations, launches campaigns, and creates content tailored to your brand."
  },
  {
    number: "03",
    title: "Optimization & Scale",
    description: "Continuous monitoring, testing, and refinement to maximize results and scale your success."
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            How We Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Our proven 3-step process to transform your business with AI automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-accent to-primary/30 -translate-x-1/2" />
              )}
              
              <div className="relative z-10 space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary border-2 border-accent">
                  <span className="text-2xl font-bold text-accent">{step.number}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                
                <div className="pt-4">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
