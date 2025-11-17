import db from '../../lib/database.js';

/**
 * Serverless API: Create Contact Submission
 * POST /api/contact/submit
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
      const { name, email, subject, message } = req.body;

      if (!name || !email || !subject || !message) {
        return res.status(400).json({
          success: false,
          message: 'All fields are required',
        });
      }

      const submission = await db.createContactSubmission({
        name,
        email,
        subject,
        message,
      });

      return res.status(201).json({
        success: true,
        message: 'Contact submission received',
        data: submission,
      });
    } catch (error) {
      console.error('Contact submission error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to submit contact form',
        error: error.message,
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { status } = req.query;
      
      const submissions = await db.getContactSubmissions({ status });

      return res.status(200).json({
        success: true,
        data: submissions,
      });
    } catch (error) {
      console.error('Fetch contact submissions error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch contact submissions',
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
