
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, Menu, Search, X } from "lucide-react";
import { cn } from '@/lib/utils';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-8 py-4",
        scrolled ? "backdrop-blur-md bg-white/75 shadow-sm border-b border-border/50" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-nutrihealth-500 to-wellness-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">NH</span>
            </div>
            <span className="font-semibold text-xl hidden sm:inline-block">NutriHealth</span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Nutrition</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Health Metrics</a>
          <a href="#" className="text-sm font-medium hover:text-primary transition-colors">Insights</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground">
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-foreground relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Button>
          <Avatar className="h-8 w-8 transition-transform hover:scale-105">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden text-foreground/80 hover:text-foreground"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          >
            {mobileNavOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation */}
      {mobileNavOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 backdrop-blur-lg bg-white/90 dark:bg-black/90 border-b border-border/50 animate-fade-in">
          <nav className="flex flex-col space-y-4 py-2">
            <a href="#" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">Dashboard</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">Nutrition</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">Health Metrics</a>
            <a href="#" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">Insights</a>
          </nav>
        </div>
      )}
    </header>
  );
}
