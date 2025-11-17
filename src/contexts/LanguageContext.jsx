import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const translations = {
  en: {
    // Navigation
    home: 'Home',
    requestDemo: 'Request Demo',
    requestPOC: 'Request POC',
    dashboard: 'Dashboard',
    sandbox: 'Sandbox',
    demoKit: 'Demo Kit',
    reports: 'Reports',
    
    // Hero
    welcomeTo: 'Welcome to',
    grcDemoPortal: 'GRC Demo Portal',
    aiPowered: 'AI-Powered',
    solutions: 'Solutions',
    enterpriseReady: 'Enterprise Ready',
    heroDescription: 'Experience our comprehensive Governance, Risk, and Compliance platform through interactive demos and proof of concept environments',
    requestDemoAccess: 'Request Demo Access',
    
    // Features
    quickDemoAccess: 'Quick Demo Access',
    quickDemoDesc: 'Get instant access to our demo environment with pre-configured scenarios',
    pocRequest: 'POC Request',
    pocRequestDesc: 'Request a proof of concept tailored to your organization\'s needs',
    interactiveSandbox: 'Interactive Sandbox',
    sandboxDesc: 'Experiment with features in our risk-free sandbox environment',
    demoKitTitle: 'Demo Kit',
    demoKitDesc: 'Access comprehensive resources, guides, and documentation',
    learnMore: 'Learn more',
    
    // Benefits
    whatsIncluded: 'What\'s Included in the Demo',
    everythingYouNeed: 'Everything you need to experience our platform',
    preConfiguredGRC: 'Pre-configured GRC scenarios',
    realTimeCompliance: 'Real-time compliance tracking',
    riskAssessment: 'Risk assessment templates',
    evidenceManagement: 'Evidence management system',
    automatedReporting: 'Automated reporting',
    multiFramework: 'Multi-framework support',
    
    // Stats
    demoScenarios: 'Demo Scenarios',
    frameworks: 'Frameworks',
    testUsers: 'Test Users',
    sampleData: 'Sample Data',
    
    // Footer
    allRightsReserved: 'All rights reserved',
    quickLinks: 'Quick Links',
    getInTouch: 'Get in Touch',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    poweredBy: 'Powered by',
    enterpriseAI: 'Enterprise AI Solutions',
    intelligentGov: 'Intelligent Governance',
    
    // Demo Kit
    demoKitHeader: 'Demo Kit',
    llmPoweredSolutions: '20+ LLM-Powered Solutions',
    exploreComprehensive: 'Explore our comprehensive suite of AI-powered GRC solutions. Each demo showcases advanced capabilities built with cutting-edge LLM technology.',
    searchSolutions: 'Search solutions...',
    all: 'All',
    showingResults: 'Showing',
    of: 'of',
    launchDemo: 'Launch Demo',
    launch: 'Launch',
    noSolutionsFound: 'No solutions found',
    tryAdjusting: 'Try adjusting your search or filters',
    clearFilters: 'Clear Filters',
    cloudBased: 'Cloud-Based',
    needHelp: 'Need Help Getting Started?',
    needHelpDesc: 'Each demo solution includes comprehensive documentation, video tutorials, and sample datasets. Our support team is available 24/7 to help you explore any solution in detail.',
    downloadFullKit: 'Download Full Kit',
    documentation: 'Documentation',
    videoTutorials: 'Video Tutorials',
    apiAccess: 'API Access',
    popular: 'Popular',
    custom: 'Custom',
    experimental: 'Experimental',
    startExploring: 'Start exploring in minutes',
    tailoredToNeeds: 'Tailored to your needs',
    riskFree: 'Risk-free experimentation',
  },
  ar: {
    // Navigation
    home: 'الرئيسية',
    requestDemo: 'طلب عرض توضيحي',
    requestPOC: 'طلب إثبات المفهوم',
    dashboard: 'لوحة التحكم',
    sandbox: 'بيئة التجربة',
    demoKit: 'مجموعة العروض',
    reports: 'التقارير',
    
    // Hero
    welcomeTo: 'مرحباً بك في',
    grcDemoPortal: 'بوابة العروض التوضيحية للحوكمة',
    aiPowered: 'مدعوم بالذكاء الاصطناعي',
    solutions: 'حل',
    enterpriseReady: 'جاهز للمؤسسات',
    heroDescription: 'استكشف منصتنا الشاملة للحوكمة والمخاطر والامتثال من خلال العروض التوضيحية التفاعلية وبيئات إثبات المفهوم',
    requestDemoAccess: 'طلب الوصول للعرض التوضيحي',
    
    // Features
    quickDemoAccess: 'وصول سريع للعرض التوضيحي',
    quickDemoDesc: 'احصل على وصول فوري إلى بيئة العرض التوضيحي مع سيناريوهات مُعدة مسبقاً',
    pocRequest: 'طلب إثبات المفهوم',
    pocRequestDesc: 'اطلب إثبات مفهوم مخصص لاحتياجات مؤسستك',
    interactiveSandbox: 'بيئة تفاعلية',
    sandboxDesc: 'جرب الميزات في بيئة آمنة خالية من المخاطر',
    demoKitTitle: 'مجموعة العروض',
    demoKitDesc: 'الوصول إلى الموارد الشاملة والأدلة والوثائق',
    learnMore: 'اعرف المزيد',
    
    // Benefits
    whatsIncluded: 'ما المتضمن في العرض التوضيحي',
    everythingYouNeed: 'كل ما تحتاجه لتجربة منصتنا',
    preConfiguredGRC: 'سيناريوهات حوكمة مُعدة مسبقاً',
    realTimeCompliance: 'تتبع الامتثال في الوقت الفعلي',
    riskAssessment: 'قوالب تقييم المخاطر',
    evidenceManagement: 'نظام إدارة الأدلة',
    automatedReporting: 'التقارير الآلية',
    multiFramework: 'دعم أطر متعددة',
    
    // Stats
    demoScenarios: 'سيناريوهات العرض',
    frameworks: 'الأطر',
    testUsers: 'المستخدمون التجريبيون',
    sampleData: 'البيانات النموذجية',
    
    // Footer
    allRightsReserved: 'جميع الحقوق محفوظة',
    quickLinks: 'روابط سريعة',
    getInTouch: 'تواصل معنا',
    privacy: 'الخصوصية',
    terms: 'الشروط',
    cookies: 'ملفات تعريف الارتباط',
    
    // Demo Kit
    demoKitHeader: 'مجموعة العروض',
    llmPoweredSolutions: 'أكثر من 20 حلاً بالذكاء الاصطناعي',
    exploreComprehensive: 'استكشف مجموعتنا الشاملة من حلول الحوكمة والمخاطر والامتثال المدعومة بالذكاء الاصطناعي. يعرض كل عرض توضيحي قدرات متقدمة.',
    searchSolutions: 'البحث عن الحلول...',
    all: 'الكل',
    showingResults: 'عرض',
    of: 'من',
    launchDemo: 'تشغيل العرض',
    launch: 'تشغيل',
    noSolutionsFound: 'لم يتم العثور على حلول',
    tryAdjusting: 'حاول تعديل البحث أو الفلاتر',
    clearFilters: 'مسح الفلاتر',
    cloudBased: 'سحابي',
    needHelp: 'تحتاج مساعدة للبدء؟',
    needHelpDesc: 'يتضمن كل حل توضيحي وثائق شاملة ودروس فيديو ومجموعات بيانات نموذجية. فريق الدعم متاح على مدار الساعة.',
    downloadFullKit: 'تحميل المجموعة الكاملة',
    documentation: 'التوثيق',
    videoTutorials: 'دروس الفيديو',
    apiAccess: 'الوصول للAPI',
    popular: 'شائع',
    custom: 'مخصص',
    experimental: 'تجريبي',
    startExploring: 'ابدأ الاستكشاف خلال دقائق',
    tailoredToNeeds: 'مخصص لاحتياجاتك',
    riskFree: 'تجربة آمنة',
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar'); // Default to Arabic
  const [direction, setDirection] = useState('rtl');

  useEffect(() => {
    // Set document direction and lang attribute
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Apply RTL-specific styles
    if (direction === 'rtl') {
      document.body.style.fontFamily = "'Cairo', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    } else {
      document.body.style.fontFamily = "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    }
  }, [direction, language]);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    setDirection(newLang === 'ar' ? 'rtl' : 'ltr');
  };

  const t = (key) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
