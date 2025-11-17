import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Bot, CheckCircle, ArrowRight, ArrowLeft, Play, Users, TrendingUp, Award, Zap, Building2, Target, Sparkles, FileText, Shield, Code } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const SolutionStory = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentPage / 5) * 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Solutions data matching DemoKit
  const solutions = {
    1: {
      title: 'Risk Assessment & Management',
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      pages: {
        1: {
          title: 'Overview',
          subtitle: 'AI-Powered Risk Intelligence',
          content: 'Transform your risk management with AI-powered identification, assessment, and mitigation planning. Our solution provides real-time risk visibility across your entire organization.',
          highlights: [
            'Automated risk identification using AI',
            'Real-time risk scoring and prioritization',
            'Predictive risk analytics',
            'Integrated mitigation workflows'
          ],
          stats: [
            { value: '75%', label: 'Faster Risk Assessment' },
            { value: '90%', label: 'Risk Detection Accuracy' },
            { value: '60%', label: 'Reduced Manual Work' }
          ]
        },
        2: {
          title: 'Key Features',
          subtitle: 'Comprehensive Risk Management',
          features: [
            { icon: Bot, title: 'AI Risk Identification', desc: 'Automatically detect and categorize risks from multiple sources' },
            { icon: Target, title: 'Dynamic Risk Scoring', desc: 'Real-time risk assessment with automated scoring algorithms' },
            { icon: TrendingUp, title: 'Heat Maps & Visualization', desc: 'Visual risk dashboards with interactive heat maps' },
            { icon: Zap, title: 'Mitigation Tracking', desc: 'Track mitigation actions from planning to completion' },
            { icon: FileText, title: 'Risk Register', desc: 'Centralized risk database with version control' },
            { icon: Shield, title: 'Compliance Integration', desc: 'Map risks to compliance requirements automatically' }
          ]
        },
        3: {
          title: 'Use Cases',
          subtitle: 'Real-World Applications',
          useCases: [
            {
              industry: 'Financial Services',
              challenge: 'Manual risk assessment taking 2-3 weeks per cycle',
              solution: 'Automated risk identification and scoring',
              result: '80% reduction in assessment time, improved accuracy'
            },
            {
              industry: 'Healthcare',
              challenge: 'Difficulty tracking patient data privacy risks',
              solution: 'Real-time risk monitoring with AI detection',
              result: '95% faster incident detection and response'
            },
            {
              industry: 'Manufacturing',
              challenge: 'Supply chain risk visibility gaps',
              solution: 'Vendor risk integration with predictive analytics',
              result: '70% improvement in supply chain resilience'
            }
          ]
        },
        4: {
          title: 'Implementation',
          subtitle: 'Quick Start in 4 Weeks',
          timeline: [
            { week: 'Week 1', title: 'Discovery & Setup', tasks: ['System configuration', 'Data integration', 'User training'] },
            { week: 'Week 2', title: 'Risk Framework', tasks: ['Risk categories setup', 'Scoring models', 'Workflow design'] },
            { week: 'Week 3', title: 'Integration', tasks: ['Connect data sources', 'API integration', 'Testing'] },
            { week: 'Week 4', title: 'Go Live', tasks: ['Production deployment', 'User onboarding', 'Support setup'] }
          ],
          techStack: ['React', 'Python AI/ML', 'PostgreSQL', 'Azure Cloud', 'REST APIs']
        },
        5: {
          title: 'Success Stories',
          subtitle: 'Proven Results',
          testimonials: [
            {
              company: 'Global Bank Inc',
              person: 'Sarah Johnson, Chief Risk Officer',
              quote: 'Shahin-AI transformed our risk management. We now identify and assess risks 10x faster with higher accuracy.',
              metrics: ['85% time savings', '99% accuracy', '$2M cost reduction']
            },
            {
              company: 'TechCorp International',
              person: 'Ahmed Al-Rashid, VP Security',
              quote: 'The AI-powered risk detection caught critical vulnerabilities we would have missed manually.',
              metrics: ['100+ risks detected', '95% faster response', 'Zero breaches']
            }
          ],
          roi: {
            costSavings: '$500K - $2M annually',
            timeSavings: '75-85% reduction in manual work',
            accuracy: '90-99% risk detection rate'
          }
        }
      }
    },
    2: {
      title: 'Compliance Tracking Dashboard',
      icon: CheckCircle,
      color: 'from-green-500 to-teal-600',
      pages: {
        1: {
          title: 'Overview',
          subtitle: 'Real-Time Compliance Monitoring',
          content: 'Monitor compliance across multiple frameworks with real-time alerts and automated reporting. Stay ahead of audit requirements with continuous compliance monitoring.',
          highlights: [
            'Multi-framework support (ISO, NIST, SOC 2, GDPR)',
            'Real-time compliance status tracking',
            'Automated evidence collection',
            'Audit-ready reports in minutes'
          ],
          stats: [
            { value: '95%', label: 'Compliance Coverage' },
            { value: '10+', label: 'Framework Support' },
            { value: '50%', label: 'Faster Audits' }
          ]
        },
        2: {
          title: 'Key Features',
          subtitle: 'Comprehensive Compliance Management',
          features: [
            { icon: CheckCircle, title: 'Multi-Framework Support', desc: 'ISO 27001, NIST, SOC 2, GDPR, HIPAA, and more' },
            { icon: Zap, title: 'Real-Time Alerts', desc: 'Instant notifications for compliance gaps' },
            { icon: FileText, title: 'Automated Reporting', desc: 'Generate audit reports automatically' },
            { icon: Shield, title: 'Evidence Management', desc: 'Centralized evidence collection and storage' },
            { icon: Target, title: 'Gap Analysis', desc: 'Identify and track compliance gaps' },
            { icon: TrendingUp, title: 'Compliance Trends', desc: 'Historical compliance analytics' }
          ]
        },
        3: {
          title: 'Use Cases',
          subtitle: 'Industry Applications',
          useCases: [
            {
              industry: 'Technology',
              challenge: 'Managing SOC 2 compliance manually',
              solution: 'Automated control monitoring and evidence collection',
              result: 'SOC 2 audit completed 60% faster'
            },
            {
              industry: 'Healthcare',
              challenge: 'HIPAA compliance documentation gaps',
              solution: 'Continuous compliance monitoring with alerts',
              result: '100% compliance maintained, zero violations'
            },
            {
              industry: 'Financial Services',
              challenge: 'Multiple regulatory framework tracking',
              solution: 'Unified compliance dashboard for all frameworks',
              result: '70% reduction in compliance management effort'
            }
          ]
        },
        4: {
          title: 'Implementation',
          subtitle: 'Get Compliant in 3 Weeks',
          timeline: [
            { week: 'Week 1', title: 'Framework Setup', tasks: ['Select frameworks', 'Map controls', 'Configure policies'] },
            { week: 'Week 2', title: 'Integration', tasks: ['Connect systems', 'Evidence automation', 'Alert configuration'] },
            { week: 'Week 3', title: 'Launch', tasks: ['Team training', 'Go live', 'First compliance report'] }
          ],
          techStack: ['React', 'Node.js', 'MongoDB', 'Azure', 'AI/ML Engine']
        },
        5: {
          title: 'Success Stories',
          subtitle: 'Customer Wins',
          testimonials: [
            {
              company: 'CloudTech Solutions',
              person: 'Emily Chen, Compliance Director',
              quote: 'We achieved SOC 2 Type II certification in record time. The automated evidence collection was a game-changer.',
              metrics: ['60% faster audit', '100% compliance', '$300K savings']
            },
            {
              company: 'MedHealth Systems',
              person: 'Dr. Mohammed Al-Sayed, CISO',
              quote: 'HIPAA compliance is now continuous and automatic. No more last-minute scrambling before audits.',
              metrics: ['24/7 monitoring', 'Zero violations', '80% time saved']
            }
          ],
          roi: {
            costSavings: '$200K - $800K annually',
            timeSavings: '50-70% reduction in compliance work',
            accuracy: '98-100% compliance coverage'
          }
        }
      }
    }
    // Add more solutions as needed...
  };

  const currentSolution = solutions[solutionId] || solutions[1];
  const currentPageData = currentSolution.pages[currentPage];
  const Icon = currentSolution.icon;

  const handleNext = () => {
    if (currentPage < 5) setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleBookDemo = () => {
    navigate('/register-demo');
  };

  const handleBookPOC = () => {
    navigate('/register-poc');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${currentSolution.color} mb-4`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{currentSolution.title}</h1>
          
          {/* Progress Bar */}
          <div className="max-w-md mx-auto mt-6">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-12 h-12 rounded-full font-bold transition-all ${
                    page === currentPage
                      ? `bg-gradient-to-br ${currentSolution.color} text-white shadow-lg scale-110`
                      : page < currentPage
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  }`}
                >
                  {page < currentPage ? '✓' : page}
                </button>
              ))}
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${currentSolution.color} transition-all duration-500`}
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-gray-600 mt-2">
              <span>Overview</span>
              <span>Features</span>
              <span>Use Cases</span>
              <span>Implementation</span>
              <span>Success</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8 min-h-[500px] animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{currentPageData.title}</h2>
          <p className="text-xl text-gray-600 mb-8">{currentPageData.subtitle}</p>

          {/* Page 1: Overview */}
          {currentPage === 1 && (
            <div className="space-y-8">
              <p className="text-lg text-gray-700 leading-relaxed">{currentPageData.content}</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {currentPageData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 bg-green-50 rounded-xl">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                {currentPageData.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
                    <div className={`text-4xl font-bold bg-gradient-to-r ${currentSolution.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Page 2: Features */}
          {currentPage === 2 && (
            <div className="grid md:grid-cols-2 gap-6">
              {currentPageData.features.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={idx} className="p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${currentSolution.color} mb-4`}>
                      <FeatureIcon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Page 3: Use Cases */}
          {currentPage === 3 && (
            <div className="space-y-6">
              {currentPageData.useCases.map((useCase, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <h3 className="text-xl font-bold text-gray-800">{useCase.industry}</h3>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-semibold text-red-600 mb-1">Challenge</div>
                      <div className="text-gray-700">{useCase.challenge}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-blue-600 mb-1">Solution</div>
                      <div className="text-gray-700">{useCase.solution}</div>
                    </div>
                    <div>
                      <div className="font-semibold text-green-600 mb-1">Result</div>
                      <div className="text-gray-700">{useCase.result}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Page 4: Implementation */}
          {currentPage === 4 && (
            <div className="space-y-8">
              <div className="space-y-4">
                {currentPageData.timeline.map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className={`flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br ${currentSolution.color} flex items-center justify-center text-white font-bold`}>
                      {item.week}
                    </div>
                    <div className="flex-1 p-6 bg-gray-50 rounded-2xl">
                      <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                      <ul className="space-y-2">
                        {item.tasks.map((task, tidx) => (
                          <li key={tidx} className="flex items-center gap-2 text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Technology Stack</h3>
                <div className="flex flex-wrap gap-3">
                  {currentPageData.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Page 5: Success Stories */}
          {currentPage === 5 && (
            <div className="space-y-8">
              {currentPageData.testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                  <div className="flex items-start gap-4 mb-4">
                    <Award className="w-8 h-8 text-purple-600" />
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{testimonial.company}</h3>
                      <p className="text-gray-600">{testimonial.person}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-4">"{testimonial.quote}"</blockquote>
                  <div className="flex gap-4">
                    {testimonial.metrics.map((metric, midx) => (
                      <span key={midx} className="px-4 py-2 bg-white rounded-lg font-semibold text-purple-700 text-sm">
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="p-8 bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Expected ROI</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">💰</div>
                    <div className="font-bold text-gray-800 mb-1">Cost Savings</div>
                    <div className="text-gray-600">{currentPageData.roi.costSavings}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">⚡</div>
                    <div className="font-bold text-gray-800 mb-1">Time Savings</div>
                    <div className="text-gray-600">{currentPageData.roi.timeSavings}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">🎯</div>
                    <div className="font-bold text-gray-800 mb-1">Accuracy</div>
                    <div className="text-gray-600">{currentPageData.roi.accuracy}</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">
                <button
                  onClick={handleBookDemo}
                  className={`py-4 px-6 bg-gradient-to-r ${currentSolution.color} text-white rounded-xl font-bold text-lg hover:shadow-2xl transition-all flex items-center justify-center gap-2`}
                >
                  <Play className="w-5 h-5" />
                  Book a Demo
                </button>
                <button
                  onClick={handleBookPOC}
                  className="py-4 px-6 bg-white border-2 border-gray-300 text-gray-800 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Target className="w-5 h-5" />
                  Request POC
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-6 py-3 bg-white rounded-xl font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          <div className="text-center">
            <div className="text-sm text-gray-600 mb-2">Page {currentPage} of 5</div>
            <div className="flex gap-2">
              {currentPage < 5 ? (
                <button
                  onClick={handleBookDemo}
                  className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-200 transition-all"
                >
                  Book Demo
                </button>
              ) : null}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentPage === 5}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all shadow-md ${
              currentPage === 5
                ? 'bg-gray-300 cursor-not-allowed'
                : `bg-gradient-to-r ${currentSolution.color} hover:shadow-xl`
            }`}
          >
            Next
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionStory;
