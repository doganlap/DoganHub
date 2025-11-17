import { healthCheck } from '../../lib/prisma.js';

/**
 * Serverless API: Health Check
 * GET /api/health
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const dbHealth = await healthCheck();
      
      const health = {
        status: 'healthy',
        timestamp: new Date(),
        database: dbHealth,
        environment: process.env.NODE_ENV || 'development',
      };

      const statusCode = dbHealth.status === 'healthy' ? 200 : 503;

      return res.status(statusCode).json(health);
    } catch (error) {
      return res.status(503).json({
        status: 'unhealthy',
        timestamp: new Date(),
        error: error.message,
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
