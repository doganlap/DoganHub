import React, { useState } from 'react';
import { BarChart3, Download, Calendar, Filter, Users, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const Reports = () => {
  const [dateRange, setDateRange] = useState('30days');

  const visitorData = [
    { date: 'Nov 10', demos: 12, pocs: 5 },
    { date: 'Nov 11', demos: 15, pocs: 8 },
    { date: 'Nov 12', demos: 18, pocs: 6 },
    { date: 'Nov 13', demos: 14, pocs: 9 },
    { date: 'Nov 14', demos: 20, pocs: 7 },
    { date: 'Nov 15', demos: 16, pocs: 11 },
    { date: 'Nov 16', demos: 22, pocs: 10 }
  ];

  const stats = [
    { label: 'Total Demo Requests', value: '342', icon: Users, change: '+12%' },
    { label: 'POC Requests', value: '89', icon: FileText, change: '+8%' },
    { label: 'Active Sessions', value: '45', icon: BarChart3, change: '+15%' },
    { label: 'Conversion Rate', value: '26%', icon: Calendar, change: '+3%' }
  ];

  const recentActivity = [
    { name: 'John Doe', company: 'Acme Corp', type: 'Demo', status: 'Active', date: '2 hours ago' },
    { name: 'Jane Smith', company: 'Tech Inc', type: 'POC', status: 'Pending', date: '4 hours ago' },
    { name: 'Mike Johnson', company: 'Solutions Ltd', type: 'Demo', status: 'Completed', date: '6 hours ago' },
    { name: 'Sarah Williams', company: 'Global Systems', type: 'POC', status: 'In Progress', date: '8 hours ago' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Visitor Reports</h1>
          <p className="text-slate-600 dark:text-slate-400">Analytics and insights for demo portal visitors</p>
        </div>
        <div className="flex gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
                      <div
            key={index}
            className="backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 rounded-xl p-6 shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
              <div className="flex items-start justify-between mb-4">
                <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-green-600 dark:text-green-400">{stat.change}</span>
              </div>
              <p className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Visitor Trend Chart */}
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Visitor Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={visitorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="demos" stroke="#3b82f6" strokeWidth={2} name="Demo Requests" />
            <Line type="monotone" dataKey="pocs" stroke="#10b981" strokeWidth={2} name="POC Requests" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700">
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Activity</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Company</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
              {recentActivity.map((activity, index) => (
                <tr key={index} className="hover:bg-slate-50 dark:hover:bg-slate-900">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-slate-900 dark:text-white">{activity.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-slate-600 dark:text-slate-400">{activity.company}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      activity.type === 'Demo' 
                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                        : 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200'
                    }`}>
                      {activity.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      activity.status === 'Active' ? 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200' :
                      activity.status === 'Pending' ? 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200' :
                      activity.status === 'Completed' ? 'bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200' :
                      'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                    }`}>
                      {activity.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">{activity.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
