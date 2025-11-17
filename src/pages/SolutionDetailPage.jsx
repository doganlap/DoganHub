import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, PlayCircle, Download, Share2, BookOpen, Code, Lightbulb, TrendingUp, Users, AlertTriangle, Lock, FileText, Building2, Network, Eye, Zap, BarChart3, Globe, Cpu, Database, Cloud, Settings, Brain, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SolutionDetailPage = () => {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);

  // Define all solutions with comprehensive 5-page content
  const solutions = {
    1: {
      id: 1,
      title: 'Risk Assessment & Management',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-600',
      pages: {
        1: {
          title: language === 'ar' ? 'نظرة عامة' : 'Overview',
          subtitle: language === 'ar' ? 'حل شامل لإدارة المخاطر' : 'Comprehensive Risk Management Solution',
          content: {
            introduction: language === 'ar' 
              ? 'نظام متقدم لإدارة المخاطر يستخدم الذكاء الاصطناعي لتحديد وتقييم وتخفيف المخاطر المؤسسية.'
              : 'Advanced risk management system using AI to identify, assess, and mitigate organizational risks.',
            keyPoints: [
              language === 'ar' ? 'تحديد تلقائي للمخاطر' : 'Automated risk identification',
              language === 'ar' ? 'تقييم المخاطر في الوقت الفعلي' : 'Real-time risk assessment',
              language === 'ar' ? 'خطط تخفيف ذكية' : 'Intelligent mitigation plans',
              language === 'ar' ? 'لوحات معلومات تفاعلية' : 'Interactive dashboards',
            ],
            benefits: [
              language === 'ar' ? 'تقليل تعرض المؤسسة للمخاطر بنسبة 60%' : 'Reduce organizational risk exposure by 60%',
              language === 'ar' ? 'اتخاذ قرارات أسرع بناءً على البيانات' : 'Faster data-driven decision making',
              language === 'ar' ? 'امتثال تلقائي للمعايير' : 'Automated compliance adherence',
            ]
          }
        },
        2: {
          title: language === 'ar' ? 'الميزات' : 'Features',
          subtitle: language === 'ar' ? 'قدرات متقدمة' : 'Advanced Capabilities',
          content: {
            features: [
              {
                title: language === 'ar' ? 'تقييم المخاطر الآلي' : 'Automated Risk Scoring',
                description: language === 'ar' ? 'خوارزميات الذكاء الاصطناعي تقيم المخاطر تلقائياً' : 'AI algorithms automatically score risks',
                icon: Brain
              },
              {
                title: language === 'ar' ? 'خرائط الحرارة التفاعلية' : 'Interactive Heat Maps',
                description: language === 'ar' ? 'تصور المخاطر في الوقت الفعلي' : 'Real-time risk visualization',
                icon: BarChart3
              },
              {
                title: language === 'ar' ? 'تتبع التخفيف' : 'Mitigation Tracking',
                description: language === 'ar' ? 'راقب تقدم معالجة المخاطر' : 'Monitor risk treatment progress',
                icon: TrendingUp
              },
              {
                title: language === 'ar' ? 'التكامل مع الأنظمة' : 'System Integration',
                description: language === 'ar' ? 'اتصال سلس مع الأدوات الموجودة' : 'Seamless connection with existing tools',
                icon: Network
              }
            ]
          }
        },
        3: {
          title: language === 'ar' ? 'حالات الاستخدام' : 'Use Cases',
          subtitle: language === 'ar' ? 'سيناريوهات واقعية' : 'Real-World Scenarios',
          content: {
            useCases: [
              {
                industry: language === 'ar' ? 'الخدمات المالية' : 'Financial Services',
                scenario: language === 'ar' 
                  ? 'إدارة مخاطر الائتمان والسوق والعمليات'
                  : 'Credit, market, and operational risk management',
                results: language === 'ar' ? 'تخفيض 45% في الخسائر' : '45% reduction in losses'
              },
              {
                industry: language === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
                scenario: language === 'ar' 
                  ? 'إدارة مخاطر سلامة المرضى والامتثال'
                  : 'Patient safety and compliance risk management',
                results: language === 'ar' ? 'تحسين 70% في الامتثال' : '70% improvement in compliance'
              },
              {
                industry: language === 'ar' ? 'التصنيع' : 'Manufacturing',
                scenario: language === 'ar' 
                  ? 'مخاطر سلسلة التوريد والعمليات'
                  : 'Supply chain and operational risks',
                results: language === 'ar' ? 'توفير 2 مليون دولار سنوياً' : '$2M annual savings'
              }
            ]
          }
        },
        4: {
          title: language === 'ar' ? 'التنفيذ' : 'Implementation',
          subtitle: language === 'ar' ? 'خريطة الطريق للنشر' : 'Deployment Roadmap',
          content: {
            phases: [
              {
                phase: 1,
                title: language === 'ar' ? 'التخطيط والإعداد' : 'Planning & Setup',
                duration: language === 'ar' ? 'أسبوعان' : '2 weeks',
                tasks: [
                  language === 'ar' ? 'تقييم الاحتياجات' : 'Requirements assessment',
                  language === 'ar' ? 'تكوين النظام' : 'System configuration',
                  language === 'ar' ? 'تدريب الفريق' : 'Team training'
                ]
              },
              {
                phase: 2,
                title: language === 'ar' ? 'النشر التجريبي' : 'Pilot Deployment',
                duration: language === 'ar' ? '4 أسابيع' : '4 weeks',
                tasks: [
                  language === 'ar' ? 'نشر في قسم واحد' : 'Deploy in one department',
                  language === 'ar' ? 'جمع الملاحظات' : 'Gather feedback',
                  language === 'ar' ? 'التحسينات' : 'Refinements'
                ]
              },
              {
                phase: 3,
                title: language === 'ar' ? 'النشر الكامل' : 'Full Rollout',
                duration: language === 'ar' ? '6 أسابيع' : '6 weeks',
                tasks: [
                  language === 'ar' ? 'نشر على مستوى المؤسسة' : 'Enterprise-wide deployment',
                  language === 'ar' ? 'التكامل الكامل' : 'Full integration',
                  language === 'ar' ? 'الدعم المستمر' : 'Ongoing support'
                ]
              }
            ]
          }
        },
        5: {
          title: language === 'ar' ? 'قصص النجاح' : 'Success Stories',
          subtitle: language === 'ar' ? 'نتائج حقيقية من عملائنا' : 'Real Results from Our Clients',
          content: {
            testimonials: [
              {
                company: 'Global Bank Inc.',
                industry: language === 'ar' ? 'البنوك' : 'Banking',
                quote: language === 'ar'
                  ? 'حول هذا الحل إدارة المخاطر لدينا. نحن الآن نحدد المخاطر قبل أن تصبح مشاكل.'
                  : 'This solution transformed our risk management. We now identify risks before they become issues.',
                results: [
                  language === 'ar' ? '60% تقليل في الحوادث' : '60% reduction in incidents',
                  language === 'ar' ? '2x أسرع في الاستجابة' : '2x faster response time',
                  language === 'ar' ? '40% توفير في التكاليف' : '40% cost savings'
                ],
                author: 'John Smith, CRO'
              },
              {
                company: 'Healthcare Systems',
                industry: language === 'ar' ? 'الرعاية الصحية' : 'Healthcare',
                quote: language === 'ar'
                  ? 'تحسن كبير في سلامة المرضى والامتثال التنظيمي.'
                  : 'Significant improvement in patient safety and regulatory compliance.',
                results: [
                  language === 'ar' ? '75% تحسين في الامتثال' : '75% better compliance',
                  language === 'ar' ? 'صفر مخالفات' : 'Zero violations',
                  language === 'ar' ? 'تحسين رضا المرضى' : 'Improved patient satisfaction'
                ],
                author: 'Dr. Sarah Ahmed, COO'
              }
            ]
          }
        }
      }
    },
    // Add more solutions here...
  };

  const solution = solutions[solutionId];
  if (!solution) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Solution Not Found</h1>
          <Link to="/kit" className="text-blue-600 hover:underline">Back to Demo Kit</Link>
        </div>
      </div>
    );
  }

  const currentPageData = solution.pages[currentPage];
  const Icon = solution.icon;

  const nextPage = () => {
    if (currentPage < 5) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/kit')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'ar' ? 'العودة إلى مجموعة العروض' : 'Back to Demo Kit'}
          </button>
          
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-4 rounded-2xl bg-gradient-to-br ${solution.color}`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">{solution.title}</h1>
              <p className="text-gray-600">{language === 'ar' ? 'صفحة' : 'Page'} {currentPage} {language === 'ar' ? 'من' : 'of'} 5</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="flex gap-2 mb-6">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex-1 h-2 rounded-full transition-all ${
                  page === currentPage
                    ? `bg-gradient-to-r ${solution.color}`
                    : page < currentPage
                    ? 'bg-green-500'
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 min-h-[600px]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{currentPageData.title}</h2>
            <p className="text-gray-600">{currentPageData.subtitle}</p>
          </div>

          {/* Page 1: Overview */}
          {currentPage === 1 && (
            <div className="space-y-8 animate-fade-in">
              <div>
                <p className="text-lg text-gray-700 mb-6">{currentPageData.content.introduction}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  {language === 'ar' ? 'النقاط الرئيسية' : 'Key Points'}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {currentPageData.content.keyPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                      <span className="text-gray-700">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  {language === 'ar' ? 'الفوائد' : 'Benefits'}
                </h3>
                <div className="space-y-3">
                  {currentPageData.content.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 border-l-4 border-blue-500 bg-blue-50 rounded">
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Page 2: Features */}
          {currentPage === 2 && (
            <div className="space-y-6 animate-fade-in">
              {currentPageData.content.features.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <div key={idx} className="flex items-start gap-4 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${solution.color}`}>
                      <FeatureIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Page 3: Use Cases */}
          {currentPage === 3 && (
            <div className="space-y-6 animate-fade-in">
              {currentPageData.content.useCases.map((useCase, idx) => (
                <div key={idx} className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-blue-600" />
                    <h4 className="text-xl font-bold text-gray-800">{useCase.industry}</h4>
                  </div>
                  <p className="text-gray-700 mb-4">{useCase.scenario}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-lg font-semibold">
                    <TrendingUp className="w-5 h-5" />
                    {useCase.results}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Page 4: Implementation */}
          {currentPage === 4 && (
            <div className="space-y-6 animate-fade-in">
              {currentPageData.content.phases.map((phase, idx) => (
                <div key={idx} className="relative pl-8 pb-8 border-l-4 border-blue-500 last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 transform -translate-x-1/2 w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {phase.phase}
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="text-xl font-bold text-gray-800">{phase.title}</h4>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">{phase.duration}</span>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, tidx) => (
                        <li key={tidx} className="flex items-center gap-2 text-gray-700">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Page 5: Success Stories */}
          {currentPage === 5 && (
            <div className="space-y-8 animate-fade-in">
              {currentPageData.content.testimonials.map((testimonial, idx) => (
                <div key={idx} className="p-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-purple-600" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-800">{testimonial.company}</h4>
                      <p className="text-gray-600">{testimonial.industry}</p>
                    </div>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-6 pl-4 border-l-4 border-purple-500">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {testimonial.results.map((result, ridx) => (
                      <div key={ridx} className="p-4 bg-white rounded-xl text-center">
                        <div className="text-2xl font-bold text-purple-600 mb-1">{result}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 text-right">— {testimonial.author}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="w-5 h-5" />
            {language === 'ar' ? 'السابق' : 'Previous'}
          </button>

          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-full font-semibold transition-all ${
                  page === currentPage
                    ? `bg-gradient-to-r ${solution.color} text-white`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {currentPage < 5 ? (
            <button
              onClick={nextPage}
              className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${solution.color} text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
            >
              {language === 'ar' ? 'التالي' : 'Next'}
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <Link
              to="/register-demo"
              className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all`}
            >
              <PlayCircle className="w-5 h-5" />
              {language === 'ar' ? 'ابدأ الآن' : 'Get Started'}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SolutionDetailPage;
