import db from '../../lib/database.js';

/**
 * Serverless API: Track Solution Page View
 * POST /api/analytics/track
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
      const { solutionId, solutionName, page, sessionId } = req.body;
      const userAgent = req.headers['user-agent'];

      if (!solutionId || !solutionName || !page) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
        });
      }

      await db.trackSolutionView({
        solutionId,
        solutionName,
        page,
        sessionId,
        userAgent,
      });

      return res.status(201).json({
        success: true,
        message: 'View tracked successfully',
      });
    } catch (error) {
      console.error('Analytics tracking error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to track view',
        error: error.message,
      });
    }
  }

  if (req.method === 'GET') {
    try {
      const { solutionId, startDate, endDate } = req.query;

      if (!solutionId) {
        return res.status(400).json({
          success: false,
          message: 'solutionId is required',
        });
      }

      const analytics = await db.getSolutionAnalytics(parseInt(solutionId), {
        start: startDate,
        end: endDate,
      });

      return res.status(200).json({
        success: true,
        data: analytics,
      });
    } catch (error) {
      console.error('Fetch analytics error:', error);
      return res.status(500).json({
        success: false,
        message: 'Failed to fetch analytics',
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
