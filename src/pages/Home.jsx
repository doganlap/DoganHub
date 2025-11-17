import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rocket, FileText, TestTube, Package, BarChart3, ArrowRight, CheckCircle, Sparkles, Star, Zap, Shield, TrendingUp, Users, Brain, Bot, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import PoweredByBadge from '../components/PoweredByBadge';

const Home = () => {
  const { language, direction, t } = useLanguage();
  
  const features = [
    {
      icon: Bot,
      title: t('quickDemoAccess'),
      description: t('quickDemoDesc'),
      link: '/access',
      color: 'blue'
    },
    {
      icon: FileText,
      title: t('pocRequest'),
      description: t('pocRequestDesc'),
      link: '/poc',
      color: 'green'
    },
    {
      icon: TestTube,
      title: t('interactiveSandbox'),
      description: t('sandboxDesc'),
      link: '/sandbox',
      color: 'purple'
    },
    {
      icon: Package,
      title: t('demoKitTitle'),
      description: t('demoKitDesc'),
      link: '/kit',
      color: 'orange'
    }
  ];

  const benefits = [
    t('preConfiguredGRC'),
    t('realTimeCompliance'),
    t('riskAssessment'),
    t('evidenceManagement'),
    t('automatedReporting'),
    t('multiFramework')
  ];

  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  return (
    <div className="space-y-16">
      {/* Hero Section - Enhanced */}
      <div className="text-center space-y-8 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className={`inline-flex items-center justify-center relative ${animateIn ? 'animate-slide-up' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-3xl opacity-50 animate-pulse"></div>
          <div className="relative p-8 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl">
            <Bot className="w-20 h-20 text-white animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full border-4 border-white/30 rounded-3xl animate-ping"></div>
            </div>
          </div>
          <Brain className="w-10 h-10 text-pink-400 absolute -top-3 -right-3 animate-bounce" />
          <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -left-2 animate-pulse" />
          <Cpu className="w-7 h-7 text-cyan-400 absolute -bottom-3 -right-3 animate-spin-slow" />
          <Star className="w-6 h-6 text-purple-400 absolute -bottom-2 -left-3 animate-pulse" />
        </div>

        <div className={`space-y-4 ${animateIn ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '200ms' }}>
          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
              {t('welcomeTo')}
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('grcDemoPortal')}
            </span>
          </h1>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse">
              {t('aiPowered')}
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse delay-300">
              20+ {t('solutions')}
            </span>
            <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-bold rounded-full shadow-lg animate-pulse delay-500">
              {t('enterpriseReady')}
            </span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed font-medium">
          {t('heroDescription')}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <Link
            to="/access"
            className={`group inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold rounded-2xl transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
          >
            <Bot className="w-6 h-6 group-hover:animate-pulse" />
            <span>{t('requestDemoAccess')}</span>
            <ArrowRight className={`w-6 h-6 group-hover:translate-x-2 transition-transform ${direction === 'rtl' ? 'rotate-180' : ''}`} />
          </Link>
          <Link
            to="/poc"
            className={`group inline-flex items-center px-10 py-5 backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-700 text-slate-900 dark:text-white text-lg font-bold rounded-2xl border-2 border-slate-300 dark:border-slate-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}
          >
            <FileText className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span>{t('requestPOC')}</span>
          </Link>
        </div>
      </div>

      {/* Features Grid - Enhanced */}
      <div className="grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const gradients = {
            blue: 'from-blue-500 to-cyan-500',
            green: 'from-green-500 to-emerald-500',
            purple: 'from-purple-500 to-pink-500',
            orange: 'from-orange-500 to-red-500'
          };
          
          return (
            <Link
              key={feature.link}
              to={feature.link}
              className="group relative backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-3xl p-8 shadow-xl border-2 border-white/30 dark:border-slate-700/30 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${gradients[feature.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${gradients[feature.color]} rounded-2xl mb-6 shadow-xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {feature.description}
                </p>
                
                <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${gradients[feature.color]} text-white font-bold rounded-xl shadow-lg group-hover:shadow-xl transform ${direction === 'rtl' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} transition-all`}>
                  {t('learnMore')} <ArrowRight className={`w-5 h-5 ${direction === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
                </div>
              </div>
              
              <Sparkles className="absolute top-4 right-4 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
            </Link>
          );
        })}
      </div>

      {/* Benefits Section - Enhanced */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/90 to-blue-50/90 dark:from-slate-800/90 dark:to-blue-900/30 rounded-3xl p-12 shadow-2xl border-2 border-white/30 dark:border-slate-700/30 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-pink-400/20 to-yellow-400/20 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400 animate-pulse" />
              <h2 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('whatsIncluded')}
              </h2>
              <Sparkles className="w-8 h-8 text-yellow-500 animate-bounce" />
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400">{t('everythingYouNeed')}</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="group flex items-start space-x-3 p-5 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-slate-800/70 hover:bg-white dark:hover:bg-slate-700 border border-white/30 dark:border-slate-700/30 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105" style={{ animationDelay: `${index * 50}ms` }}>
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
                <span className="text-slate-700 dark:text-slate-300 font-semibold">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats - Enhanced */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: t('demoScenarios'), value: '15+', icon: TestTube, color: 'from-blue-500 to-cyan-500' },
          { label: t('frameworks'), value: '10+', icon: Shield, color: 'from-green-500 to-emerald-500' },
          { label: t('testUsers'), value: '50+', icon: Users, color: 'from-purple-500 to-pink-500' },
          { label: t('sampleData'), value: '1000+', icon: Brain, color: 'from-orange-500 to-red-500' }
        ].map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <div key={index} className="group backdrop-blur-xl bg-white/80 dark:bg-slate-800/80 rounded-2xl p-8 text-center shadow-xl border-2 border-white/30 dark:border-slate-700/30 hover:shadow-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              <StatIcon className="w-8 h-8 mx-auto mb-3 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
              <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 animate-count-up`}>
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                {stat.label}
              </div>
              <Zap className="w-4 h-4 text-yellow-400 absolute top-2 right-2 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity" />
            </div>
          );
        })}
      </div>

      {/* Powered By Badge */}
      <PoweredByBadge position="bottom-right" size="md" />
    </div>
  );
};

export default Home;
