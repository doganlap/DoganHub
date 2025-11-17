import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Rocket, FileText, BarChart3, Package, TestTube, Home, Menu, X, Calendar, Clock, Sparkles, Moon, Sun, Zap, Languages, Globe, Brain, Bot, Cpu } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Layout = () => {
  const location = useLocation();
  const { language, direction, toggleLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState('');
  const [showBanner, setShowBanner] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate time until January 1, 2026
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const targetDate = new Date('2026-01-01T00:00:00');
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeRemaining('Available Now');
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      
      if (days > 0) {
        setTimeRemaining(`${days} days, ${hours} hours`);
      } else {
        setTimeRemaining(`${hours} hours`);
      }
    };

    calculateTimeRemaining();
    const interval = setInterval(calculateTimeRemaining, 3600000); // Update every hour

    return () => clearInterval(interval);
  }, []);
  
  const navItems = [
    { path: '/', icon: Home, label: t('home') },
    { path: '/access', icon: Rocket, label: t('requestDemo') },
    { path: '/poc', icon: FileText, label: t('requestPOC') },
    { path: '/dashboard', icon: Home, label: t('dashboard') },
    { path: '/sandbox', icon: TestTube, label: t('sandbox') },
    { path: '/kit', icon: Package, label: t('demoKit') },
    { path: '/reports', icon: BarChart3, label: t('reports') },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 shadow-xl border-b-2 border-blue-500/20' 
          : 'bg-white/60 dark:bg-slate-900/60 shadow-md border-b border-slate-200/50 dark:border-slate-700/50'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative p-2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-300">
                  <Bot className="w-6 h-6 text-white animate-pulse" />
                </div>
                <Brain className="w-4 h-4 text-pink-400 absolute -top-1 -right-1 animate-bounce" />
                <Sparkles className="w-3 h-3 text-yellow-400 absolute -bottom-1 -left-1 animate-pulse" />
              </div>
              <div>
                <h1 className="text-2xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                  {t('grcDemoPortal')}
                </h1>
                <div className="flex items-center gap-2 flex-wrap">
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <Zap className="w-3 h-3 text-yellow-500" />
                    {language === 'en' ? 'Experience our platform' : 'استكشف منصتنا'}
                  </p>
                  <span className="hidden sm:inline text-xs text-slate-400">•</span>
                  <div className="hidden sm:flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full">
                    <Brain className="w-3 h-3 text-purple-600" />
                    <span className="text-xs font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      DoganConsult × Shahin-AI
                    </span>
                  </div>
                </div>
              </div>
            </Link>
            
            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/30 dark:border-slate-700/50"
              >
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 border border-white/30 dark:border-slate-700/50"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4 text-yellow-500" />
                ) : (
                  <Moon className="w-4 h-4 text-blue-600" />
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-3 rounded-xl backdrop-blur-xl bg-white/50 dark:bg-slate-800/50 hover:bg-white/80 dark:hover:bg-slate-700/80 transition-all shadow-lg border border-white/30 dark:border-slate-700/50"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                ) : (
                  <Menu className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* POC Service Activation Banner - Enhanced */}
      {showBanner && location.pathname !== '/poc' && location.pathname !== '/poc-confirm' && (
        <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative z-10">
            <div className="flex items-center justify-between">
              <div className={`flex items-center flex-1 ${direction === 'rtl' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
                <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm animate-bounce">
                  <Calendar className="w-5 h-5 flex-shrink-0" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                  <span className="font-bold text-lg flex items-center gap-2">
                    {language === 'en' 
                      ? 'POC Service Available January 1st, 2026'
                      : 'خدمة إثبات المفهوم متاحة في 1 يناير 2026'}
                  </span>
                  {timeRemaining && (
                    <span className="text-sm font-semibold px-3 py-1 bg-white/20 rounded-full backdrop-blur-sm flex items-center gap-1 w-fit animate-pulse">
                      <Clock className="w-3.5 h-3.5" />
                      <span>⏰ {timeRemaining}</span>
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="ml-4 p-2 hover:bg-white/30 rounded-lg transition-all backdrop-blur-sm flex-shrink-0 transform hover:scale-110 hover:rotate-90 duration-300"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation - Modern Glass Design */}
      <nav className={`backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-b border-white/30 dark:border-slate-700/30 shadow-lg sticky top-[72px] z-40 ${
        mobileMenuOpen ? 'block' : 'hidden md:block'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:space-x-2 py-3 space-y-2 md:space-y-0">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
                'from-indigo-500 to-violet-500',
                'from-yellow-500 to-orange-500',
                'from-teal-500 to-green-500',
              ];
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    group relative flex items-center space-x-2 px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 overflow-hidden
                    ${isActive 
                      ? `bg-gradient-to-r ${colors[index % colors.length]} text-white shadow-xl` 
                      : 'backdrop-blur-xl bg-white/60 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-700 shadow-md hover:shadow-xl border border-white/30 dark:border-slate-700/30'
                    }
                  `}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {isActive && (
                    <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                  )}
                  <Icon className={`w-5 h-5 relative z-10 ${isActive ? 'animate-bounce' : 'group-hover:rotate-12 transition-transform'}`} />
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <Sparkles className="w-4 h-4 text-yellow-300 absolute top-1 right-1 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="animate-fade-in">
          <Outlet />
        </div>
      </main>

      {/* Footer - Modern Design */}
      <footer className="relative backdrop-blur-xl bg-white/80 dark:bg-slate-900/80 border-t-2 border-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  GRC Platform
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Experience the future of Governance, Risk & Compliance with AI-powered solutions.
              </p>
              <div className="flex gap-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-20 hover:opacity-40 transition-opacity cursor-pointer"></div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-500" />
                Quick Links
              </h4>
              <div className="space-y-2">
                {navItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:translate-x-1 transform duration-200"
                  >
                    → {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="text-sm font-black text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-500" />
                {t('getInTouch')}
              </h4>
              <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-center gap-2">
                  <a href="mailto:contact@doganconsult.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">contact@doganconsult.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <a href="mailto:info@doganhub.com" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">info@doganhub.com</a>
                </p>
                <p>+1 (555) 123-4567</p>
                <p className="flex items-center gap-2">
                  <a href="https://www.doganconsult.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">www.doganconsult.com</a>
                </p>
                <p className="flex items-center gap-2">
                  <a href="https://www.doganhub.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">www.doganhub.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Copyright Bar */}
          <div className="pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col md:flex-row items-center gap-3">
                <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-2">
                  © 2024 GRC Platform. 
                  <span className="hidden md:inline">{t('allRightsReserved')}</span>
                </p>
                <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full border border-blue-500/20">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                    ⚡ Powered by
                  </span>
                  <span className="text-xs font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Dogan Engineering
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('privacy')}</a>
                <span>•</span>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('terms')}</a>
                <span>•</span>
                <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{t('cookies')}</a>
              </div>
            </div>
            

          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
