import db from '../../lib/database.js';

/**
 * Serverless API: Create Demo Registration
 * POST /api/demo/register
 */
export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, company, role, phone, interests } = req.body;

      // Validation
      if (!name || !email || !company || !role) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields: name, email, company, role',
        });
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid email format',
        });
      }

      const registration = await db.createDemoRegistration({
        name,
        email,
        company,
        role,
        phone,
        interests: Array.isArray(interests) ? interests : [],
      });

      return res.status(201).json({
        success: true,
        message: 'Demo registration created successfully',
        data: registration,
      });
    } catch (error) {
      console.error('Demo registration error:', error);
      
      // Handle duplicate email
      if (error.message.includes('Unique constraint')) {
        return res.status(409).json({
          success: false,
          message: 'Email already registered',
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Failed to create demo registration',
        error: error.message,
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { status, email } = req.query;
      
      const registrations = await db.getDemoRegistrations({
        status,
        email,
      });

      return res.status(200).json({
        success: true,
        data: registrations,
      });
    } catch (error) {
      console.error('Fetch demo registrations error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch demo registrations',
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
