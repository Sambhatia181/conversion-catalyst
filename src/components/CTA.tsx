import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_70%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
            Ready to Scale Your Business with AI?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of successful businesses leveraging AI automation to find more clients 
            and streamline their operations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" variant="cta" className="group">
              Apply Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Mail className="w-5 h-5" />
              Contact Us
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground pt-4">
            Limited spots available this month • Free consultation included
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
