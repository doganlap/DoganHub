import prisma from './prisma.js';

/**
 * Serverless API Service Layer
 * Handles all database operations with proper error handling
 */

export class DatabaseService {
  
  // ============================================
  // DEMO REGISTRATIONS
  // ============================================
  
  async createDemoRegistration(data) {
    try {
      return await prisma.demoRegistration.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          phone: data.phone,
          interests: data.interests || [],
          status: 'pending',
        },
      });
    } catch (error) {
      throw new Error(`Failed to create demo registration: ${error.message}`);
    }
  }

  async getDemoRegistrations(filters = {}) {
    const where = {};
    if (filters.status) where.status = filters.status;
    if (filters.email) where.email = { contains: filters.email, mode: 'insensitive' };
    
    try {
      return await prisma.demoRegistration.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch demo registrations: ${error.message}`);
    }
  }

  async getDemoRegistrationById(id) {
    try {
      return await prisma.demoRegistration.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to fetch demo registration: ${error.message}`);
    }
  }

  async updateDemoRegistration(id, data) {
    try {
      return await prisma.demoRegistration.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update demo registration: ${error.message}`);
    }
  }

  // ============================================
  // POC REGISTRATIONS
  // ============================================
  
  async createPOCRegistration(data) {
    try {
      return await prisma.pOCRegistration.create({
        data: {
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          phone: data.phone,
          department: data.department,
          industry: data.industry,
          companySize: data.companySize,
          pocInterest: data.pocInterest || [],
          requirements: data.requirements,
          timeline: data.timeline,
          budget: data.budget,
          status: 'pending',
        },
      });
    } catch (error) {
      throw new Error(`Failed to create POC registration: ${error.message}`);
    }
  }

  async getPOCRegistrations(filters = {}) {
    const where = {};
    if (filters.status) where.status = filters.status;
    if (filters.industry) where.industry = filters.industry;
    
    try {
      return await prisma.pOCRegistration.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch POC registrations: ${error.message}`);
    }
  }

  async getPOCRegistrationById(id) {
    try {
      return await prisma.pOCRegistration.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to fetch POC registration: ${error.message}`);
    }
  }

  async updatePOCRegistration(id, data) {
    try {
      return await prisma.pOCRegistration.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update POC registration: ${error.message}`);
    }
  }

  // ============================================
  // SANDBOX BOOKINGS
  // ============================================
  
  async createSandboxBooking(data) {
    try {
      return await prisma.sandboxBooking.create({
        data: {
          name: data.name,
          email: data.email,
          sandboxType: data.sandboxType,
          date: data.date,
          time: data.time,
          purpose: data.purpose,
          status: 'confirmed',
          accessLink: data.accessLink,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create sandbox booking: ${error.message}`);
    }
  }

  async getSandboxBookings(filters = {}) {
    const where = {};
    if (filters.status) where.status = filters.status;
    if (filters.email) where.email = filters.email;
    if (filters.date) where.date = filters.date;
    
    try {
      return await prisma.sandboxBooking.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch sandbox bookings: ${error.message}`);
    }
  }

  async getSandboxBookingById(id) {
    try {
      return await prisma.sandboxBooking.findUnique({
        where: { id },
      });
    } catch (error) {
      throw new Error(`Failed to fetch sandbox booking: ${error.message}`);
    }
  }

  async updateSandboxBooking(id, data) {
    try {
      return await prisma.sandboxBooking.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update sandbox booking: ${error.message}`);
    }
  }

  // ============================================
  // CONTACT SUBMISSIONS
  // ============================================
  
  async createContactSubmission(data) {
    try {
      return await prisma.contactSubmission.create({
        data: {
          name: data.name,
          email: data.email,
          subject: data.subject,
          message: data.message,
          status: 'new',
        },
      });
    } catch (error) {
      throw new Error(`Failed to create contact submission: ${error.message}`);
    }
  }

  async getContactSubmissions(filters = {}) {
    const where = {};
    if (filters.status) where.status = filters.status;
    
    try {
      return await prisma.contactSubmission.findMany({
        where,
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new Error(`Failed to fetch contact submissions: ${error.message}`);
    }
  }

  async updateContactSubmission(id, data) {
    try {
      return await prisma.contactSubmission.update({
        where: { id },
        data,
      });
    } catch (error) {
      throw new Error(`Failed to update contact submission: ${error.message}`);
    }
  }

  // ============================================
  // SOLUTION VIEWS (ANALYTICS)
  // ============================================
  
  async trackSolutionView(data) {
    try {
      return await prisma.solutionView.create({
        data: {
          solutionId: data.solutionId,
          solutionName: data.solutionName,
          page: data.page,
          sessionId: data.sessionId,
          userAgent: data.userAgent,
        },
      });
    } catch (error) {
      throw new Error(`Failed to track solution view: ${error.message}`);
    }
  }

  async getSolutionAnalytics(solutionId, dateRange = {}) {
    try {
      const where = { solutionId };
      
      if (dateRange.start || dateRange.end) {
        where.createdAt = {};
        if (dateRange.start) where.createdAt.gte = new Date(dateRange.start);
        if (dateRange.end) where.createdAt.lte = new Date(dateRange.end);
      }

      const [totalViews, pageBreakdown] = await Promise.all([
        prisma.solutionView.count({ where }),
        prisma.solutionView.groupBy({
          by: ['page'],
          where,
          _count: true,
        }),
      ]);

      return {
        totalViews,
        pageBreakdown,
      };
    } catch (error) {
      throw new Error(`Failed to fetch solution analytics: ${error.message}`);
    }
  }

  // ============================================
  // DASHBOARD STATISTICS
  // ============================================
  
  async getDashboardStats() {
    try {
      const [
        totalDemoRegistrations,
        totalPOCRegistrations,
        totalSandboxBookings,
        totalContactSubmissions,
        pendingDemos,
        pendingPOCs,
        recentActivity,
      ] = await Promise.all([
        prisma.demoRegistration.count(),
        prisma.pOCRegistration.count(),
        prisma.sandboxBooking.count(),
        prisma.contactSubmission.count(),
        prisma.demoRegistration.count({ where: { status: 'pending' } }),
        prisma.pOCRegistration.count({ where: { status: 'pending' } }),
        this.getRecentActivity(),
      ]);

      return {
        totalDemoRegistrations,
        totalPOCRegistrations,
        totalSandboxBookings,
        totalContactSubmissions,
        pendingDemos,
        pendingPOCs,
        recentActivity,
      };
    } catch (error) {
      throw new Error(`Failed to fetch dashboard stats: ${error.message}`);
    }
  }

  async getRecentActivity(limit = 10) {
    try {
      const [demos, pocs, bookings, contacts] = await Promise.all([
        prisma.demoRegistration.findMany({
          take: limit,
          orderBy: { createdAt: 'desc' },
          select: { id: true, name: true, email: true, createdAt: true },
        }),
        prisma.pOCRegistration.findMany({
          take: limit,
          orderBy: { createdAt: 'desc' },
          select: { id: true, name: true, email: true, createdAt: true },
        }),
        prisma.sandboxBooking.findMany({
          take: limit,
          orderBy: { createdAt: 'desc' },
          select: { id: true, name: true, email: true, createdAt: true },
        }),
        prisma.contactSubmission.findMany({
          take: limit,
          orderBy: { createdAt: 'desc' },
          select: { id: true, name: true, email: true, createdAt: true },
        }),
      ]);

      return [
        ...demos.map(d => ({ ...d, type: 'demo' })),
        ...pocs.map(p => ({ ...p, type: 'poc' })),
        ...bookings.map(b => ({ ...b, type: 'booking' })),
        ...contacts.map(c => ({ ...c, type: 'contact' })),
      ]
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .slice(0, limit);
    } catch (error) {
      throw new Error(`Failed to fetch recent activity: ${error.message}`);
    }
  }
}

// Export singleton instance
export default new DatabaseService();
