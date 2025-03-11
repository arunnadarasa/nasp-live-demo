
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, MapPin } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: string;
    name: string;
    category: string;
    description: string;
    location: string;
    distance?: string;
    availability?: string;
    tags?: string[];
    imageUrl?: string;
  };
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="glass rounded-xl overflow-hidden card-hover border border-border">
      <div className="aspect-video w-full relative overflow-hidden bg-muted">
        {service.imageUrl ? (
          <img 
            src={service.imageUrl} 
            alt={service.name} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-primary/5">
            <span className="text-primary/50">{service.name[0]}</span>
          </div>
        )}
        <Badge className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground font-medium">
          {service.category}
        </Badge>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{service.name}</h3>
        
        <div className="flex items-center text-sm text-foreground/70 mb-3">
          <MapPin className="h-4 w-4 mr-1 text-primary/70" />
          <span>{service.location}</span>
          {service.distance && (
            <Badge variant="outline" className="ml-2 bg-background/50 text-xs">
              {service.distance}
            </Badge>
          )}
        </div>
        
        <p className="text-foreground/70 mb-4 text-sm line-clamp-2">
          {service.description}
        </p>
        
        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs font-normal">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center justify-between">
          {service.availability && (
            <Badge 
              variant={service.availability === 'Available' ? 'default' : 'outline'}
              className={`
                text-xs
                ${service.availability === 'Available' 
                  ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20' 
                  : 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20'}
              `}
            >
              {service.availability}
            </Badge>
          )}
          
          <Button variant="ghost" size="sm" className="text-primary ml-auto">
            Details
            <ArrowUpRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
