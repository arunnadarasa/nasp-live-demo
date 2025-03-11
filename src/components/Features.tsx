
import React from 'react';
import { 
  CalendarDays, 
  MessageSquare, 
  Search, 
  LineChart, 
  Map, 
  Lock,
  Heart
} from 'lucide-react';

const features = [
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    title: 'Smart Scheduling',
    description: 'Integrated calendar with automated reminders for appointments and follow-ups.'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Secure Messaging',
    description: 'GDPR-compliant communication between pharmacists, patients, and service providers.'
  },
  {
    icon: <Search className="h-8 w-8 text-primary" />,
    title: 'AI-Powered Matching',
    description: 'Intelligent service recommendations using NHS SNOMED CT codes and patient profiles.'
  },
  {
    icon: <Map className="h-8 w-8 text-primary" />,
    title: 'Service Mapping',
    description: 'Location-based service discovery with real-time availability and geolocation filters.'
  },
  {
    icon: <LineChart className="h-8 w-8 text-primary" />,
    title: 'Outcomes Tracking',
    description: 'Comprehensive analytics and reporting on patient outcomes and service effectiveness.'
  },
  {
    icon: <Lock className="h-8 w-8 text-primary" />,
    title: 'NHS Compliant',
    description: 'Built to NHS standards with Data Security Protection Toolkit certification.'
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="text-sm font-medium text-primary">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transforming Social Prescribing</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Our platform connects pharmacies, patients, and community services through an intuitive, 
            NHS-integrated workflow.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass rounded-xl p-6 card-hover"
            >
              <div className="flex flex-col items-start">
                <div className="bg-primary/10 p-3 rounded-lg mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
