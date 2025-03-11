
import React from 'react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const sampleServices = [
  {
    id: '1',
    name: 'Wellbeing Support Group',
    category: 'Mental Health',
    description: 'Weekly support group focusing on mental wellbeing, stress management, and building resilience.',
    location: 'Community Center, Manchester',
    distance: '1.2 miles',
    availability: 'Available',
    tags: ['Anxiety', 'Depression', 'Stress'],
    imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '2',
    name: 'Exercise for Seniors',
    category: 'Physical Activity',
    description: 'Gentle exercise classes designed specifically for seniors to improve mobility and strength.',
    location: 'Silver Gardens, Birmingham',
    distance: '0.8 miles',
    availability: 'Limited',
    tags: ['Elderly', 'Mobility', 'Exercise'],
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '3',
    name: 'Diabetes Education Program',
    category: 'Health Education',
    description: 'Educational workshops on managing diabetes effectively through diet, exercise, and medication.',
    location: 'NHS Community Hub, Leeds',
    distance: '1.5 miles',
    availability: 'Available',
    tags: ['Diabetes', 'Education', 'Nutrition'],
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const DirectorySection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-sm font-medium text-primary mb-2">Discover Services</div>
            <h2 className="text-3xl font-bold mb-2">Community Services Directory</h2>
            <p className="text-foreground/70 max-w-2xl">
              Explore local support services available for referral, filtered by location and patient needs.
            </p>
          </div>
          <Button variant="ghost" className="text-primary flex items-center self-start md:self-auto">
            View All Services
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorySection;
