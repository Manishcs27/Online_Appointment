import React from 'react';

const StatCard = ({ value, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-slate-800 border border-white/10 rounded-xl shadow-md">
      <h3 className="text-4xl lg:text-5xl font-extrabold text-blue-500 mb-2">
        {value}
      </h3>
      <p className="text-slate-400 font-medium uppercase text-sm tracking-widest">
        {title}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <StatCard value="10K+" title="Active Users" />
          <StatCard value="50K+" title="Total Bookings" />
          <StatCard value="99%" title="Satisfaction Rate" />
        </div>
      </div>
    </section>
  );
};

export default Stats;
