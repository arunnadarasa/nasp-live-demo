
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar, MessageSquare, LineChart, Settings, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const PatientPortal = () => {
  return (
    <AnimatedTransition className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Patient Portal</h1>
              <p className="text-foreground/70">Manage your health journey and community services</p>
            </div>
            
            <Button className="bg-primary text-primary-foreground rounded-full">
              Contact Healthcare Provider
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <Card className="col-span-1 lg:col-span-3">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Welcome back, Sarah</CardTitle>
                <CardDescription>
                  Your well-being journey is progressing well. You have 2 upcoming appointments.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Well-being Progress</span>
                    <span className="text-sm text-muted-foreground">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="bg-primary/10 p-2 rounded-full mr-3">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-medium">Next Appointment</h3>
                          <p className="text-sm text-muted-foreground">Yoga for Beginners</p>
                        </div>
                      </div>
                      <Badge variant="outline">Tomorrow, 10:00 AM</Badge>
                    </div>
                  </div>
                  
                  <div className="bg-secondary rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center">
                        <div className="bg-green-500/10 p-2 rounded-full mr-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <h3 className="font-medium">Completed Sessions</h3>
                          <p className="text-sm text-muted-foreground">Community Garden Project</p>
                        </div>
                      </div>
                      <Badge variant="outline">4/6 Sessions</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Appointment Reminder</p>
                    <p className="text-muted-foreground">Yoga class tomorrow at 10:00 AM</p>
                    <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">New Message</p>
                    <p className="text-muted-foreground">From Dr. Johnson about your progress</p>
                    <p className="text-xs text-muted-foreground mt-1">Yesterday</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">Service Completed</p>
                    <p className="text-muted-foreground">Anxiety Management Workshop</p>
                    <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="services" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="services">My Services</TabsTrigger>
              <TabsTrigger value="appointments">Appointments</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>
            
            <TabsContent value="services" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Active Services</CardTitle>
                  <CardDescription>
                    Services you're currently participating in
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the active services list. In a complete implementation, 
                      this would display a list of services the patient is currently enrolled in, 
                      with progress, schedule, and contact information.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appointments" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Appointments</CardTitle>
                  <CardDescription>
                    View and manage your scheduled sessions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the appointments calendar. In a complete implementation, 
                      this would display a calendar with upcoming appointments, reminders, and the ability 
                      to reschedule or cancel.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="messages" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Messages</CardTitle>
                  <CardDescription>
                    Communicate with your healthcare providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the messaging interface. In a complete implementation, 
                      this would display a secure messaging system to communicate with healthcare providers, 
                      service coordinators, and link workers.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progress" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Well-being Progress</CardTitle>
                  <CardDescription>
                    Track your health and well-being outcomes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the progress tracking interface. In a complete implementation, 
                      this would display charts and metrics showing improvement in well-being scores, 
                      health outcomes, and self-reported measures.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </AnimatedTransition>
  );
};

export default PatientPortal;
