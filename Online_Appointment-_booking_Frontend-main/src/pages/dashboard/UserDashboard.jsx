import React from 'react';
import { 
  CalendarDays, 
  CheckCircle2, 
  Clock3, 
  PlusCircle, 
  ChevronRight,
  MapPin,
  Stethoscope
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardLayout from '../../components/dashboard/DashboardLayout';

const UserDashboard = () => {
  const { user } = useAuth();

  const stats = [
    { title: 'Upcoming', value: '2', icon: <CalendarDays className="w-5 h-5 text-blue-500" /> },
    { title: 'Completed', value: '12', icon: <CheckCircle2 className="w-5 h-5 text-teal-500" /> },
    { title: 'Pending', value: '1', icon: <Clock3 className="w-5 h-5 text-purple-500" /> },
  ];

  const recentAppointments = [
    { id: '1', service: 'Dental Checkup', date: '2026-03-30', status: 'Upcoming', provider: 'Dr. Sarah Wilson' },
    { id: '2', service: 'Eye Examination', date: '2026-04-05', status: 'Upcoming', provider: 'Dr. Michael Chen' },
    { id: '3', service: 'General Consultation', date: '2026-03-20', status: 'Completed', provider: 'Dr. Amanda Rivera' },
  ];

  return (
    <DashboardLayout role="user">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white">
              Hello, <span className="text-blue-500">{user?.name?.split(' ')[0]}</span>
            </h1>
            <p className="text-slate-400 text-sm">Welcome back to your dashboard.</p>
          </div>
          <Link to="/user/book" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
            <PlusCircle className="w-4 h-4" />
            Book Appointment
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div key={stat.title} className="bg-slate-900 border border-white/10 p-6 rounded-xl shadow-sm flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">{stat.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-slate-800 rounded-lg border border-white/5">
                {stat.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Body Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Recent Appointments */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white flex items-center gap-2">
                <CalendarDays className="w-4 h-4 text-blue-500" />
                Recent Activity
              </h3>
              <Link to="/user/appointments" className="text-xs font-bold text-blue-400 hover:underline">View All</Link>
            </div>

            <div className="space-y-3">
              {recentAppointments.map((apt) => (
                <div key={apt.id} className="bg-slate-900 border border-white/10 p-4 rounded-xl flex items-center justify-between hover:bg-slate-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex flex-col items-center justify-center border border-white/5">
                      <span className="text-[10px] text-slate-500">{apt.date.split('-')[1]}</span>
                      <span className="text-sm font-bold text-white">{apt.date.split('-')[2]}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{apt.service}</h4>
                      <p className="text-xs text-slate-500">{apt.provider}</p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    apt.status === 'Upcoming' ? 'bg-blue-500/10 text-blue-400' : 'bg-teal-500/10 text-teal-400'
                  }`}>
                    {apt.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Info Sidebar */}
          <div className="space-y-6">
            <div className="bg-slate-900 border border-white/10 p-5 rounded-xl">
              <h3 className="text-sm font-bold mb-4 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-teal-500" />
                Default Clinic
              </h3>
              <div className="p-3 bg-slate-800/50 rounded-lg border border-white/5 mb-4">
                <p className="text-xs font-bold text-white">Central Medical Hub</p>
                <p className="text-[10px] text-slate-500">New York, NY 10001</p>
              </div>
              <button className="w-full py-2 bg-slate-800 border border-white/10 rounded-lg text-xs font-bold text-slate-400 hover:text-white transition-colors">
                Change Branch
              </button>
            </div>
            
            <div className="bg-slate-900 border border-white/10 p-5 rounded-xl">
              <h3 className="text-sm font-bold mb-4">Need Help?</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">Our support team is available 24/7 for any scheduling issues.</p>
              <button className="w-full py-2 bg-blue-600/10 border border-blue-600/20 text-blue-400 rounded-lg text-xs font-bold hover:bg-blue-600/20 transition-colors">
                Contact Support
              </button>
            </div>
          </div>

        </div>
      </div>
    </DashboardLayout>
  );
};

export default UserDashboard;
