import db from '../../lib/database.js';

/**
 * Serverless API: Create POC Registration
 * POST /api/poc/register
 */
export default async function handler(req, res) {
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
      const {
        name,
        email,
        company,
        role,
        phone,
        department,
        industry,
        companySize,
        pocInterest,
        requirements,
        timeline,
        budget,
      } = req.body;

      // Validation
      if (!name || !email || !company || !role || !phone || !requirements || !timeline) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
        });
      }

      const registration = await db.createPOCRegistration({
        name,
        email,
        company,
        role,
        phone,
        department: department || 'Not specified',
        industry: industry || 'Not specified',
        companySize: companySize || 'Not specified',
        pocInterest: Array.isArray(pocInterest) ? pocInterest : [],
        requirements,
        timeline,
        budget,
      });

      return res.status(201).json({
        success: true,
        message: 'POC registration created successfully',
        data: registration,
      });
    } catch (error) {
      console.error('POC registration error:', error);
      
      if (error.message.includes('Unique constraint')) {
        return res.status(409).json({
          success: false,
          message: 'Email already registered for POC',
        });
      }

      return res.status(500).json({
        success: false,
        message: 'Failed to create POC registration',
        error: error.message,
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { status, industry } = req.query;
      
      const registrations = await db.getPOCRegistrations({
        status,
        industry,
      });

      return res.status(200).json({
        success: true,
        data: registrations,
      });
    } catch (error) {
      console.error('Fetch POC registrations error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch POC registrations',
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
