
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import DirectorySection from '@/components/DirectorySection';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';

const Index = () => {
  return (
    <AnimatedTransition className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <DirectorySection />
      </main>
      <Footer />
    </AnimatedTransition>
  );
};

export default Index;
