import React from 'react';
import { Calendar, Bell, CheckCircle2, ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT COLUMN - TEXT */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-400/20 bg-blue-500/10">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              <span className="text-xs font-bold text-blue-200">v2.0 is now live</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white font-sans">
              Simplify Your <br />
              <span className="text-blue-500 uppercase tracking-tighter">Scheduling</span> <br />
              with Ease
            </h1>
            
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
              Book, manage, and track your appointments effortlessly with our smart online booking system. Focus on your business while we handle your calendar.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 font-bold">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-900/40">
                Get Started Free
                <ChevronRight className="w-4 h-4" />
              </button>
              <button className="bg-slate-800 hover:bg-slate-700 text-white border border-white/5 px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center gap-4 pt-6 text-[10px] text-slate-500 font-black uppercase tracking-widest">
              <p>Loved by 10,000+ businesses world-wide</p>
            </div>
          </div>

          {/* RIGHT COLUMN - BOOKING FORM PHOTO */}
          <div className="relative w-full flex items-center justify-center -mb-20 lg:mb-0">
             <div className="w-[90%] max-w-[500px] bg-slate-800 border-8 border-slate-800 rounded-3xl shadow-2xl overflow-hidden ring-1 ring-white/10">
                {/* Generated Booking Image */}
                <img 
                  src="/booking_form_ui.png" 
                  alt="Booking Portal Interface" 
                  className="w-full h-auto object-cover opacity-90 rounded-2xl"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
