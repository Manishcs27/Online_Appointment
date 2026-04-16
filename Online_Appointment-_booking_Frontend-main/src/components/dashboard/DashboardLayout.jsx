import React from 'react';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

const DashboardLayout = ({ children, role }) => {
  return (
    <div className="min-h-screen bg-slate-950 flex">
      {/* Sidebar fixed */}
      <Sidebar role={role} />

      {/* Main Content scrollable */}
      <div className="flex-1 ml-72 min-h-screen">
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/10 bg-slate-900 sticky top-0 z-20">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            Overview / <span className="text-white">Dashboard</span>
          </h2>
          
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white cursor-pointer transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
            </div>
          </div>
        </header>

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
