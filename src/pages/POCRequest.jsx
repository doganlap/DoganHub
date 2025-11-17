import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileText, Building, Users, DollarSign, Calendar, Target } from 'lucide-react';

const POCRequest = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    companySize: '',
    currentSolution: '',
    painPoints: '',
    expectedOutcomes: '',
    timeline: '',
    budgetRange: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/poc-confirm', { state: { formData } });
  };

  return (
      <div className="max-w-3xl mx-auto">
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-2xl p-8 border border-white/30 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
        <div className="text-center mb-8">
          <FileText className="w-16 h-16 text-green-600 dark:text-green-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Request Proof of Concept
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Tell us about your needs and we'll create a customized POC
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Full Name *"
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email *"
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
            />
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
              placeholder="Company *"
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
            />
            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              required
              placeholder="Job Title *"
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
            />
            <select
              name="companySize"
              value={formData.companySize}
              onChange={handleChange}
              required
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
            >
              <option value="">Company Size *</option>
              <option value="1-50">1-50 employees</option>
              <option value="51-200">51-200 employees</option>
              <option value="201-1000">201-1,000 employees</option>
              <option value="1000+">1,000+ employees</option>
            </select>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              required
              className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
            >
              <option value="">Timeline *</option>
              <option value="immediate">Immediate (1-2 weeks)</option>
              <option value="1-3months">1-3 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6months+">6+ months</option>
            </select>
          </div>

          <textarea
            name="currentSolution"
            value={formData.currentSolution}
            onChange={handleChange}
            placeholder="Current Solution (if any)"
            rows="3"
            className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
          />

          <textarea
            name="painPoints"
            value={formData.painPoints}
            onChange={handleChange}
            required
            placeholder="Main Pain Points *"
            rows="3"
            className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
          />

          <textarea
            name="expectedOutcomes"
            value={formData.expectedOutcomes}
            onChange={handleChange}
            required
            placeholder="Expected Outcomes *"
            rows="3"
            className="w-full px-4 py-2 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg dark:text-white"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
          >
            Submit POC Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default POCRequest;
