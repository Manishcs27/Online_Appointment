import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl p-8 lg:p-16 border border-white/10 bg-slate-800 shadow-2xl relative overflow-hidden">
          
          {/* Text Content */}
          <div className="text-left space-y-8 relative z-10">
            <h2 className="text-3xl lg:text-5xl font-extrabold text-white leading-tight">
              Start Booking <br />
              <span className="text-blue-500 uppercase tracking-tighter">Smarter</span> Today
            </h2>
            <p className="text-lg text-slate-400 max-w-md leading-relaxed font-medium">
              Ready to eliminate schedule conflicts and grow your business? Join thousands of professionals who have already made the switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 font-bold transition-all shadow-lg shadow-blue-900/10">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white border border-white/5 px-8 py-3.5 rounded-lg transition-all font-bold">
                Contact Sales
              </button>
            </div>
            <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>

          {/* Picture / Mockup */}
          <div className="relative flex justify-center lg:justify-end -mb-10 lg:mb-0">
             <div className="w-full max-w-[400px] bg-slate-900 rounded-3xl border-4 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                <img 
                  src="/booking_success_ui.png" 
                  alt="Booking Confirmed Mockup" 
                  className="w-full h-auto object-cover opacity-90 rounded-2xl"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;
