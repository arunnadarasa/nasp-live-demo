
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-32 pb-16 md:pb-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden -z-10">
        <div className="absolute -top-[30%] -left-[10%] w-[50%] h-[150%] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[150%] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-16">
          <div className="flex-1 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary mb-6 animate-fade-in">
              <span className="text-sm font-medium">NHS Integrated Platform</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight tracking-tight mb-6 animate-slide-up">
              Connecting <span className="text-gradient">Pharmacies</span> with <span className="text-gradient">Community Services</span>
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 md:mb-10 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '100ms' }}>
              A powerful platform that streamlines social prescribing, connecting patients with the support they need beyond medication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '200ms' }}>
              <Button className="bg-primary text-primary-foreground rounded-full h-12 px-8 text-base">
                Get Started
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-primary/20 rounded-full h-12 px-8 text-base">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="flex-1 w-full max-w-xl animate-scale-in" style={{ animationDelay: '300ms' }}>
            <div className="relative">
              {/* Dashboard Mock */}
              <div className="glass rounded-2xl shadow-xl shadow-primary/5 overflow-hidden border border-white/20">
                <div className="h-12 bg-background/80 backdrop-blur border-b border-border flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="h-[300px] md:h-[350px] bg-muted/50 rounded-lg animate-pulse"></div>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
