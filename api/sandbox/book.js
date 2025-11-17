import db from '../../lib/database.js';

/**
 * Serverless API: Create Sandbox Booking
 * POST /api/sandbox/book
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { name, email, sandboxType, date, time, purpose } = req.body;

      if (!name || !email || !sandboxType || !date || !time) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
        });
      }

      // Generate access link
      const accessLink = `https://sandbox.doganhub.com/${sandboxType}/${Date.now()}`;

      const booking = await db.createSandboxBooking({
        name,
        email,
        sandboxType,
        date,
        time,
        purpose,
        accessLink,
      });

      return res.status(201).json({
        success: true,
        message: 'Sandbox booking created successfully',
        data: booking,
      });
    } catch (error) {
      console.error('Sandbox booking error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to create sandbox booking',
        error: error.message,
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { status, email, date } = req.query;
      
      const bookings = await db.getSandboxBookings({
        status,
        email,
        date,
      });

      return res.status(200).json({
        success: true,
        data: bookings,
      });
    } catch (error) {
      console.error('Fetch sandbox bookings error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch sandbox bookings',
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
