import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$0',
      period: '/month',
      description: 'Perfect for individuals getting started with online scheduling.',
      features: ['1 User Account', 'Up to 50 Appointments/mo', 'Basic Email Reminders', 'Community Support'],
      highlight: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Ideal for growing businesses needing more power and customization.',
      features: ['5 User Accounts', 'Unlimited Appointments', 'SMS & Email Reminders', 'Custom Branding', 'Priority Support'],
      highlight: true,
      buttonText: 'Start Free Trial'
    },
    {
      name: 'Premium',
      price: '$99',
      period: '/month',
      description: 'For large teams requiring advanced security and integrations.',
      features: ['Unlimited Users', 'Advanced Analytics', 'API Access', 'Dedicated Account Manager', '24/7 Phone Support'],
      highlight: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            No hidden fees. No surprises. Choose the plan that fits your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border ${
                plan.highlight 
                  ? 'bg-slate-800 border-blue-500 shadow-lg scale-105 z-10' 
                  : 'bg-slate-800/50 border-white/10'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm h-10">{plan.description}</p>
                <div className="mt-6 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <Check className={`w-4 h-4 mr-3 ${plan.highlight ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  plan.highlight
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
