import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal, 
  Mail, 
  ShieldCheck, 
  UserPlus, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  Monitor
} from 'lucide-react';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const ManageUsers = () => {
  const users = [
    { id: '1', name: 'Standard User', email: 'user@gmail.com', role: 'User', status: 'Active', joined: 'Mar 12, 2026', avatar: 'https://i.pravatar.cc/150?img=11' },
    { id: '2', name: 'System Admin', email: 'admin@gmail.com', role: 'Admin', status: 'Active', joined: 'Mar 01, 2026', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: '3', name: 'Sarah Wilson', email: 'sarah.w@example.com', role: 'User', status: 'Inactive', joined: 'Mar 15, 2026', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: '4', name: 'Michael Chen', email: 'm.chen@example.com', role: 'User', status: 'Active', joined: 'Mar 20, 2026', avatar: 'https://i.pravatar.cc/150?img=8' },
    { id: '5', name: 'Amanda Rivera', email: 'amanda@medhub.com', role: 'User', status: 'Active', joined: 'Mar 22, 2026', avatar: 'https://i.pravatar.cc/150?img=20' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="flex flex-col gap-8 max-w-[1300px] mx-auto pb-12">
        
        {/* Header Area */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-white leading-tight">System <span className="text-teal-400">Users</span></h1>
            <p className="text-slate-500 text-sm font-medium italic">"Manage user accounts, roles, and access levels."</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                 type="text" 
                 placeholder="Search by name or email..." 
                 className="w-full bg-slate-900/40 border border-white/5 rounded-2xl py-2.5 pl-11 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-500/50 transition-all shadow-inner"
              />
            </div>
            <button className="btn-primary flex items-center gap-2 group shadow-xl">
               <UserPlus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
               Add User
            </button>
          </div>
        </header>

        {/* Filters/Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
           {[
             { title: 'Total Users', value: '1,248', color: 'blue' },
             { title: 'Active Now', value: '42', color: 'teal' },
             { title: 'Admins', value: '3', color: 'purple' },
             { title: 'Pending Audit', value: '12', color: 'orange' },
           ].map((stat) => (
             <div key={stat.title} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1 transition-all hover:border-white/20">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{stat.title}</p>
                <p className="text-xl font-extrabold text-white">{stat.value}</p>
             </div>
           ))}
        </div>

        {/* Users Table */}
        <div className="glass-card bg-slate-900/40 border border-white/5 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/5 border-b border-white/10">
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">User Profile</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Role</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Joined</th>
                  <th className="px-6 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {users.map((u, idx) => (
                  <motion.tr 
                    key={u.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="group hover:bg-white/5 transition-colors"
                  >
                    <td className="px-6 py-6">
                       <div className="flex items-center gap-4">
                          <img src={u.avatar} className="w-10 h-10 rounded-full border border-white/10 group-hover:border-teal-500/50 transition-all duration-500 shadow-lg" />
                          <div>
                             <p className="text-sm font-extrabold text-white mb-0.5">{u.name}</p>
                             <p className="text-xs text-slate-500 flex items-center gap-1.5"><Mail className="w-3 h-3" />{u.email}</p>
                          </div>
                       </div>
                    </td>
                    <td className="px-6 py-6">
                       <span className={`px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                          u.role === 'Admin' ? 'bg-purple-500/10 text-purple-400 border-purple-400/10' : 'bg-blue-500/10 text-blue-400 border-blue-400/10'
                       }`}>
                          {u.role}
                       </span>
                    </td>
                    <td className="px-6 py-6">
                       <div className="flex items-center gap-2">
                          <CheckCircle2 className={`w-3 h-3 ${u.status === 'Active' ? 'text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.3)]' : 'text-slate-600'}`} />
                          <span className={`text-[10px] font-black uppercase tracking-widest ${u.status === 'Active' ? 'text-white' : 'text-slate-600'}`}>{u.status}</span>
                       </div>
                    </td>
                    <td className="px-6 py-6">
                       <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Clock className="w-3 h-3" />
                          {u.joined}
                       </div>
                    </td>
                    <td className="px-6 py-6 font-medium">
                       <div className="flex items-center gap-2">
                          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-white hover:border-white/30 transition-all">
                             <ShieldCheck className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-500 hover:text-white transition-all">
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
             <div className="flex items-center gap-2 text-xs text-slate-500">
                <p>Rows per page:</p>
                <select className="bg-slate-900 border border-white/5 rounded px-2 py-1 text-slate-400 focus:outline-none">
                   <option>10</option>
                   <option>25</option>
                   <option>50</option>
                </select>
             </div>
             <div className="flex gap-1">
                <button className="p-2 rounded-lg hover:bg-white/5 text-slate-500 transition-colors"><ChevronRight className="w-4 h-4 rotate-180" /></button>
                <button className="p-2 rounded-lg hover:bg-white/5 text-slate-500 transition-colors"><ChevronRight className="w-4 h-4" /></button>
             </div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default ManageUsers;
