import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, CheckCircle, Bell, Mail } from 'lucide-react';

const SolutionTemplate = ({ solutions }) => {
  const { solutionId } = useParams();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const solution = solutions.find(s => s.id === parseInt(solutionId));

  if (!solution) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Solution Not Found</h1>
          <Link to="/kit" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Demo Kit
          </Link>
        </div>
      </div>
    );
  }

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link 
          to="/kit" 
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Demo Kit
        </Link>

        {/* Solution Header */}
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-2xl p-8 mb-8 border border-white/30 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-start space-x-6">
            <div className="p-4 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
              <solution.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-3">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {solution.title}
                </h1>
                {solution.llmPowered && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                    AI-Powered
                  </span>
                )}
              </div>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-4">
                {solution.description}
              </p>
              <div className="flex items-center space-x-4">
                <span className="inline-block px-4 py-1 text-sm font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                  {solution.category}
                </span>
                <span className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400">
                  <Calendar className="w-4 h-4 mr-2" />
                  Available January 1st, 2026
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-lg p-8 mb-8 text-center">
          <div className="inline-block p-4 rounded-full bg-white/20 mb-4">
            <Calendar className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-3">Coming Soon</h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            This solution is currently in development and will be available as part of our POC service launch on January 1st, 2026.
          </p>
          <div className="inline-block px-6 py-3 bg-white/20 rounded-lg font-medium">
            Expected Launch: January 1st, 2026
          </div>
        </div>

        {/* Expected Features */}
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-2xl p-8 mb-8 border border-white/30 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Expected Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {solution.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-3 p-4 rounded-lg bg-slate-50 dark:bg-slate-700/50">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Capabilities */}
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-2xl p-8 mb-8 border border-white/30 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            What to Expect
          </h2>
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <ul className="space-y-3">
              <li className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Comprehensive Dashboard:</span> Real-time monitoring and analytics for all key metrics
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Advanced Automation:</span> Reduce manual work with intelligent workflows and triggers
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Seamless Integration:</span> Connect with your existing tools and systems
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Custom Reports:</span> Generate detailed reports tailored to your requirements
              </li>
              <li className="text-slate-700 dark:text-slate-300">
                <span className="font-semibold">Expert Support:</span> Dedicated support team to help you maximize value
              </li>
            </ul>
          </div>
        </div>

        {/* Notification Signup */}
        <div className="backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-xl shadow-2xl p-8 border border-white/30 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300">
          <div className="flex items-start space-x-4">
            <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Get Notified When Available
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Be the first to know when this solution launches. We'll send you an email notification as soon as it becomes available.
              </p>
              
              {subscribed ? (
                <div className="flex items-center space-x-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Thank you! We'll notify you when this solution is available.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors inline-flex items-center justify-center"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Interested in exploring other solutions?
          </p>
          <Link
            to="/kit"
            className="inline-block px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
          >
            View All 20+ Solutions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionTemplate;
