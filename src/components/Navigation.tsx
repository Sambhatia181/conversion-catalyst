import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-foreground flex items-center gap-2">
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent via-red-500 to-accent">A</span>
            <span>utonyze</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#process" className="text-foreground hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="text-foreground hover:text-accent transition-colors">
              Benefits
            </a>
            <Button variant="cta" size="sm">
              Apply Now
            </Button>
          </div>
          
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#services" className="block text-foreground hover:text-accent transition-colors">
              Services
            </a>
            <a href="#process" className="block text-foreground hover:text-accent transition-colors">
              How It Works
            </a>
            <a href="#benefits" className="block text-foreground hover:text-accent transition-colors">
              Benefits
            </a>
            <Button variant="cta" size="sm" className="w-full">
              Apply Now
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
