const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Seed Demo Registrations
  console.log('📝 Seeding Demo Registrations...');
  const demoRegistrations = await Promise.all([
    prisma.demoRegistration.create({
      data: {
        name: 'Ahmed Al-Rashid',
        email: 'ahmed.rashid@acme-corp.com',
        company: 'ACME Corporation',
        role: 'GRC Manager',
        phone: '+966 55 123 4567',
        interests: ['Risk Management', 'Compliance Automation', 'GRC Platform'],
        status: 'approved',
      },
    }),
    prisma.demoRegistration.create({
      data: {
        name: 'Sarah Johnson',
        email: 'sarah.j@techsolutions.com',
        company: 'TechSolutions Inc',
        role: 'Compliance Officer',
        phone: '+1 555 234 5678',
        interests: ['Compliance Automation', 'Audit Automation', 'Reporting & Dashboards'],
        status: 'approved',
      },
    }),
    prisma.demoRegistration.create({
      data: {
        name: 'Mohammed Al-Sayed',
        email: 'm.alsayed@bank-systems.sa',
        company: 'Bank Systems Saudi',
        role: 'Chief Information Security Officer',
        phone: '+966 50 987 6543',
        interests: ['Security Orchestration', 'Risk Management', 'Vendor Risk'],
        status: 'contacted',
      },
    }),
    prisma.demoRegistration.create({
      data: {
        name: 'Emily Chen',
        email: 'emily.chen@global-finance.com',
        company: 'Global Finance Group',
        role: 'Risk Analyst',
        phone: '+44 20 7123 4567',
        interests: ['Risk Management', 'Policy Management', 'AI-Powered Analytics'],
        status: 'pending',
      },
    }),
    prisma.demoRegistration.create({
      data: {
        name: 'Khalid Ibrahim',
        email: 'k.ibrahim@enterprise-sa.com',
        company: 'Enterprise Solutions KSA',
        role: 'IT Director',
        phone: '+966 54 456 7890',
        interests: ['GRC Platform', 'Security Orchestration', 'Incident Response'],
        status: 'approved',
      },
    }),
  ]);
  console.log(`✅ Created ${demoRegistrations.length} demo registrations`);

  // Seed POC Registrations
  console.log('🎯 Seeding POC Registrations...');
  const pocRegistrations = await Promise.all([
    prisma.pOCRegistration.create({
      data: {
        name: 'Fatima Al-Mansour',
        email: 'fatima.mansour@gov-entity.gov.sa',
        company: 'Saudi Government Entity',
        role: 'Director of Compliance',
        phone: '+966 50 111 2222',
        department: 'Compliance & Risk',
        industry: 'Government',
        companySize: '1000+',
        pocInterest: ['Complete GRC Platform', 'Compliance Automation', 'Policy Management'],
        requirements: 'Need a comprehensive GRC solution for government compliance requirements including local regulations and international standards (ISO 27001, NIST).',
        timeline: '6-12 months',
        budget: '$250K+',
        status: 'in-review',
      },
    }),
    prisma.pOCRegistration.create({
      data: {
        name: 'David Martinez',
        email: 'd.martinez@healthcare-systems.com',
        company: 'Healthcare Systems International',
        role: 'VP of Information Security',
        phone: '+1 555 789 0123',
        department: 'Information Security',
        industry: 'Healthcare',
        companySize: '201-1000',
        pocInterest: ['Risk Management System', 'Security Orchestration', 'Audit Management'],
        requirements: 'Healthcare compliance (HIPAA, HITECH) with focus on patient data protection, risk assessment, and continuous monitoring.',
        timeline: '3-6 months',
        budget: '$100K - $250K',
        status: 'approved',
      },
    }),
    prisma.pOCRegistration.create({
      data: {
        name: 'Omar Al-Zahrani',
        email: 'omar.z@financial-services.sa',
        company: 'Al-Zahrani Financial Services',
        role: 'Head of Risk Management',
        phone: '+966 55 333 4444',
        department: 'Risk Management',
        industry: 'Financial Services',
        companySize: '51-200',
        pocInterest: ['Risk Management System', 'Vendor Risk Management', 'Reporting & Analytics'],
        requirements: 'Financial sector risk management with SAMA compliance, third-party risk assessment, and executive reporting.',
        timeline: '3-6 months',
        budget: '$50K - $100K',
        status: 'pending',
      },
    }),
    prisma.pOCRegistration.create({
      data: {
        name: 'Lisa Wang',
        email: 'lisa.wang@tech-innovations.com',
        company: 'Tech Innovations Corp',
        role: 'Chief Technology Officer',
        phone: '+65 9123 4567',
        department: 'Technology',
        industry: 'Technology',
        companySize: '201-1000',
        pocInterest: ['Complete GRC Platform', 'Security Orchestration', 'Integration Services'],
        requirements: 'Modern GRC platform with API-first architecture, cloud-native deployment, and integration with existing tech stack (AWS, Azure, Okta).',
        timeline: '1-3 months',
        budget: '$100K - $250K',
        status: 'in-review',
      },
    }),
    prisma.pOCRegistration.create({
      data: {
        name: 'Abdullah Al-Harbi',
        email: 'a.alharbi@energy-sector.sa',
        company: 'Saudi Energy Solutions',
        role: 'Compliance Manager',
        phone: '+966 56 777 8888',
        department: 'Compliance',
        industry: 'Energy',
        companySize: '1000+',
        pocInterest: ['Compliance Automation', 'Policy Management', 'Audit Management'],
        requirements: 'Energy sector compliance management including environmental regulations, safety standards, and operational risk management.',
        timeline: '6-12 months',
        budget: '$250K+',
        status: 'approved',
      },
    }),
  ]);
  console.log(`✅ Created ${pocRegistrations.length} POC registrations`);

  // Seed Sandbox Bookings
  console.log('📅 Seeding Sandbox Bookings...');
  const today = new Date();
  const sandboxBookings = await Promise.all([
    prisma.sandboxBooking.create({
      data: {
        name: 'John Smith',
        email: 'john.smith@example.com',
        sandboxType: 'grc-full',
        date: new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        time: '10:00 AM',
        purpose: 'Testing complete GRC platform features for enterprise deployment',
        status: 'confirmed',
        accessLink: 'https://sandbox.doganhub.com/session/abc123',
      },
    }),
    prisma.sandboxBooking.create({
      data: {
        name: 'Noura Al-Qahtani',
        email: 'noura.q@company.sa',
        sandboxType: 'risk-management',
        date: new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        time: '02:00 PM',
        purpose: 'Evaluating risk assessment and management capabilities',
        status: 'confirmed',
        accessLink: 'https://sandbox.doganhub.com/session/def456',
      },
    }),
    prisma.sandboxBooking.create({
      data: {
        name: 'Michael Brown',
        email: 'mbrown@corp-solutions.com',
        sandboxType: 'compliance',
        date: new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        time: '11:00 AM',
        purpose: 'Testing compliance automation for ISO 27001 certification',
        status: 'confirmed',
        accessLink: 'https://sandbox.doganhub.com/session/ghi789',
      },
    }),
    prisma.sandboxBooking.create({
      data: {
        name: 'Aisha Mohammed',
        email: 'aisha.m@tech-enterprise.ae',
        sandboxType: 'custom',
        date: new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        time: '09:00 AM',
        purpose: 'Custom configuration for multi-tenant GRC deployment',
        status: 'confirmed',
      },
    }),
  ]);
  console.log(`✅ Created ${sandboxBookings.length} sandbox bookings`);

  // Seed Solution Views (Analytics)
  console.log('📊 Seeding Solution Views Analytics...');
  const solutionViews = [];
  for (let solutionId = 1; solutionId <= 20; solutionId++) {
    for (let page = 1; page <= 5; page++) {
      const views = Math.floor(Math.random() * 50) + 10; // Random 10-60 views
      for (let i = 0; i < views; i++) {
        solutionViews.push({
          solutionId,
          solutionName: `Solution ${solutionId}`,
          page,
          sessionId: `session_${Math.random().toString(36).substr(2, 9)}`,
          userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        });
      }
    }
  }
  await prisma.solutionView.createMany({ data: solutionViews });
  console.log(`✅ Created ${solutionViews.length} solution view records`);

  // Seed Contact Submissions
  console.log('📧 Seeding Contact Submissions...');
  const contactSubmissions = await Promise.all([
    prisma.contactSubmission.create({
      data: {
        name: 'Hassan Al-Mutairi',
        email: 'hassan.m@consulting.sa',
        subject: 'Partnership Inquiry',
        message: 'Interested in becoming a reseller partner for Shahin-AI solutions in the Middle East region.',
        status: 'in-progress',
      },
    }),
    prisma.contactSubmission.create({
      data: {
        name: 'Jennifer Lee',
        email: 'j.lee@enterprise.com',
        subject: 'Technical Support',
        message: 'Need assistance with API integration for our existing compliance system.',
        status: 'resolved',
      },
    }),
    prisma.contactSubmission.create({
      data: {
        name: 'Youssef Ibrahim',
        email: 'youssef.i@startup.sa',
        subject: 'Pricing Information',
        message: 'Request detailed pricing for startup package with 10-25 users.',
        status: 'new',
      },
    }),
  ]);
  console.log(`✅ Created ${contactSubmissions.length} contact submissions`);

  // Summary Statistics
  console.log('\n📈 Database Seeding Summary:');
  console.log('═══════════════════════════════════════');
  const stats = {
    demoRegistrations: await prisma.demoRegistration.count(),
    pocRegistrations: await prisma.pOCRegistration.count(),
    sandboxBookings: await prisma.sandboxBooking.count(),
    solutionViews: await prisma.solutionView.count(),
    contactSubmissions: await prisma.contactSubmission.count(),
  };
  
  console.log(`✅ Demo Registrations: ${stats.demoRegistrations}`);
  console.log(`✅ POC Registrations: ${stats.pocRegistrations}`);
  console.log(`✅ Sandbox Bookings: ${stats.sandboxBookings}`);
  console.log(`✅ Solution Views: ${stats.solutionViews}`);
  console.log(`✅ Contact Submissions: ${stats.contactSubmissions}`);
  console.log('═══════════════════════════════════════');
  console.log('🎉 Database seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
