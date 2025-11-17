import { PrismaClient } from '@prisma/client';

/**
 * Prisma Client Singleton for Serverless
 * Prevents multiple instances in serverless environments
 */

const globalForPrisma = global;

// Serverless-optimized Prisma client configuration
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL,
      },
    },
  });
};

// Use singleton pattern to prevent multiple instances
const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;

/**
 * Helper function to handle Prisma disconnection
 * Important for serverless environments
 */
export async function disconnect() {
  await prisma.$disconnect();
}

/**
 * Health check for database connection
 */
export async function healthCheck() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return { status: 'healthy', timestamp: new Date() };
  } catch (error) {
    return { status: 'unhealthy', error: error.message, timestamp: new Date() };
  }
}
