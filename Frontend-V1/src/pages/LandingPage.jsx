import React, { useState } from 'react';
import { 
  Building, 
  Users, 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Shield,
  Smartphone,
  BarChart3,
  Clock,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    properties: ''
  });

  const handleDemoSubmit = (e) => {
    e.preventDefault();
    // Handle demo request
    console.log('Demo request:', demoForm);
    setIsDemoModalOpen(false);
    // Show success message
  };

  const features = [
    {
      icon: Users,
      title: 'Tenant Management',
      description: 'Complete tenant profiles, lease tracking, and communication tools'
    },
    {
      icon: CreditCard,
      title: 'M-Pesa Integration',
      description: 'Seamless rent collection via STK Push and USSD codes'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Real-time dashboards and automated financial reports'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Bank-level security with local data protection compliance'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Access your properties anywhere with our responsive platform'
    },
    {
      icon: Clock,
      title: 'Automated Workflows',
      description: 'Rent reminders, penalty calculations, and maintenance scheduling'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Wanjiku',
      role: 'Property Manager',
      company: 'Nairobi Heights Properties',
      content: 'PropertyHub has transformed how we manage our 200+ units. M-Pesa integration alone saves us 15 hours per week.',
      rating: 5
    },
    {
      name: 'David Kimani',
      role: 'Real Estate Agency Owner',
      company: 'Kimani & Associates',
      content: 'The multi-agency dashboard gives us complete visibility across all our managed properties. Excellent local support.',
      rating: 5
    },
    {
      name: 'Grace Muthoni',
      role: 'Landlord',
      company: 'Private Investor',
      content: 'I can track all my rental income and expenses from my phone. The tenant portal has reduced payment delays significantly.',
      rating: 5
    }
  ];

  const benefits = [
    'Multi-tenancy for property management agencies',
    'Secure, mobile-first access for all users',
    'Local support team based in Nairobi',
    'Automated rent reminders and penalty calculations',
    'Comprehensive reporting and analytics',
    'Integration with Kenyan payment systems'
  ];

  return (
    <div className="min-h-screen bg-pearl-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-soft-cloud sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building className="w-8 h-8 text-ocean-blue" />
              <span className="text-xl font-bold text-charcoal">PropertyHub</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-charcoal hover:text-ocean-blue transition-colors duration-300">Features</a>
              <a href="#how-it-works" className="text-charcoal hover:text-ocean-blue transition-colors duration-300">How It Works</a>
              <a href="#testimonials" className="text-charcoal hover:text-ocean-blue transition-colors duration-300">Testimonials</a>
              <a href="#contact" className="text-charcoal hover:text-ocean-blue transition-colors duration-300">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                onClick={() => window.location.href = '/login'}
                className="text-charcoal hover:text-ocean-blue hover:bg-coastal-aqua/10 transition-all duration-300"
              >
                Log In
              </Button>
              <Button 
                onClick={() => setIsDemoModalOpen(true)}
                className="bg-gold-sand hover:bg-gold-sand/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-blue via-ocean-blue/95 to-coastal-aqua py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-coastal-aqua rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gold-sand rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <Badge className="bg-gold-sand/20 text-gold-sand border-gold-sand/30 px-4 py-2 text-sm font-medium">
                  🇰🇪 Built for Kenya
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                  Smart Property Management.{' '}
                  <span className="text-gold-sand">Powered by M-Pesa.</span>
                </h1>
                <p className="text-xl text-coastal-aqua/90 leading-relaxed">
                  Manage tenants, collect rent, and automate reporting — all in one secure platform 
                  tailored for Kenyan real estate.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gold-sand hover:bg-gold-sand/90 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsDemoModalOpen(true)}
                >
                  Request a Demo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-ocean-blue px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => window.location.href = '/login'}
                >
                  Log In
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-coastal-aqua/80">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold-sand" />
                  <span>Free 30-day trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold-sand" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-gold-sand" />
                  <span>Local support</span>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="bg-pearl-white rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-charcoal">Dashboard Overview</h3>
                    <Badge className="bg-coastal-aqua/20 text-ocean-blue border-coastal-aqua/30">Live</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-ocean-blue">156</div>
                      <div className="text-sm text-charcoal/70">Properties</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-gold-sand">KES 2.4M</div>
                      <div className="text-sm text-charcoal/70">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-coastal-aqua/10 border border-coastal-aqua/20 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gold-sand rounded-full flex items-center justify-center">
                      <CreditCard className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-medium text-charcoal">M-Pesa Payment Received</div>
                      <div className="text-sm text-charcoal/70">KES 45,000 from John Doe - Unit 3B</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              How It Works
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Get started in minutes with our simple three-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-ocean-blue rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">1. List Properties & Units</h3>
              <p className="text-charcoal/70">
                Add your properties, units, and tenant information to our secure platform
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-coastal-aqua rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">2. Manage Tenants</h3>
              <p className="text-charcoal/70">
                Track leases, communicate with tenants, and manage maintenance requests
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-gold-sand rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-charcoal mb-4">3. Collect Rent via M-Pesa</h3>
              <p className="text-charcoal/70">
                Automated rent collection with STK Push and instant payment notifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-pearl-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              Everything You Need to Manage Properties
            </h2>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto">
              Comprehensive tools designed specifically for the Kenyan property management market
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-soft-cloud">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-coastal-aqua/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ocean-blue transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-ocean-blue group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-charcoal mb-3">{feature.title}</h3>
                  <p className="text-charcoal/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-ocean-blue to-coastal-aqua text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Why Choose PropertyHub?
              </h2>
              <p className="text-xl text-coastal-aqua/90 mb-8">
                Built by Kenyans, for Kenyans. We understand the unique challenges of property management in Kenya.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-gold-sand flex-shrink-0" />
                    <span className="text-coastal-aqua/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-6">
                <div className="text-4xl font-bold text-gold-sand">94%</div>
                <div className="text-coastal-aqua/90">Customer Satisfaction</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-coastal-aqua/80 text-sm">Properties Managed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">15K+</div>
                  <div className="text-coastal-aqua/80 text-sm">Tenants Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">KES 50M+</div>
                  <div className="text-coastal-aqua/80 text-sm">Rent Collected</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">99.9%</div>
                  <div className="text-coastal-aqua/80 text-sm">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-charcoal/70">
              Join hundreds of property managers who trust PropertyHub
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border-soft-cloud">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold-sand fill-current" />
                    ))}
                  </div>
                  <p className="text-charcoal/70 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-charcoal">{testimonial.name}</div>
                    <div className="text-sm text-charcoal/70">{testimonial.role}</div>
                    <div className="text-sm text-ocean-blue">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gold-sand to-gold-sand/90 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Start Managing Smarter Today
          </h2>
          <p className="text-xl text-gold-sand/90 mb-8">
            Join the growing number of property managers who have transformed their business with PropertyHub
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-gold-sand hover:bg-pearl-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsDemoModalOpen(true)}
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-gold-sand px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = '/login'}
            >
              Sign In
            </Button>
          </div>

          <p className="text-gold-sand/80 text-sm mt-6">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building className="w-8 h-8 text-coastal-aqua" />
                <span className="text-xl font-bold">PropertyHub</span>
              </div>
              <p className="text-white/70 mb-6 max-w-md">
                The leading property management platform for Kenya. Streamline your operations, 
                increase efficiency, and grow your business.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-coastal-aqua transition-colors duration-300">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-coastal-aqua transition-colors duration-300">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-white/70">
                <li><a href="#features" className="hover:text-white transition-colors duration-300">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>Nairobi, Kenya</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>+254 700 000 000</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@propertyhub.co.ke</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm">
              © 2024 PropertyHub. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/70 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Support</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Request Modal */}
      {isDemoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 max-h-[90vh] overflow-hidden border border-soft-cloud">
            <div className="flex items-center justify-between p-6 border-b border-soft-cloud bg-gradient-to-r from-ocean-blue to-coastal-aqua text-white">
              <h3 className="text-lg font-semibold">Request a Demo</h3>
              <button
                onClick={() => setIsDemoModalOpen(false)}
                className="text-white/80 hover:text-white transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleDemoSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Full Name *
                </label>
                <Input
                  required
                  value={demoForm.name}
                  onChange={(e) => setDemoForm({...demoForm, name: e.target.value})}
                  placeholder="John Doe"
                  className="border-soft-cloud focus:border-ocean-blue focus:ring-ocean-blue/20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Email Address *
                </label>
                <Input
                  type="email"
                  required
                  value={demoForm.email}
                  onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                  placeholder="john@example.com"
                  className="border-soft-cloud focus:border-ocean-blue focus:ring-ocean-blue/20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Phone Number *
                </label>
                <Input
                  required
                  value={demoForm.phone}
                  onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
                  placeholder="+254 700 000 000"
                  className="border-soft-cloud focus:border-ocean-blue focus:ring-ocean-blue/20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Company/Agency
                </label>
                <Input
                  value={demoForm.company}
                  onChange={(e) => setDemoForm({...demoForm, company: e.target.value})}
                  placeholder="Your Company Name"
                  className="border-soft-cloud focus:border-ocean-blue focus:ring-ocean-blue/20"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal mb-1">
                  Number of Properties
                </label>
                <select 
                  className="w-full p-2 border border-soft-cloud rounded-md focus:border-ocean-blue focus:ring-2 focus:ring-ocean-blue/20 transition-colors duration-300"
                  value={demoForm.properties}
                  onChange={(e) => setDemoForm({...demoForm, properties: e.target.value})}
                >
                  <option value="">Select range</option>
                  <option value="1-10">1-10 properties</option>
                  <option value="11-50">11-50 properties</option>
                  <option value="51-100">51-100 properties</option>
                  <option value="100+">100+ properties</option>
                </select>
              </div>
              
              <div className="flex space-x-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsDemoModalOpen(false)}
                  className="flex-1 border-soft-cloud text-charcoal hover:bg-soft-cloud/50"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gold-sand hover:bg-gold-sand/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Request Demo
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;