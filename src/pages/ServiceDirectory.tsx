
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Search, MapPin, Filter, ArrowUpDown } from 'lucide-react';

// Sample service data
const services = [
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
  },
  {
    id: '4',
    name: 'Community Garden Project',
    category: 'Social Support',
    description: 'Collaborative gardening project promoting social connection, light physical activity, and nature engagement.',
    location: 'Urban Roots Garden, Sheffield',
    distance: '2.3 miles',
    availability: 'Available',
    tags: ['Outdoor', 'Social', 'Gardening'],
    imageUrl: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '5',
    name: 'Healthy Cooking Workshops',
    category: 'Nutrition',
    description: 'Hands-on workshops teaching practical cooking skills for nutritious, budget-friendly meals.',
    location: 'Community Kitchen, Liverpool',
    distance: '1.8 miles',
    availability: 'Limited',
    tags: ['Cooking', 'Nutrition', 'Education'],
    imageUrl: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  },
  {
    id: '6',
    name: 'Mindfulness Meditation',
    category: 'Mental Health',
    description: 'Guided meditation sessions to reduce stress, improve focus, and promote emotional balance.',
    location: 'Wellness Center, Bristol',
    distance: '0.5 miles',
    availability: 'Available',
    tags: ['Mindfulness', 'Stress', 'Relaxation'],
    imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
  }
];

const ServiceDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [maxDistance, setMaxDistance] = useState([5]);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <AnimatedTransition className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Service Directory</h1>
              <p className="text-foreground/70">Discover support services in your community</p>
            </div>
          </div>
          
          <div className="mb-8 glass rounded-xl p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input 
                  type="search" 
                  placeholder="Search for services..." 
                  className="pl-10 h-12 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="relative flex items-center space-x-2 bg-background rounded-lg px-4 py-2 border">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-foreground font-medium">Manchester</span>
                </div>
                
                <Button 
                  variant="outline" 
                  className="h-12 gap-2"
                  onClick={() => setIsFiltersOpen(!isFiltersOpen)}
                >
                  <Filter className="h-5 w-5" />
                  <span>Filters</span>
                </Button>
                
                <Button className="bg-primary text-primary-foreground h-12 px-6 rounded-lg hidden lg:flex">
                  Search
                </Button>
              </div>
            </div>
            
            {isFiltersOpen && (
              <div className="mt-6 pt-6 border-t grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium mb-2">Service Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="mental-health">Mental Health</SelectItem>
                      <SelectItem value="physical-activity">Physical Activity</SelectItem>
                      <SelectItem value="health-education">Health Education</SelectItem>
                      <SelectItem value="social-support">Social Support</SelectItem>
                      <SelectItem value="nutrition">Nutrition</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Availability</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Any Availability" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any Availability</SelectItem>
                      <SelectItem value="available">Available Now</SelectItem>
                      <SelectItem value="limited">Limited Spots</SelectItem>
                      <SelectItem value="waitlist">Waitlist</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Maximum Distance: {maxDistance[0]} miles
                  </label>
                  <Slider
                    defaultValue={[5]}
                    max={10}
                    step={0.5}
                    value={maxDistance}
                    onValueChange={setMaxDistance}
                    className="py-4"
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-muted-foreground">
              Showing <span className="font-medium text-foreground">{services.length}</span> services
            </div>
            
            <Button variant="ghost" size="sm" className="flex items-center text-sm">
              <ArrowUpDown className="h-4 w-4 mr-2" />
              Sort by: Distance
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 py-6">
              Load More Services
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </AnimatedTransition>
  );
};

export default ServiceDirectory;
