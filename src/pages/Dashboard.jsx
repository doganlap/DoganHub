import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, FileText, CheckCircle } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '1,234', change: '+12%', color: 'blue' },
    { icon: FileText, label: 'Total Assessments', value: '856', change: '+8%', color: 'green' },
    { icon: CheckCircle, label: 'Compliance Rate', value: '94%', change: '+3%', color: 'purple' },
    { icon: TrendingUp, label: 'Risk Score', value: '68', change: '-5%', color: 'orange' }
  ];

  const monthlyData = [
    { month: 'Jan', value: 45 },
    { month: 'Feb', value: 52 },
    { month: 'Mar', value: 61 },
    { month: 'Apr', value: 58 },
    { month: 'May', value: 72 },
    { month: 'Jun', value: 81 }
  ];

  const complianceData = [
    { name: 'Compliant', value: 840, color: '#10b981' },
    { name: 'In Progress', value: 120, color: '#f59e0b' },
    { name: 'Non-Compliant', value: 40, color: '#ef4444' }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Demo Dashboard</h1>
        <p className="text-slate-600 dark:text-slate-400">Welcome to your GRC demo environment</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
                      <div
            key={index}
            className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 hover:bg-white/90 dark:hover:bg-slate-800/90 transition-all duration-300 cursor-pointer"
          >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900 rounded-lg`}>
                  <Icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </div>
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{stat.change}</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Monthly Assessments</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl p-6 shadow-lg border border-white/30 dark:border-slate-700/50 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Compliance Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={complianceData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {complianceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {[
            { action: 'Risk assessment completed', user: 'John Doe', time: '2 hours ago' },
            { action: 'New control added', user: 'Jane Smith', time: '4 hours ago' },
            { action: 'Compliance report generated', user: 'Mike Johnson', time: '6 hours ago' },
            { action: 'Evidence uploaded', user: 'Sarah Williams', time: '8 hours ago' }
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-slate-200 dark:border-slate-700 last:border-0">
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{activity.action}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{activity.user}</p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
