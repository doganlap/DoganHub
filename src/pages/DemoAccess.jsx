import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Rocket, User, Mail, Building, Briefcase, Phone, Globe, CheckCircle } from 'lucide-react';

const DemoAccess = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    industry: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [credentials, setCredentials] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate demo credentials
    const demoCredentials = {
      username: `demo_${Math.random().toString(36).substr(2, 8)}`,
      password: Math.random().toString(36).substr(2, 12),
      expiresIn: '7 days'
    };
    
    setCredentials(demoCredentials);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-2xl p-8 border border-white/30 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Demo Access Granted!
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              Your demo credentials have been generated. Save these for access.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-6 mb-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Username
              </label>
              <div className="flex items-center space-x-2">
                <code className="flex-1 bg-white dark:bg-slate-800 px-4 py-2 rounded border border-slate-300 dark:border-slate-600 font-mono text-sm">
                  {credentials.username}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(credentials.username)}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                Password
              </label>
              <div className="flex items-center space-x-2">
                <code className="flex-1 bg-white dark:bg-slate-800 px-4 py-2 rounded border border-slate-300 dark:border-slate-600 font-mono text-sm">
                  {credentials.password}
                </code>
                <button
                  onClick={() => navigator.clipboard.writeText(credentials.password)}
                  className="px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm rounded transition-colors"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="text-sm text-slate-600 dark:text-slate-400 pt-2">
              <strong>Expires:</strong> {credentials.expiresIn}
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Go to Dashboard
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
            <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Request Demo Access
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Fill out the form below to get instant access to our demo environment
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <User className="w-4 h-4" />
              <span>Full Name *</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Mail className="w-4 h-4" />
              <span>Email Address *</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Building className="w-4 h-4" />
              <span>Company *</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              placeholder="Acme Corporation"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Briefcase className="w-4 h-4" />
              <span>Job Title *</span>
            </label>
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              placeholder="Compliance Manager"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Phone className="w-4 h-4" />
              <span>Phone</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
              <Globe className="w-4 h-4" />
              <span>Industry *</span>
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
            >
              <option value="">Select Industry</option>
              <option value="finance">Financial Services</option>
              <option value="healthcare">Healthcare</option>
              <option value="technology">Technology</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="retail">Retail</option>
              <option value="government">Government</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
          >
            <Rocket className="w-5 h-5" />
            <span>Get Demo Access</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default DemoAccess;
