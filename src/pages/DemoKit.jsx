import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Package, Download, FileText, Video, Book, Code, Shield, AlertTriangle, Lock, FileCheck, Network, Building2, BarChart3, Globe, Cpu, Database, Cloud, Zap, TrendingUp, Users, Settings, CheckCircle, Eye, Brain, Search, Clock, Languages, Sparkles, Star, Play, Filter, Grid3x3, List, Heart, ExternalLink, Rocket, TestTube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PoweredByBadge from '../components/PoweredByBadge';

const DemoKit = () => {
  const { language, direction, t } = useLanguage();
  const [selectedDemo, setSelectedDemo] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    setAnimateStats(true);
  }, []);

  const demoSolutions = [
    {
      id: 1,
      title: 'Risk Assessment & Management',
      description: 'AI-powered risk identification, assessment, and mitigation planning',
      icon: AlertTriangle,
      category: 'Risk Management',
      features: ['Automated risk scoring', 'Heat maps', 'Mitigation tracking'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 2,
      title: 'Compliance Tracking Dashboard',
      description: 'Real-time compliance monitoring across multiple frameworks',
      icon: CheckCircle,
      category: 'Compliance',
      features: ['Multi-framework support', 'Real-time alerts', 'Audit trails'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 3,
      title: 'Policy Management System',
      description: 'Centralized policy creation, approval, and distribution',
      icon: FileText,
      category: 'Governance',
      features: ['Version control', 'Approval workflows', 'Attestation tracking'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 4,
      title: 'Control Testing & Validation',
      description: 'Automated control testing with evidence collection',
      icon: Lock,
      category: 'Controls',
      features: ['Test automation', 'Evidence storage', 'Effectiveness scoring'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 5,
      title: 'Third-Party Risk Management',
      description: 'Vendor risk assessment and continuous monitoring',
      icon: Building2,
      category: 'Risk Management',
      features: ['Vendor profiles', 'Risk scoring', 'Contract tracking'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 6,
      title: 'Incident Response Management',
      description: 'Structured incident handling and root cause analysis',
      icon: Zap,
      category: 'Operations',
      features: ['Incident logging', 'Response playbooks', 'Post-incident reviews'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 7,
      title: 'Audit Management Platform',
      description: 'End-to-end audit planning, execution, and reporting',
      icon: Eye,
      category: 'Compliance',
      features: ['Audit scheduling', 'Finding management', 'Corrective actions'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 8,
      title: 'Framework Mapping Tool',
      description: 'Map controls across ISO 27001, NIST, SOC 2, and more',
      icon: Network,
      category: 'Compliance',
      features: ['10+ frameworks', 'Gap analysis', 'Coverage reports'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 9,
      title: 'Evidence Repository',
      description: 'Centralized storage for compliance evidence and artifacts',
      icon: Database,
      category: 'Compliance',
      features: ['Secure storage', 'Auto-tagging', 'Search & retrieval'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 10,
      title: 'Regulatory Intelligence Engine',
      description: 'AI-driven regulatory change monitoring and impact analysis',
      icon: Brain,
      category: 'Regulatory',
      features: ['Change detection', 'Impact assessment', 'Requirement mapping'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 11,
      title: 'Business Continuity Planning',
      description: 'BCP and disaster recovery planning platform',
      icon: Shield,
      category: 'Operations',
      features: ['BIA templates', 'Recovery strategies', 'Testing schedules'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 12,
      title: 'Asset Management System',
      description: 'Track and manage IT and business assets',
      icon: Package,
      category: 'Operations',
      features: ['Asset inventory', 'Lifecycle tracking', 'Risk classification'],
      llmPowered: false,
      status: 'available'
    },
    {
      id: 13,
      title: 'Training & Awareness Platform',
      description: 'Security awareness training with tracking and reporting',
      icon: Users,
      category: 'Governance',
      features: ['Course library', 'Completion tracking', 'Phishing simulations'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 14,
      title: 'KRI & KPI Dashboard',
      description: 'Key risk and performance indicators monitoring',
      icon: TrendingUp,
      category: 'Analytics',
      features: ['Custom metrics', 'Threshold alerts', 'Trend analysis'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 15,
      title: 'Data Privacy Management',
      description: 'GDPR, CCPA compliance and data subject request handling',
      icon: Lock,
      category: 'Privacy',
      features: ['DSR automation', 'Consent management', 'Data mapping'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 16,
      title: 'Issue & Remediation Tracker',
      description: 'Track findings and remediation activities',
      icon: Settings,
      category: 'Operations',
      features: ['Issue prioritization', 'Assignment workflows', 'SLA tracking'],
      llmPowered: false,
      status: 'available'
    },
    {
      id: 17,
      title: 'Cloud Security Posture',
      description: 'Multi-cloud security assessment and monitoring',
      icon: Cloud,
      category: 'Security',
      features: ['AWS/Azure/GCP', 'Misconfiguration detection', 'Remediation guides'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 18,
      title: 'Compliance Report Generator',
      description: 'Automated compliance reporting with AI insights',
      icon: BarChart3,
      category: 'Reporting',
      features: ['Custom templates', 'Data visualization', 'Executive summaries'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 19,
      title: 'Threat Intelligence Integration',
      description: 'Real-time threat feeds and vulnerability management',
      icon: Globe,
      category: 'Security',
      features: ['Threat feeds', 'CVE tracking', 'Risk contextualization'],
      llmPowered: true,
      status: 'available'
    },
    {
      id: 20,
      title: 'Workflow Automation Engine',
      description: 'Automate GRC workflows with no-code builder',
      icon: Cpu,
      category: 'Automation',
      features: ['Visual builder', 'Integration hub', 'Event triggers'],
      llmPowered: true,
      status: 'available'
    }
  ];

  const categories = [...new Set(demoSolutions.map(demo => demo.category))];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    );
  };

  const filteredSolutions = demoSolutions.filter(demo => {
    const matchesCategory = !selectedDemo || demo.category === selectedDemo;
    const matchesSearch = !searchTerm || 
      demo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      demo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      demo.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryColors = {
    'Risk Management': 'from-red-500 to-orange-500',
    'Compliance': 'from-blue-500 to-cyan-500',
    'Governance': 'from-purple-500 to-pink-500',
    'Controls': 'from-green-500 to-emerald-500',
    'Operations': 'from-yellow-500 to-amber-500',
    'Analytics': 'from-indigo-500 to-violet-500',
    'Privacy': 'from-rose-500 to-pink-500',
    'Security': 'from-cyan-500 to-blue-500',
    'Reporting': 'from-teal-500 to-green-500',
    'Automation': 'from-fuchsia-500 to-purple-500',
    'Regulatory': 'from-orange-500 to-red-500'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 animate-pulse"></div>
            <Package className="w-16 h-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 relative z-10" />
            <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
            {language === 'en' ? 'Demo Kit' : 'مجموعة العروض'}
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            <p className="text-2xl font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {language === 'en' ? '20+ LLM-Powered Solutions' : 'أكثر من 20 حلاً بالذكاء الاصطناعي'}
            </p>
            <Star className="w-6 h-6 text-yellow-400 animate-spin-slow delay-500" />
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center space-x-2 backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-full px-6 py-3 shadow-xl border border-white/30 dark:border-slate-700/50 hover:scale-105 transition-transform">
              <Languages className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent text-slate-900 dark:text-white font-medium focus:outline-none cursor-pointer"
              >
                <option value="en">🌐 English</option>
                <option value="ar">🌍 العربية</option>
              </select>
            </div>
          </div>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {language === 'en' 
              ? '🚀 Explore our comprehensive suite of AI-powered GRC solutions. Each demo showcases advanced capabilities built with cutting-edge LLM technology.'
              : '🚀 استكشف مجموعتنا الشاملة من حلول الحوكمة والمخاطر والامتثال المدعومة بالذكاء الاصطناعي.'}
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder={language === 'en' ? 'Search solutions...' : 'البحث عن الحلول...'}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 border-2 border-transparent focus:border-purple-500 dark:focus:border-purple-400 text-slate-900 dark:text-white placeholder-slate-400 shadow-xl transition-all focus:ring-4 focus:ring-purple-500/20"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* View Mode and Category Filter */}
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* View Mode Toggle */}
            <div className="flex items-center gap-2 backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-full px-2 py-2 shadow-lg">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Grid3x3 className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 justify-center flex-1">
              <button
                onClick={() => setSelectedDemo(null)}
                className={`px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg ${
                  selectedDemo === null
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl'
                    : 'backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:shadow-xl'
                }`}
              >
                <Filter className="w-4 h-4 inline mr-2" />
                {language === 'en' ? 'All' : 'الكل'}
                <span className="ml-2 px-2 py-0.5 bg-white/30 rounded-full text-xs">{demoSolutions.length}</span>
              </button>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedDemo(category)}
                  className={`px-5 py-2.5 rounded-full transition-all transform hover:scale-105 shadow-lg ${
                    selectedDemo === category
                      ? `bg-gradient-to-r ${categoryColors[category] || 'from-blue-600 to-purple-600'} text-white shadow-xl`
                      : 'backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:shadow-xl'
                  }`}
                >
                  {category}
                  <span className="ml-2 px-2 py-0.5 bg-white/30 rounded-full text-xs">
                    {demoSolutions.filter(d => d.category === category).length}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Results count */}
          <div className="text-center text-slate-600 dark:text-slate-400">
            {language === 'en' 
              ? `Showing ${filteredSolutions.length} of ${demoSolutions.length} solutions`
              : `عرض ${filteredSolutions.length} من ${demoSolutions.length} حل`}
          </div>
        </div>

        {/* Demo Solutions Grid/List */}
        <div className={viewMode === 'grid' 
          ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12" 
          : "space-y-4 mb-12 max-w-4xl mx-auto"
        }>
          {filteredSolutions.map((demo, index) => (
            <div
              key={demo.id}
              className={`group relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-white/30 dark:border-slate-700/50 ${
                viewMode === 'grid' 
                  ? 'transform hover:-translate-y-3 hover:scale-105' 
                  : 'flex items-center hover:scale-[1.02]'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
              onMouseEnter={() => setHoveredCard(demo.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[demo.category] || 'from-blue-500 to-purple-500'} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {viewMode === 'grid' ? (
                <div className="p-6 relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${categoryColors[demo.category] || 'from-blue-500 to-purple-500'} shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                      <demo.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                      {demo.llmPowered && (
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-lg animate-pulse">
                          ✨ AI
                        </span>
                      )}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleFavorite(demo.id);
                        }}
                        className="p-2 rounded-full backdrop-blur-xl bg-white/50 dark:bg-slate-700/50 hover:scale-110 transition-transform"
                      >
                        <Heart 
                          className={`w-4 h-4 ${
                            favorites.includes(demo.id) 
                              ? 'fill-red-500 text-red-500' 
                              : 'text-slate-400'
                          } transition-colors`}
                        />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                    {demo.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                    {demo.description}
                  </p>

                  <div className="mb-4">
                    <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${categoryColors[demo.category] || 'from-blue-500 to-purple-500'} text-white shadow-md`}>
                      {demo.category}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    {demo.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-slate-600 dark:text-slate-400 transform translate-x-0 group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <CheckCircle className="w-3.5 h-3.5 text-green-500 mr-2 flex-shrink-0" />
                        <span className="truncate">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-200 dark:border-slate-700 space-y-2">
                    <Link
                      to={`/solution/${demo.id}/story`}
                      className={`flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r ${categoryColors[demo.category] || 'from-blue-600 to-purple-600'} text-white rounded-xl text-sm font-bold shadow-lg hover:shadow-xl transform group-hover:scale-105 transition-all`}
                    >
                      <Book className="w-4 h-4" />
                      {language === 'en' ? 'View 5-Page Story' : 'عرض القصة 5 صفحات'}
                    </Link>
                    <Link
                      to={`/solution/${demo.id}`}
                      className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-white dark:bg-slate-700 text-slate-700 dark:text-white border-2 border-slate-200 dark:border-slate-600 rounded-xl text-xs font-medium hover:bg-slate-50 dark:hover:bg-slate-600 transition-all"
                    >
                      <Play className="w-3.5 h-3.5" />
                      {language === 'en' ? 'Launch Demo' : 'تشغيل العرض'}
                    </Link>
                  </div>
                </div>
              ) : (
                // List View
                <Link to={`/solution/${demo.id}`} className="flex items-center w-full p-6 gap-6 relative z-10">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${categoryColors[demo.category] || 'from-blue-500 to-purple-500'} shadow-lg flex-shrink-0`}>
                    <demo.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
                        {demo.title}
                      </h3>
                      {demo.llmPowered && (
                        <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white ml-4">
                          AI
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                      {demo.description}
                    </p>
                    <div className="flex flex-wrap gap-2 items-center">
                      <span className={`px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${categoryColors[demo.category]} text-white`}>
                        {demo.category}
                      </span>
                      {demo.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="px-3 py-1 text-xs bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className={`px-6 py-3 bg-gradient-to-r ${categoryColors[demo.category]} text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center gap-2`}>
                    <Play className="w-4 h-4" />
                    {language === 'en' ? 'Launch' : 'تشغيل'}
                  </button>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSolutions.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-3xl mb-6">
              <Search className="w-16 h-16 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {language === 'en' ? 'No solutions found' : 'لم يتم العثور على حلول'}
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {language === 'en' 
                ? 'Try adjusting your search or filters'
                : 'حاول تعديل البحث أو الفلاتر'}
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedDemo(null);
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            >
              {language === 'en' ? 'Clear Filters' : 'مسح الفلاتر'}
            </button>
          </div>
        )}

        {/* Animated Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="group backdrop-blur-xl bg-gradient-to-br from-white/80 to-blue-50/80 dark:from-slate-800/80 dark:to-blue-900/30 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-blue-200/50 dark:border-blue-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`text-5xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-3 ${animateStats ? 'animate-count-up' : ''}`}>
              20+
            </div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
              {language === 'en' ? 'Demo Solutions' : 'حلول توضيحية'}
            </div>
            <Sparkles className="w-6 h-6 text-blue-400 absolute top-2 right-2 animate-pulse" />
          </div>
          
          <div className="group backdrop-blur-xl bg-gradient-to-br from-white/80 to-green-50/80 dark:from-slate-800/80 dark:to-green-900/30 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-green-200/50 dark:border-green-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`text-5xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3 ${animateStats ? 'animate-count-up' : ''}`}>
              18
            </div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
              {language === 'en' ? 'AI-Powered' : 'ذكاء اصطناعي'}
            </div>
            <Brain className="w-6 h-6 text-green-400 absolute top-2 right-2 animate-bounce" />
          </div>
          
          <div className="group backdrop-blur-xl bg-gradient-to-br from-white/80 to-purple-50/80 dark:from-slate-800/80 dark:to-purple-900/30 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-purple-200/50 dark:border-purple-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 ${animateStats ? 'animate-count-up' : ''}`}>
              {categories.length}
            </div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
              {language === 'en' ? 'Categories' : 'فئات'}
            </div>
            <Package className="w-6 h-6 text-purple-400 absolute top-2 right-2 animate-spin-slow" />
          </div>
          
          <div className="group backdrop-blur-xl bg-gradient-to-br from-white/80 to-indigo-50/80 dark:from-slate-800/80 dark:to-indigo-900/30 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl hover:scale-110 transition-all duration-500 cursor-pointer border-2 border-indigo-200/50 dark:border-indigo-700/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className={`text-5xl font-black bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-3 ${animateStats ? 'animate-count-up' : ''}`}>
              100%
            </div>
            <div className="text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wide">
              {language === 'en' ? 'Cloud-Based' : 'سحابي'}
            </div>
            <Cloud className="w-6 h-6 text-indigo-400 absolute top-2 right-2 animate-pulse" />
          </div>
        </div>

        {/* Additional Resources - Enhanced */}
        <div className="backdrop-blur-xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-slate-800/90 dark:to-blue-900/30 rounded-3xl shadow-2xl p-10 border-2 border-white/30 dark:border-slate-700/50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
          
          <div className="flex items-start relative z-10">
            <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl shadow-xl mr-6 flex-shrink-0 animate-pulse">
              <Book className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {language === 'en' ? 'Need Help Getting Started?' : 'تحتاج مساعدة للبدء؟'}
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                {language === 'en'
                  ? 'Each demo solution includes comprehensive documentation, video tutorials, and sample datasets. Our support team is available 24/7 to help you explore any solution in detail.'
                  : 'يتضمن كل حل توضيحي وثائق شاملة ودروس فيديو ومجموعات بيانات نموذجية. فريق الدعم متاح على مدار الساعة.'}
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  {language === 'en' ? 'Download Full Kit' : 'تحميل المجموعة'}
                  <Sparkles className="w-4 h-4" />
                </button>
                <button className="group px-8 py-4 backdrop-blur-xl bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-slate-200 dark:border-slate-600 flex items-center gap-3">
                  <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {language === 'en' ? 'Documentation' : 'التوثيق'}
                </button>
                <button className="group px-8 py-4 backdrop-blur-xl bg-white/80 dark:bg-slate-700/80 hover:bg-white dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-slate-200 dark:border-slate-600 flex items-center gap-3">
                  <Video className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  {language === 'en' ? 'Video Tutorials' : 'دروس الفيديو'}
                </button>
                <button className="group px-8 py-4 backdrop-blur-xl bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3">
                  <Code className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                  {language === 'en' ? 'API Access' : 'الوصول للAPI'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions Footer */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Link
            to="/access"
            className="group backdrop-blur-xl bg-gradient-to-br from-green-500/90 to-emerald-500/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center justify-between mb-4">
              <Rocket className="w-10 h-10 text-white" />
              <span className="px-4 py-1 bg-white/30 rounded-full text-white text-sm font-bold">
                {language === 'en' ? 'Popular' : 'شائع'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {language === 'en' ? 'Quick Demo Access' : 'وصول سريع للعرض'}
            </h3>
            <p className="text-white/90 text-sm">
              {language === 'en' ? 'Start exploring in minutes' : 'ابدأ الاستكشاف خلال دقائق'}
            </p>
          </Link>

          <Link
            to="/poc"
            className="group backdrop-blur-xl bg-gradient-to-br from-blue-500/90 to-indigo-500/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="w-10 h-10 text-white" />
              <span className="px-4 py-1 bg-white/30 rounded-full text-white text-sm font-bold">
                {language === 'en' ? 'Custom' : 'مخصص'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {language === 'en' ? 'POC Request' : 'طلب إثبات المفهوم'}
            </h3>
            <p className="text-white/90 text-sm">
              {language === 'en' ? 'Tailored to your needs' : 'مخصص لاحتياجاتك'}
            </p>
          </Link>

          <Link
            to="/sandbox"
            className="group backdrop-blur-xl bg-gradient-to-br from-purple-500/90 to-pink-500/90 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-white/30"
          >
            <div className="flex items-center justify-between mb-4">
              <TestTube className="w-10 h-10 text-white" />
              <span className="px-4 py-1 bg-white/30 rounded-full text-white text-sm font-bold">
                {language === 'en' ? 'Experimental' : 'تجريبي'}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {language === 'en' ? 'Interactive Sandbox' : 'بيئة تفاعلية'}
            </h3>
            <p className="text-white/90 text-sm">
              {language === 'en' ? 'Risk-free experimentation' : 'تجربة آمنة'}
            </p>
          </Link>
        </div>
      </div>

      {/* Powered By Badge */}
      <PoweredByBadge position="bottom-right" size="md" />
    </div>
  );
};

export default DemoKit;
