
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import AnimatedTransition from '@/components/AnimatedTransition';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Activity, Calendar, Users, Bell, Inbox, Search, Filter } from 'lucide-react';

const Dashboard = () => {
  return (
    <AnimatedTransition className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-28 pb-16">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Pharmacy Dashboard</h1>
              <p className="text-foreground/70">Manage referrals and track patient outcomes</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <input 
                  type="search" 
                  placeholder="Search referrals..." 
                  className="pl-10 pr-4 py-2 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              
              <Button size="icon" variant="outline">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
              
              <Button size="icon" variant="outline" className="relative">
                <Bell className="h-4 w-4" />
                <span className="sr-only">Notifications</span>
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <Activity className="h-5 w-5 mr-2 text-primary" />
                  Active Referrals
                </CardTitle>
                <CardDescription>Currently monitored patients</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">28</div>
                <div className="text-xs text-green-600 mt-1">
                  +4 from last week
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Appointments
                </CardTitle>
                <CardDescription>Scheduled for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">8</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Next: John D. at 14:30
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Services
                </CardTitle>
                <CardDescription>Available in your area</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">42</div>
                <div className="text-xs text-blue-600 mt-1">
                  5 new this month
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="referrals" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="referrals">Referrals</TabsTrigger>
              <TabsTrigger value="calendar">Calendar</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            
            <TabsContent value="referrals" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Referrals</CardTitle>
                  <CardDescription>
                    Manage and track patient referrals to social prescribing services
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the referrals table. In a complete implementation, 
                      this would display a table with patient referrals, status, assigned services, 
                      and actions.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="calendar" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Calendar</CardTitle>
                  <CardDescription>
                    Manage appointments and schedule follow-ups
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the calendar interface. In a complete implementation, 
                      this would display a calendar with appointments and scheduling functionality.
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
                    Communicate with patients and service providers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for the messaging interface. In a complete implementation, 
                      this would display a messaging UI with conversations and message history.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="analytics" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Analytics</CardTitle>
                  <CardDescription>
                    Track outcomes and measure impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border">
                    <div className="py-6 px-4 text-center text-muted-foreground">
                      This is a placeholder for analytics charts. In a complete implementation, 
                      this would display charts and metrics showing referral outcomes, patient improvement, 
                      and service utilization.
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

export default Dashboard;
