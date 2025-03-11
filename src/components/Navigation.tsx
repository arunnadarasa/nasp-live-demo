
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Heart, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Patients', href: '/patient-portal' },
    { name: 'Services', href: '/service-directory' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'py-3 glass shadow-sm' 
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-primary" />
            <span className="font-semibold text-lg">ConnectRx</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground rounded-full px-6">
              Login
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass py-4 px-6 shadow-md animate-fade-in">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-foreground py-2 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-primary text-primary-foreground rounded-full w-full mt-2">
              Login
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
