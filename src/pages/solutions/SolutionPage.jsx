import React from 'react';
import { Shield, AlertTriangle, Lock, FileCheck, Network, Building2, BarChart3, Globe, Cpu, Database, Cloud, Zap, TrendingUp, Users, Settings, CheckCircle, Eye, Brain, FileText, Package } from 'lucide-react';
import SolutionTemplate from './SolutionTemplate';

const SolutionPage = () => {
  const demoSolutions = [
    {
      id: 1,
      title: 'Risk Assessment & Management',
      description: 'AI-powered risk identification, assessment, and mitigation planning',
      icon: AlertTriangle,
      category: 'Risk Management',
      features: ['Automated risk scoring', 'Heat maps', 'Mitigation tracking', 'Risk register management', 'Trend analysis', 'Executive dashboards'],
      llmPowered: true
    },
    {
      id: 2,
      title: 'Compliance Tracking Dashboard',
      description: 'Real-time compliance monitoring across multiple frameworks',
      icon: CheckCircle,
      category: 'Compliance',
      features: ['Multi-framework support', 'Real-time alerts', 'Audit trails', 'Compliance scoring', 'Gap analysis', 'Automated reporting'],
      llmPowered: true
    },
    {
      id: 3,
      title: 'Policy Management System',
      description: 'Centralized policy creation, approval, and distribution',
      icon: FileText,
      category: 'Governance',
      features: ['Version control', 'Approval workflows', 'Attestation tracking', 'Policy library', 'Change management', 'Distribution tracking'],
      llmPowered: true
    },
    {
      id: 4,
      title: 'Control Testing & Validation',
      description: 'Automated control testing with evidence collection',
      icon: Lock,
      category: 'Controls',
      features: ['Test automation', 'Evidence storage', 'Effectiveness scoring', 'Remediation tracking', 'Control libraries', 'Testing schedules'],
      llmPowered: true
    },
    {
      id: 5,
      title: 'Third-Party Risk Management',
      description: 'Vendor risk assessment and continuous monitoring',
      icon: Building2,
      category: 'Risk Management',
      features: ['Vendor profiles', 'Risk scoring', 'Contract tracking', 'Performance monitoring', 'Due diligence', 'Vendor onboarding'],
      llmPowered: true
    },
    {
      id: 6,
      title: 'Incident Response Management',
      description: 'Structured incident handling and root cause analysis',
      icon: Zap,
      category: 'Operations',
      features: ['Incident logging', 'Response playbooks', 'Post-incident reviews', 'Escalation workflows', 'Timeline tracking', 'Lessons learned'],
      llmPowered: true
    },
    {
      id: 7,
      title: 'Audit Management Platform',
      description: 'End-to-end audit planning, execution, and reporting',
      icon: Eye,
      category: 'Compliance',
      features: ['Audit scheduling', 'Finding management', 'Corrective actions', 'Audit programs', 'Workpaper management', 'Follow-up tracking'],
      llmPowered: true
    },
    {
      id: 8,
      title: 'Framework Mapping Tool',
      description: 'Map controls across ISO 27001, NIST, SOC 2, and more',
      icon: Network,
      category: 'Compliance',
      features: ['10+ frameworks', 'Gap analysis', 'Coverage reports', 'Control mapping', 'Requirement tracking', 'Certification support'],
      llmPowered: true
    },
    {
      id: 9,
      title: 'Evidence Repository',
      description: 'Centralized storage for compliance evidence and artifacts',
      icon: Database,
      category: 'Compliance',
      features: ['Secure storage', 'Auto-tagging', 'Search & retrieval', 'Version control', 'Access management', 'Retention policies'],
      llmPowered: true
    },
    {
      id: 10,
      title: 'Regulatory Intelligence Engine',
      description: 'AI-driven regulatory change monitoring and impact analysis',
      icon: Brain,
      category: 'Regulatory',
      features: ['Change detection', 'Impact assessment', 'Requirement mapping', 'Compliance calendar', 'Regulatory updates', 'Jurisdiction tracking'],
      llmPowered: true
    },
    {
      id: 11,
      title: 'Business Continuity Planning',
      description: 'BCP and disaster recovery planning platform',
      icon: Shield,
      category: 'Operations',
      features: ['BIA templates', 'Recovery strategies', 'Testing schedules', 'Contact management', 'Resource allocation', 'Crisis communication'],
      llmPowered: true
    },
    {
      id: 12,
      title: 'Asset Management System',
      description: 'Track and manage IT and business assets',
      icon: Package,
      category: 'Operations',
      features: ['Asset inventory', 'Lifecycle tracking', 'Risk classification', 'Owner assignment', 'Depreciation tracking', 'Integration ready'],
      llmPowered: false
    },
    {
      id: 13,
      title: 'Training & Awareness Platform',
      description: 'Security awareness training with tracking and reporting',
      icon: Users,
      category: 'Governance',
      features: ['Course library', 'Completion tracking', 'Phishing simulations', 'Certificate management', 'Custom content', 'Progress reports'],
      llmPowered: true
    },
    {
      id: 14,
      title: 'KRI & KPI Dashboard',
      description: 'Key risk and performance indicators monitoring',
      icon: TrendingUp,
      category: 'Analytics',
      features: ['Custom metrics', 'Threshold alerts', 'Trend analysis', 'Predictive insights', 'Executive views', 'Data visualization'],
      llmPowered: true
    },
    {
      id: 15,
      title: 'Data Privacy Management',
      description: 'GDPR, CCPA compliance and data subject request handling',
      icon: Lock,
      category: 'Privacy',
      features: ['DSR automation', 'Consent management', 'Data mapping', 'Privacy assessments', 'Breach management', 'Cookie compliance'],
      llmPowered: true
    },
    {
      id: 16,
      title: 'Issue & Remediation Tracker',
      description: 'Track findings and remediation activities',
      icon: Settings,
      category: 'Operations',
      features: ['Issue prioritization', 'Assignment workflows', 'SLA tracking', 'Status reporting', 'Escalation rules', 'Integration support'],
      llmPowered: false
    },
    {
      id: 17,
      title: 'Cloud Security Posture',
      description: 'Multi-cloud security assessment and monitoring',
      icon: Cloud,
      category: 'Security',
      features: ['AWS/Azure/GCP', 'Misconfiguration detection', 'Remediation guides', 'Compliance checking', 'Cost optimization', 'Security scoring'],
      llmPowered: true
    },
    {
      id: 18,
      title: 'Compliance Report Generator',
      description: 'Automated compliance reporting with AI insights',
      icon: BarChart3,
      category: 'Reporting',
      features: ['Custom templates', 'Data visualization', 'Executive summaries', 'Scheduled reports', 'Multi-format export', 'Trend analysis'],
      llmPowered: true
    },
    {
      id: 19,
      title: 'Threat Intelligence Integration',
      description: 'Real-time threat feeds and vulnerability management',
      icon: Globe,
      category: 'Security',
      features: ['Threat feeds', 'CVE tracking', 'Risk contextualization', 'Patch management', 'Intelligence sharing', 'Alert correlation'],
      llmPowered: true
    },
    {
      id: 20,
      title: 'Workflow Automation Engine',
      description: 'Automate GRC workflows with no-code builder',
      icon: Cpu,
      category: 'Automation',
      features: ['Visual builder', 'Integration hub', 'Event triggers', 'Custom logic', 'API connectivity', 'Workflow templates'],
      llmPowered: true
    }
  ];

  return <SolutionTemplate solutions={demoSolutions} />;
};

export default SolutionPage;
