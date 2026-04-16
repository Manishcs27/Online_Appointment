import React from 'react';
import { motion } from 'framer-motion';
import { 
  CalendarCheck, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Mail, 
  ShieldCheck, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Monitor,
  Ban,
  CheckCircle,
  Clock3
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const ManageAppointments = () => {
  const appointments = [
    { id: 'APT-4821', user: 'Sarah Jenkins', service: 'Cardiology Consultation', date: 'March 27, 2026', time: '10:00 AM', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: 'APT-1923', user: 'Michael Ross', service: 'Dental Implant', date: 'March 27, 2026', time: '11:30 AM', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: 'APT-0051', user: 'Jessica Taylor', service: 'Physical Therapy', date: 'March 28, 2026', time: '02:00 PM', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=20' },
    { id: 'APT-9921', user: 'Robert Smith', service: 'General Consultation', date: 'March 25, 2026', time: '09:00 AM', status: 'Completed', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: 'APT-7721', user: 'Linda White', service: 'Vision Test', date: 'March 24, 2026', time: '04:30 PM', status: 'Cancelled', avatar: 'https://i.pravatar.cc/150?img=48' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-8 max-w-[1300px] mx-auto pb-12">
        
        {/* Header Area */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-white leading-tight">All <span className="text-blue-400">Bookings</span></h1>
            <p className="text-slate-500 text-sm font-medium italic">"Review, approve, or manage global appointment requests."</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                 type="text" 
                 placeholder="Search by ID or User..." 
                 className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500/50 transition-all shadow-inner"
              />
            </div>
            <button className="p-2.5 rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-all shadow-sm">
               <Download className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Global Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
           <div className="p-6 rounded-3xl bg-blue-500/5 border border-blue-500/10 flex flex-col gap-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-blue-400/80">Pending Request</p>
              <div className="flex items-center justify-between">
                 <p className="text-2xl font-black text-white">24</p>
                 <Clock3 className="w-5 h-5 text-blue-500" />
              </div>
           </div>
           <div className="p-6 rounded-3xl bg-teal-500/5 border border-teal-500/10 flex flex-col gap-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-teal-400/80">Approved Today</p>
              <div className="flex items-center justify-between">
                 <p className="text-2xl font-black text-white">128</p>
                 <CheckCircle className="w-5 h-5 text-teal-500" />
              </div>
           </div>
           <div className="p-6 rounded-3xl bg-red-500/5 border border-red-500/10 flex flex-col gap-2">
              <p className="text-[10px] font-black uppercase tracking-widest text-red-400/80">Cancelled</p>
              <div className="flex items-center justify-between">
                 <p className="text-2xl font-black text-white">08</p>
                 <Ban className="w-5 h-5 text-red-500" />
              </div>
           </div>
        </div>

        {/* Table List */}
        <div className="glass-card bg-slate-900/40 border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Appointment Details</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Schedule</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {appointments.map((apt, idx) => (
                  <motion.tr 
                    key={apt.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-6 border-l-2 border-transparent group-hover:border-blue-500 transition-all">
                       <div className="flex items-center gap-4">
                          <img src={apt.avatar} className="w-10 h-10 rounded-xl border border-white/10 shadow-lg object-cover" />
                          <div>
                             <p className="text-[10px] font-black uppercase tracking-tight text-blue-400 mb-0.5">{apt.id}</p>
                             <p className="text-sm font-extrabold text-white">{apt.user}</p>
                             <p className="text-[11px] text-slate-500 flex items-center gap-1.5"><Monitor className="w-3 h-3" />{apt.service}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-6">
                       <div className="space-y-1">
                          <p className="text-xs font-bold text-white uppercase tracking-tight">{apt.date}</p>
                          <p className="text-[11px] font-black text-slate-500 italic">{apt.time}</p>
                       </div>
                    </td>
                    <td className="px-6 py-6">
                       <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all ${
                          apt.status === 'Pending' ? 'bg-orange-500/10 text-orange-400 border-orange-500/10' :
                          apt.status === 'Approved' ? 'bg-blue-500/10 text-blue-400 border-blue-400/10' :
                          apt.status === 'Completed' ? 'bg-teal-500/10 text-teal-400 border-teal-400/10' :
                          'bg-red-500/10 text-red-500 border-red-500/10'
                       }`}>
                          {apt.status}
                       </span>
                    </td>
                    <td className="px-6 py-6">
                       <div className="flex items-center justify-end gap-2">
                          {apt.status === 'Pending' && (
                            <button className="px-4 py-2 rounded-xl bg-teal-500 text-slate-900 text-[10px] font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-teal-500/20">Approve</button>
                          )}
                          <button className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-600 hover:text-white transition-all">
                             <MoreHorizontal className="w-4 h-4" />
                          </button>
                       </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-6 border-t border-white/5 bg-slate-900/60 flex items-center justify-between">
             <div className="flex gap-1">
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">Previous</button>
                <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[10px] font-black uppercase text-slate-500 hover:text-white transition-all">Next</button>
             </div>
             <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Page 01 of 12</p>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default ManageAppointments;
