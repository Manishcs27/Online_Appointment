import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Clinic Manager',
      image: 'https://i.pravatar.cc/150?img=47',
      text: "ApointHub has completely transformed how we manage patient bookings. The automated reminders have reduced our no-shows by 40%."
    },
    {
      name: 'David Chen',
      role: 'Fitness Coach',
      image: 'https://i.pravatar.cc/150?img=11',
      text: "I used to spend hours every week just scheduling clients. Now, they book themselves through my custom link. Integration is flawless."
    },
    {
      name: 'Amanda Rivera',
      role: 'Salon Owner',
      image: 'https://i.pravatar.cc/150?img=44',
      text: "The beautifully designed booking page gives my clients a premium experience before they even walk through the door."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Loved by Professionals</h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          See what our customers have to say about their experience with ApointHub.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div 
            key={idx} 
            className="bg-slate-800 p-8 border border-white/10 rounded-xl shadow-md"
          >
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
              "{testimonial.text}"
            </p>
            <div className="flex items-center gap-4">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-12 h-12 rounded-full border-2 border-slate-700 object-cover"
              />
              <div className="text-left">
                <h4 className="text-white font-medium text-sm">{testimonial.name}</h4>
                <p className="text-slate-400 text-xs">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
