import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle, Calendar, Mail, Phone } from 'lucide-react';

const POCConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};
  const agreementNumber = `POC-${Date.now().toString().slice(-8)}`;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 border border-slate-200 dark:border-slate-700">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
            POC Request Received!
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            Your proof of concept request has been submitted successfully
          </p>
        </div>

        <div className="backdrop-blur-sm bg-slate-100/70 dark:bg-slate-900/70 rounded-lg p-6 mb-6 space-y-3 border border-white/20 dark:border-slate-700/50 hover:bg-slate-100/90 dark:hover:bg-slate-900/90 transition-all duration-300">
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Agreement Number:</span>
            <span className="font-mono font-semibold text-slate-900 dark:text-white">{agreementNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Status:</span>
            <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 text-sm font-medium rounded-full">
              Under Review
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-600 dark:text-slate-400">Company:</span>
            <span className="font-semibold text-slate-900 dark:text-white">{formData.company || 'N/A'}</span>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <h3 className="font-semibold text-slate-900 dark:text-white">What happens next?</h3>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Email Confirmation</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">You'll receive an email with your POC details</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Team Contact</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Our team will reach out within 24-48 hours</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900 dark:text-white">Schedule Meeting</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">We'll set up a kickoff meeting to discuss requirements</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => navigate('/sandbox')}
            className="flex-1 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Explore Sandbox
          </button>
          <button
            onClick={() => navigate('/')}
            className="flex-1 px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white font-medium rounded-lg transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default POCConfirmation;
