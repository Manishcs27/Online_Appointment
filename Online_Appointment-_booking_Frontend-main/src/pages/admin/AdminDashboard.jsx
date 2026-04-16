import React from 'react';
import { 
  Users, 
  CalendarCheck, 
  TrendingUp, 
  Settings, 
  ChevronRight,
  ShieldCheck,
  Search
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const AdminDashboard = () => {
  const { user } = useAuth();

  const data = [
    { name: 'Jan', bookings: 400 },
    { name: 'Feb', bookings: 300 },
    { name: 'Mar', bookings: 200 },
    { name: 'Apr', bookings: 278 },
    { name: 'May', bookings: 189 },
    { name: 'Jun', bookings: 239 },
    { name: 'Jul', bookings: 349 },
  ];

  const adminStats = [
    { title: 'Total Users', value: '1,248', icon: <Users className="w-5 h-5 text-blue-500" /> },
    { title: 'Appointments', value: '3,892', icon: <CalendarCheck className="w-5 h-5 text-teal-500" /> },
    { title: 'Avg. Revenue', value: '$4,280', icon: <TrendingUp className="w-5 h-5 text-purple-500" /> },
  ];

  const recentRequests = [
    { id: '1', user: 'Sarah Jenkins', service: 'Cardiology', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=47' },
    { id: '2', user: 'Michael Ross', service: 'Dental', status: 'Pending', avatar: 'https://i.pravatar.cc/150?img=33' },
    { id: '3', user: 'Jessica Taylor', service: 'Physical Therapy', status: 'Approved', avatar: 'https://i.pravatar.cc/150?img=20' },
  ];

  return (
    <DashboardLayout role="admin">
      <div className="max-w-6xl mx-auto space-y-8 pb-12">
        
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              Admin <span className="text-blue-500">Dashboard</span>
            </h1>
            <p className="text-slate-400 text-sm">System performance and user management.</p>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                 type="text" 
                 placeholder="Search user..." 
                 className="w-full bg-slate-900 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
            <button className="p-2.5 rounded-lg bg-slate-800 border border-white/10 text-slate-400 hover:text-white transition-all">
               <Settings className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {adminStats.map((stat) => (
            <div key={stat.title} className="bg-slate-900 border border-white/10 p-6 rounded-xl shadow-sm">
              <div className="flex justify-between items-start">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{stat.title}</h3>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analytics Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Chart Card */}
          <div className="lg:col-span-2 bg-slate-900 border border-white/10 p-6 rounded-xl shadow-sm">
            <div className="mb-8">
              <h3 className="font-bold text-white">Booking Trends</h3>
              <p className="text-xs text-slate-500">Monthly booking performance</p>
            </div>

            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                  <YAxis stroke="#475569" fontSize={10} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '11px'}}
                  />
                  <Area type="monotone" dataKey="bookings" stroke="#3B82F6" strokeWidth={2} fill="#3B82F6" fillOpacity={0.1} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pending Requests */}
          <div className="bg-slate-900 border border-white/10 p-6 rounded-xl shadow-sm space-y-6">
            <h3 className="text-sm font-bold text-white flex items-center justify-between">
              Pending Requests
              <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 text-[10px] font-bold">04</span>
            </h3>
            
            <div className="space-y-4">
              {recentRequests.map((req) => (
                <div key={req.id} className="p-3 bg-slate-800 border border-white/5 rounded-lg space-y-3">
                  <div className="flex items-center gap-3">
                     <img src={req.avatar} className="w-8 h-8 rounded-full border border-white/10" alt={req.user} />
                     <div>
                       <p className="text-[11px] font-bold text-white">{req.user}</p>
                       <p className="text-[10px] text-slate-500">{req.service}</p>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <button className="flex-1 py-1.5 rounded bg-blue-600 text-white text-[10px] font-bold uppercase transition-colors">Approve</button>
                     <button className="px-3 py-1.5 rounded bg-slate-900 border border-white/5 text-slate-400 text-[10px]">Reject</button>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full py-3 rounded-lg bg-slate-800 border border-white/5 flex items-center justify-center gap-2 text-[10px] font-bold uppercase text-slate-400 hover:text-white transition-colors">
              Manage All
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Audit Logs */}
        <div className="bg-slate-900 border border-white/10 rounded-xl overflow-hidden shadow-sm">
             <div className="p-4 bg-slate-800 border-b border-white/5">
                <h3 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  System Logs
                </h3>
             </div>
             <div className="p-4 space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 text-[10px] text-slate-500">
                    <span className="font-mono">16:42:0{i}</span>
                    <span className="text-slate-300">Security audit completed for Node-0{i}</span>
                  </div>
                ))}
             </div>
        </div>

      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
