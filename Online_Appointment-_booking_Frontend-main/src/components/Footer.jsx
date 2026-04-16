import React from 'react';
import { Calendar, Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-5 h-5 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900 shadow-sm animate-pulse"></div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white flex items-center font-outfit">
                Apoint<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400 ml-0.5">Hub</span>
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              The simplest way to schedule, manage, and scale your appointments. Elevate your business with our smart scheduling platform.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <Facebook className="w-4 h-4" />, href: '#' },
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Instagram className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-slate-800 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              {['Features', 'Integrations', 'Pricing', 'Changelog', 'Documentation'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Careers', 'Blog', 'Contact', 'Partners'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-blue-500 transition-colors text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
              Subscribe to our newsletter for the latest updates and tips.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="flex-1 bg-slate-800 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 rounded-lg px-4 flex items-center justify-center text-white hover:bg-blue-700 transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} ApointHub. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
