import React from 'react';

import { CalendarCheck, BellRing, ShieldCheck } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <CalendarCheck className="w-8 h-8 text-blue-400" />,
      title: 'Easy Booking',
      description: 'Streamlined scheduling process that allows your clients to book appointments 24/7 with zero hassle.',
      colorClasses: {
        glow: 'bg-blue-500/10 group-hover:bg-blue-500/30',
        iconBg: 'bg-blue-500/10 border-blue-500/20 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]'
      }
    },
    {
      icon: <BellRing className="w-8 h-8 text-teal-400" />,
      title: 'Real-Time Alerts',
      description: 'Automated SMS and email reminders reduce no-shows and keep everyone on the same page.',
      colorClasses: {
        glow: 'bg-teal-500/10 group-hover:bg-teal-500/30',
        iconBg: 'bg-teal-500/10 border-teal-500/20 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.3)]'
      }
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-400" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security ensures your data and your clients\' information is always protected.',
      colorClasses: {
        glow: 'bg-purple-500/10 group-hover:bg-purple-500/30',
        iconBg: 'bg-purple-500/10 border-purple-500/20 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)]'
      }
    }
  ];



  return (
    <section id="features" className="relative py-24 z-20">
      <div className="section-container">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Powerful Features for Modern <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Everything you need to manage your appointments, team, and clients in one beautiful, easy-to-use platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-8 border rounded-lg text-center">
              {/* Hover Glow Effect */}
              
              
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              
              <h3 className="text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Features;
