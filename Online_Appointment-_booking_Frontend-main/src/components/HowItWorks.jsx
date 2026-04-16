import React from 'react';
import { MousePointerClick, CalendarDays, CheckCircle, Smartphone } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      num: '01',
      icon: <MousePointerClick className="w-6 h-6 text-blue-400" />,
      title: 'Choose Service',
      description: 'Select the type of appointment or service you need from our customized menu.'
    },
    {
      num: '02',
      icon: <CalendarDays className="w-6 h-6 text-teal-400" />,
      title: 'Select Date & Time',
      description: 'Pick an available slot that works best for your schedule.'
    },
    {
      num: '03',
      icon: <CheckCircle className="w-6 h-6 text-purple-400" />,
      title: 'Confirm Booking',
      description: 'Review your details and confirm. It takes only a few seconds.'
    },
    {
      num: '04',
      icon: <Smartphone className="w-6 h-6 text-blue-400" />,
      title: 'Get Reminder',
      description: 'Receive automated notifications so you never miss an appointment.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">How It Works</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Four simple steps to seamless scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-slate-800 border border-white/5 rounded-xl shadow-md"
            >
              {/* Step Icon Container */}
              <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center mb-6 relative border border-blue-500/20">
                {step.icon}
                {/* Number Badge */}
                <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                  {step.num}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3 text-white">
                {step.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
