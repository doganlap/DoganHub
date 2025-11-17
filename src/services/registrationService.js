// Registration Service for POC and Demo Access
// This service will connect to your database once you provide the URL

const API_BASE_URL = process.env.VITE_API_URL || 'https://api.doganhub.com';

export const registrationService = {
  // Register for Demo Access
  async registerForDemo(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/register/demo`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          phone: data.phone,
          interests: data.interests,
          registrationType: 'demo',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      return await response.json();
    } catch (error) {
      console.error('Demo registration error:', error);
      // Fallback to local storage if API is not available
      return this.saveToLocalStorage('demo', data);
    }
  },

  // Register for POC Access
  async registerForPOC(data) {
    try {
      const response = await fetch(`${API_BASE_URL}/api/register/poc`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          role: data.role,
          phone: data.phone,
          department: data.department,
          industry: data.industry,
          companySize: data.companySize,
          pocInterest: data.pocInterest,
          requirements: data.requirements,
          timeline: data.timeline,
          budget: data.budget,
          registrationType: 'poc',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('POC registration failed');
      }

      return await response.json();
    } catch (error) {
      console.error('POC registration error:', error);
      // Fallback to local storage if API is not available
      return this.saveToLocalStorage('poc', data);
    }
  },

  // Save to local storage as fallback
  saveToLocalStorage(type, data) {
    const registrations = JSON.parse(localStorage.getItem(`${type}_registrations`) || '[]');
    const registration = {
      id: Date.now(),
      ...data,
      timestamp: new Date().toISOString(),
      status: 'pending',
    };
    registrations.push(registration);
    localStorage.setItem(`${type}_registrations`, JSON.stringify(registrations));
    return { success: true, data: registration, message: 'Registration saved locally' };
  },

  // Get all registrations (for admin view)
  getRegistrations(type) {
    return JSON.parse(localStorage.getItem(`${type}_registrations`) || '[]');
  },

  // Validate email format
  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  // Validate phone format
  validatePhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  },
};
