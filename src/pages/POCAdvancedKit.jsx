import React, { useState } from 'react';
import { Bot, Shield, Database, Cloud, Lock, Network, Server, Cpu, Zap, FileText, CheckCircle, Download, Play, Settings, Search } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link } from 'react-router-dom';

const POCAdvancedKit = () => {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedKit, setSelectedKit] = useState(null);

  const categories = [
    { id: 'all', name: language === 'ar' ? 'الكل' : 'All', icon: Bot },
    { id: 'grc', name: 'GRC Platform', icon: Shield },
    { id: 'security', name: 'Security', icon: Lock },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'data', name: 'Data Management', icon: Database },
    { id: 'cloud', name: 'Cloud Services', icon: Cloud },
    { id: 'network', name: 'Network', icon: Network },
    { id: 'ai', name: 'AI/ML', icon: Cpu },
  ];

  const pocKits = [
    {
      id: 'grc-complete',
      category: 'grc',
      name: 'Complete GRC Platform POC',
      description: language === 'ar' ? 'منصة GRC كاملة مع جميع الوحدات' : 'Full GRC platform with all modules',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      duration: '4 weeks',
      effort: 'High',
      features: [
        'Risk Assessment & Management',
        'Compliance Automation',
        'Policy Management',
        'Audit Management',
        'Incident Response',
        'Vendor Risk Management',
        'Reporting & Dashboards',
        'Integration APIs',
      ],
      deliverables: [
        'Fully configured GRC platform',
        'Sample risk assessments',
        'Compliance templates',
        'Training materials',
        'Integration documentation',
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Azure', 'AI/ML Models'],
      requirements: {
        users: '10-50',
        storage: '100GB',
        bandwidth: '1Gbps',
      },
    },
    {
      id: 'risk-management',
      category: 'grc',
      name: 'Risk Management System POC',
      description: language === 'ar' ? 'نظام إدارة مخاطر متقدم' : 'Advanced risk management system',
      icon: Bot,
      color: 'from-red-500 to-pink-600',
      duration: '2 weeks',
      effort: 'Medium',
      features: [
        'Risk Identification',
        'Risk Assessment Matrix',
        'Risk Treatment Plans',
        'Risk Monitoring',
        'Risk Reporting',
        'Heat Maps',
        'AI-Powered Risk Prediction',
      ],
      deliverables: [
        'Risk management module',
        'Sample risk register',
        'Risk assessment templates',
        'Automated reports',
      ],
      techStack: ['React', 'Python', 'TensorFlow', 'PostgreSQL'],
      requirements: {
        users: '5-25',
        storage: '50GB',
        bandwidth: '500Mbps',
      },
    },
    {
      id: 'compliance-auto',
      category: 'grc',
      name: 'Compliance Automation POC',
      description: language === 'ar' ? 'أتمتة الامتثال الذكية' : 'Intelligent compliance automation',
      icon: CheckCircle,
      color: 'from-green-500 to-teal-600',
      duration: '3 weeks',
      effort: 'Medium',
      features: [
        'Regulatory Framework Mapping',
        'Control Assessment',
        'Evidence Collection',
        'Gap Analysis',
        'Remediation Tracking',
        'Compliance Reporting',
        'Audit Trail',
      ],
      deliverables: [
        'Compliance automation platform',
        'Framework templates (ISO, NIST, etc.)',
        'Control library',
        'Compliance dashboards',
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
      requirements: {
        users: '10-30',
        storage: '75GB',
        bandwidth: '750Mbps',
      },
    },
    {
      id: 'security-orchestration',
      category: 'security',
      name: 'Security Orchestration POC',
      description: language === 'ar' ? 'تنظيم أمني متقدم' : 'Advanced security orchestration',
      icon: Lock,
      color: 'from-purple-500 to-indigo-600',
      duration: '3 weeks',
      effort: 'High',
      features: [
        'Threat Detection',
        'Incident Response Automation',
        'Security Playbooks',
        'SIEM Integration',
        'Threat Intelligence',
        'Vulnerability Management',
        'SOC Automation',
      ],
      deliverables: [
        'SOAR platform',
        'Security playbooks',
        'Integration connectors',
        'Incident response workflows',
      ],
      techStack: ['Python', 'React', 'Elasticsearch', 'Kafka', 'AI/ML'],
      requirements: {
        users: '5-20',
        storage: '200GB',
        bandwidth: '1Gbps',
      },
    },
    {
      id: 'cloud-security',
      category: 'cloud',
      name: 'Cloud Security Posture Management',
      description: language === 'ar' ? 'إدارة وضع أمان السحابة' : 'Cloud security posture management',
      icon: Cloud,
      color: 'from-cyan-500 to-blue-600',
      duration: '2 weeks',
      effort: 'Medium',
      features: [
        'Multi-Cloud Security',
        'Configuration Assessment',
        'Compliance Monitoring',
        'Threat Detection',
        'Identity & Access Management',
        'Data Protection',
        'Cost Optimization',
      ],
      deliverables: [
        'CSPM platform',
        'Cloud security policies',
        'Compliance reports',
        'Remediation guides',
      ],
      techStack: ['React', 'Python', 'AWS', 'Azure', 'GCP APIs'],
      requirements: {
        users: '10-40',
        storage: '100GB',
        bandwidth: '1Gbps',
      },
    },
    {
      id: 'data-governance',
      category: 'data',
      name: 'Data Governance Platform POC',
      description: language === 'ar' ? 'منصة حوكمة البيانات' : 'Data governance platform',
      icon: Database,
      color: 'from-orange-500 to-red-600',
      duration: '3 weeks',
      effort: 'High',
      features: [
        'Data Cataloging',
        'Data Lineage',
        'Data Quality Management',
        'Metadata Management',
        'Data Privacy',
        'Access Control',
        'Data Classification',
      ],
      deliverables: [
        'Data governance platform',
        'Data catalog',
        'Data quality rules',
        'Privacy compliance tools',
      ],
      techStack: ['React', 'Python', 'Apache Atlas', 'PostgreSQL'],
      requirements: {
        users: '15-50',
        storage: '500GB',
        bandwidth: '1Gbps',
      },
    },
    {
      id: 'ai-security',
      category: 'ai',
      name: 'AI-Powered Security Analytics',
      description: language === 'ar' ? 'تحليلات أمنية بالذكاء الاصطناعي' : 'AI-powered security analytics',
      icon: Cpu,
      color: 'from-pink-500 to-purple-600',
      duration: '4 weeks',
      effort: 'High',
      features: [
        'Anomaly Detection',
        'Behavioral Analysis',
        'Predictive Analytics',
        'Threat Hunting',
        'Machine Learning Models',
        'Real-time Monitoring',
        'Automated Response',
      ],
      deliverables: [
        'AI security platform',
        'ML models',
        'Detection algorithms',
        'Analytics dashboards',
      ],
      techStack: ['Python', 'TensorFlow', 'PyTorch', 'Elasticsearch', 'React'],
      requirements: {
        users: '10-30',
        storage: '1TB',
        bandwidth: '2Gbps',
      },
    },
    {
      id: 'network-security',
      category: 'network',
      name: 'Network Security Monitoring',
      description: language === 'ar' ? 'مراقبة أمان الشبكة' : 'Network security monitoring',
      icon: Network,
      color: 'from-teal-500 to-green-600',
      duration: '2 weeks',
      effort: 'Medium',
      features: [
        'Network Traffic Analysis',
        'Intrusion Detection',
        'Firewall Management',
        'VPN Monitoring',
        'DDoS Protection',
        'Network Segmentation',
        'Packet Analysis',
      ],
      deliverables: [
        'Network security platform',
        'Traffic analysis tools',
        'Security policies',
        'Monitoring dashboards',
      ],
      techStack: ['Python', 'Wireshark', 'Suricata', 'Grafana', 'React'],
      requirements: {
        users: '5-20',
        storage: '500GB',
        bandwidth: '10Gbps',
      },
    },
    {
      id: 'policy-management',
      category: 'grc',
      name: 'Policy & Procedure Management',
      description: language === 'ar' ? 'إدارة السياسات والإجراءات' : 'Policy and procedure management',
      icon: FileText,
      color: 'from-indigo-500 to-blue-600',
      duration: '2 weeks',
      effort: 'Low',
      features: [
        'Policy Authoring',
        'Version Control',
        'Approval Workflows',
        'Policy Distribution',
        'Attestation Tracking',
        'Policy Analytics',
        'Template Library',
      ],
      deliverables: [
        'Policy management system',
        'Policy templates',
        'Workflow configurations',
        'Analytics reports',
      ],
      techStack: ['React', 'Node.js', 'MongoDB', 'Azure'],
      requirements: {
        users: '20-100',
        storage: '50GB',
        bandwidth: '500Mbps',
      },
    },
    {
      id: 'infra-monitoring',
      category: 'infrastructure',
      name: 'Infrastructure Monitoring & Management',
      description: language === 'ar' ? 'مراقبة وإدارة البنية التحتية' : 'Infrastructure monitoring & management',
      icon: Server,
      color: 'from-yellow-500 to-orange-600',
      duration: '2 weeks',
      effort: 'Medium',
      features: [
        'Server Monitoring',
        'Application Performance',
        'Resource Optimization',
        'Alerting & Notifications',
        'Capacity Planning',
        'Log Management',
        'Health Checks',
      ],
      deliverables: [
        'Monitoring platform',
        'Custom dashboards',
        'Alert configurations',
        'Performance reports',
      ],
      techStack: ['Prometheus', 'Grafana', 'ELK Stack', 'React'],
      requirements: {
        users: '5-25',
        storage: '1TB',
        bandwidth: '1Gbps',
      },
    },
  ];

  const filteredKits = pocKits.filter(kit => {
    const matchesSearch = kit.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kit.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || kit.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mb-6 animate-pulse">
            <Settings className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            {language === 'ar' ? 'مجموعة POC المتقدمة للـ ICT' : 'Advanced ICT POC Kit'}
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            {language === 'ar'
              ? 'استكشف مجموعتنا الشاملة من حلول POC للحوكمة والمخاطر والامتثال'
              : 'Explore our comprehensive suite of POC solutions for Governance, Risk, and Compliance'}
          </p>
        </div>

        {/* Search & Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={language === 'ar' ? 'ابحث عن POC...' : 'Search for POC kits...'}
              className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all bg-white shadow-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-blue-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* POC Kits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredKits.map((kit) => {
            const Icon = kit.icon;
            return (
              <div
                key={kit.id}
                onClick={() => setSelectedKit(kit)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-6 border border-gray-100 cursor-pointer hover:scale-105"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${kit.color} mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-2">{kit.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{kit.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    {kit.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="w-4 h-4" />
                    {kit.effort}
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                    <Play className="w-4 h-4" />
                    {language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Kit Detail Modal */}
        {selectedKit && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={() => setSelectedKit(null)}>
            <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start gap-4">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${selectedKit.color}`}>
                    {React.createElement(selectedKit.icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{selectedKit.name}</h2>
                    <p className="text-gray-600">{selectedKit.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedKit(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Details Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Features */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    {language === 'ar' ? 'الميزات' : 'Features'}
                  </h3>
                  <ul className="space-y-2">
                    {selectedKit.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Download className="w-5 h-5 text-blue-500" />
                    {language === 'ar' ? 'المخرجات' : 'Deliverables'}
                  </h3>
                  <ul className="space-y-2">
                    {selectedKit.deliverables.map((deliverable, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {language === 'ar' ? 'التقنيات المستخدمة' : 'Technology Stack'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedKit.techStack.map((tech, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {language === 'ar' ? 'المتطلبات' : 'Requirements'}
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">{selectedKit.requirements.users}</div>
                    <div className="text-sm text-gray-600">{language === 'ar' ? 'المستخدمون' : 'Users'}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">{selectedKit.requirements.storage}</div>
                    <div className="text-sm text-gray-600">{language === 'ar' ? 'التخزين' : 'Storage'}</div>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-1">{selectedKit.requirements.bandwidth}</div>
                    <div className="text-sm text-gray-600">{language === 'ar' ? 'النطاق الترددي' : 'Bandwidth'}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <Link to="/register-poc" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    {language === 'ar' ? 'طلب هذا POC' : 'Request This POC'}
                  </button>
                </Link>
                <Link to="/schedule-sandbox" className="flex-1">
                  <button className="w-full bg-white border-2 border-blue-500 text-blue-600 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all flex items-center justify-center gap-2">
                    <Settings className="w-5 h-5" />
                    {language === 'ar' ? 'جدولة Sandbox' : 'Schedule Sandbox'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-3xl shadow-2xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'ar' ? 'هل لديك متطلبات مخصصة؟' : 'Have Custom Requirements?'}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {language === 'ar'
              ? 'تواصل مع فريقنا للحصول على POC مخصص لاحتياجاتك'
              : 'Contact our team for a customized POC tailored to your needs'}
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/register-poc">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg">
                {language === 'ar' ? 'طلب POC مخصص' : 'Request Custom POC'}
              </button>
            </Link>
            <Link to="/schedule-sandbox">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all">
                {language === 'ar' ? 'جدولة استشارة' : 'Schedule Consultation'}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POCAdvancedKit;
