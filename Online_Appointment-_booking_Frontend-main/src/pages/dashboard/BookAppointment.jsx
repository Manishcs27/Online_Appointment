import React, { useState } from 'react';
import { 
  Check, 
  ChevronRight, 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  ClipboardCheck,
  Stethoscope,
  HeartPulse,
  Syringe,
  Activity
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import api from '../../services/api';

const BookAppointment = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    service: '',
    provider: '',
    date: '',
    time: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const services = [
    { id: '1', title: 'General Checkup', icon: <Stethoscope className="w-5 h-5" />, price: '$50', duration: '30 min' },
    { id: '2', title: 'Cardiology', icon: <HeartPulse className="w-5 h-5" />, price: '$120', duration: '45 min' },
    { id: '3', title: 'Vaccination', icon: <Syringe className="w-5 h-5" />, price: '$30', duration: '15 min' },
    { id: '4', title: 'Blood Test', icon: <Activity className="w-5 h-5" />, price: '$40', duration: '20 min' },
  ];

  const timeSlots = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

  const handleConfirm = async () => {
    setError('');
    setIsLoading(true);
    
    try {
      const result = await api.createAppointment({
        service: bookingData.service,
        provider: bookingData.provider,
        date: bookingData.date,
        time: bookingData.time
      });
      
      if (result.success) {
        // Navigate to appointments page or dashboard
        navigate('/user/appointments');
      }
    } catch (err) {
      setError(err.message || 'Failed to book appointment');
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  return (
    <DashboardLayout role="user">
      <div className="max-w-4xl mx-auto space-y-8 pb-20">
        
        {/* Progress Stepper */}
        <div className="flex items-center justify-between mb-8 px-4 relative">
           <div className="absolute top-5 left-10 right-10 h-0.5 bg-slate-800 -z-10"></div>
           {[1, 2, 3, 4].map((i) => (
             <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= i ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-900 border border-white/10 text-slate-500'
                }`}>
                  {step > i ? <Check className="w-5 h-5" /> : i}
                </div>
                <span className={`text-[10px] uppercase font-bold tracking-wider ${step >= i ? 'text-blue-500' : 'text-slate-600'}`}>
                  {['Service', 'Provider', 'Schedule', 'Confirm'][i-1]}
                </span>
             </div>
           ))}
        </div>

        <div className="bg-slate-900 border border-white/10 p-8 rounded-xl shadow-sm">
          {/* STEP 1: SELECT SERVICE */}
          {step === 1 && (
            <div className="space-y-6">
               <div className="space-y-1">
                 <h2 className="text-xl font-bold text-white">Select a Service</h2>
                 <p className="text-slate-400 text-xs text-slate-500 italic">"What kind of clinical assistance do you need?"</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((s) => (
                    <button 
                      key={s.id}
                      onClick={() => { setBookingData({...bookingData, service: s.title}); nextStep(); }}
                      className={`p-5 rounded-xl border flex items-center justify-between transition-colors group ${
                        bookingData.service === s.title 
                          ? 'bg-blue-600/10 border-blue-600' 
                          : 'bg-slate-800 border-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                           bookingData.service === s.title ? 'bg-blue-600 text-white' : 'bg-slate-900 text-slate-400'
                        }`}>
                          {s.icon}
                        </div>
                        <div className="text-left">
                           <p className="font-bold text-white text-sm">{s.title}</p>
                           <p className="text-xs text-slate-500">{s.duration}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-blue-500">{s.price}</span>
                    </button>
                  ))}
               </div>
            </div>
          )}

          {/* STEP 2: SELECT PROVIDER */}
          {step === 2 && (
            <div className="space-y-6">
               <div className="space-y-1">
                 <h2 className="text-xl font-bold text-white">Choose Specialist</h2>
                 <p className="text-slate-400 text-xs text-slate-500 italic">"Select from our team of professional doctors."</p>
               </div>
               
               <div className="space-y-2">
                  {['Dr. Sarah Wilson', 'Dr. Michael Chen', 'Dr. Amanda Rivera'].map((name) => (
                    <button 
                      key={name}
                      onClick={() => { setBookingData({...bookingData, provider: name}); nextStep(); }}
                      className="w-full p-4 rounded-xl bg-slate-800 border border-white/5 flex items-center justify-between group hover:border-blue-500 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center font-bold text-blue-500 text-sm">
                          {name.split(' ')[1].charAt(0)}
                        </div>
                        <p className="font-bold text-white text-sm">{name}</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-white" />
                    </button>
                  ))}
               </div>
               
               <button onClick={prevStep} className="mt-4 text-[10px] font-bold uppercase text-slate-500 hover:text-white">Go Back</button>
            </div>
          )}

          {/* STEP 3: SCHEDULE */}
          {step === 3 && (
            <div className="space-y-6">
               <div className="space-y-6">
                 <div className="space-y-1">
                   <h2 className="text-xl font-bold text-white">Schedule Time</h2>
                   <p className="text-slate-400 text-xs text-slate-500 italic">"Select your preferred date and time."</p>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase text-slate-500">Pick Date</label>
                       <input 
                         type="date" 
                         onChange={(e) => setBookingData({...bookingData, date: e.target.value})}
                         className="w-full bg-slate-800 border border-white/10 rounded-lg py-2.5 px-4 text-xs text-white focus:outline-none focus:border-blue-500 transition-colors"
                       />
                    </div>
                    
                    <div className="space-y-3">
                       <label className="text-[10px] font-bold uppercase text-slate-500">Available Slots</label>
                       <div className="grid grid-cols-2 gap-2">
                          {timeSlots.map(t => (
                            <button 
                              key={t}
                              onClick={() => setBookingData({...bookingData, time: t})}
                              className={`py-2 rounded-lg text-xs font-bold border transition-colors ${
                                bookingData.time === t 
                                  ? 'bg-blue-600 text-white border-blue-600' 
                                  : 'bg-slate-800 border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                       </div>
                    </div>
                 </div>
               </div>

               <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <button onClick={prevStep} className="text-[10px] font-bold uppercase text-slate-500 hover:text-white">Go Back</button>
                  <button 
                    disabled={!bookingData.date || !bookingData.time}
                    onClick={nextStep} 
                    className="bg-blue-600 text-white px-6 py-2.5 rounded-lg text-xs font-bold hover:bg-blue-700 disabled:opacity-50 transition-colors"
                  >
                    Review Details
                  </button>
               </div>
            </div>
          )}

          {/* STEP 4: CONFIRMATION */}
          {step === 4 && (
            <div className="space-y-8 text-center sm:text-left">
               <div className="space-y-2 mb-8">
                 <div className="w-12 h-12 rounded bg-blue-600/10 border border-blue-600/20 flex items-center justify-center mx-auto sm:ml-0 text-blue-500 mb-4 shadow-sm">
                   <ClipboardCheck className="w-6 h-6" />
                 </div>
                 <h2 className="text-xl font-bold text-white">Review Booking</h2>
                 <p className="text-slate-400 text-xs italic">"Please ensure all details are correct."</p>
               </div>
               
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-800 border border-white/5 rounded-xl">
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-slate-500 uppercase">Service</p>
                     <p className="text-sm font-bold text-white">{bookingData.service}</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-slate-500 uppercase">Doctor</p>
                     <p className="text-sm font-bold text-white">{bookingData.provider}</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-slate-500 uppercase">Date</p>
                     <p className="text-sm font-bold text-white">{bookingData.date}</p>
                  </div>
                  <div className="space-y-1">
                     <p className="text-[10px] font-bold text-slate-500 uppercase">Time</p>
                     <p className="text-sm font-bold text-white">{bookingData.time}</p>
                  </div>
               </div>

               <div className="flex items-center justify-between pt-6 border-t border-white/5">
                  <button onClick={prevStep} className="text-[10px] font-bold uppercase text-slate-500 hover:text-white">Go Back</button>
                  <button 
                    onClick={handleConfirm}
                    disabled={isLoading}
                    className="bg-blue-600 text-white px-8 py-2.5 rounded-lg text-sm font-bold hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-lg shadow-blue-900/20"
                  >
                    {isLoading ? 'Booking...' : 'Confirm Appointment'}
                  </button>
               </div>
               
               {error && (
                 <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                   <p className="text-red-400 text-sm">{error}</p>
                 </div>
               )}
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BookAppointment;
