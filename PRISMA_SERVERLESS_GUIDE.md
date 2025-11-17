# Prisma Serverless Setup Guide

## Overview
This guide covers setting up Prisma for serverless deployment (Vercel) with connection pooling and optimized performance.

## Prerequisites
- Node.js 18+
- PostgreSQL database (Supabase, Neon, or PlanetScale recommended)
- Vercel account (or other serverless platform)

## Quick Start

### 1. Install Dependencies
```bash
cd demo
npm install
```

### 2. Configure Environment
Create `.env` file:
```env
DATABASE_URL="postgresql://user:pass@host:5432/db?pgbouncer=true&connection_limit=1"
DIRECT_URL="postgresql://user:pass@host:5432/db"
```

**For Supabase:**
```env
DATABASE_URL="postgres://postgres.[REF]:[PASS]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgres://postgres.[REF]:[PASS]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
```

**For Neon:**
```env
DATABASE_URL="postgresql://[user]:[pass]@[endpoint].neon.tech/[db]?sslmode=require"
DIRECT_URL="postgresql://[user]:[pass]@[endpoint].neon.tech/[db]?sslmode=require"
```

### 3. Generate Prisma Client
```bash
npm run db:generate
```

### 4. Push Database Schema
```bash
npm run db:push
```

### 5. Seed Database (Optional)
```bash
npm run db:seed
```

### 6. Test Locally
```bash
npm run dev
```

Visit http://localhost:5000

## Serverless Deployment

### Deploy to Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Login**
```bash
vercel login
```

3. **Configure Environment Variables**
In Vercel dashboard or CLI:
```bash
vercel env add DATABASE_URL
vercel env add DIRECT_URL
```

4. **Deploy**
```bash
vercel --prod
```

## Database Setup Options

### Option 1: Supabase (Recommended)

**Advantages:**
- Free tier with 500MB storage
- Built-in connection pooling (PgBouncer)
- Edge functions support
- Real-time subscriptions

**Setup:**
1. Create project at https://supabase.com
2. Get connection strings from Settings > Database
3. Use **Transaction** mode for pooled connection
4. Use **Session** mode for direct connection

```env
# Pooled (for serverless)
DATABASE_URL="postgres://postgres.[PROJECT]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:6543/postgres?pgbouncer=true"

# Direct (for migrations)
DIRECT_URL="postgres://postgres.[PROJECT]:[PASSWORD]@aws-0-[REGION].pooler.supabase.com:5432/postgres"
```

### Option 2: Neon

**Advantages:**
- Serverless PostgreSQL
- Auto-scaling
- Branching for dev/test
- Free tier available

**Setup:**
1. Create project at https://neon.tech
2. Get connection string
3. Enable pooling in connection string

```env
DATABASE_URL="postgresql://[user]:[pass]@[endpoint].neon.tech/[database]?sslmode=require&pooling=true"
DIRECT_URL="postgresql://[user]:[pass]@[endpoint].neon.tech/[database]?sslmode=require"
```

### Option 3: PlanetScale

**Advantages:**
- MySQL-based
- Branching workflow
- Automatic query caching
- No downtime migrations

**Setup:**
1. Create database at https://planetscale.com
2. Get connection string
3. Update `schema.prisma` to use MySQL

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
  relationMode = "prisma"
}
```

```env
DATABASE_URL="mysql://[user]:[pass]@[host]/[database]?sslaccept=strict"
```

## API Endpoints

### Demo Registration
```bash
POST /api/demo/register
GET  /api/demo/register?status=pending
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "role": "CTO",
  "phone": "+966501234567",
  "interests": ["GRC", "Risk Management"]
}
```

### POC Registration
```bash
POST /api/poc/register
GET  /api/poc/register?status=pending&industry=finance
```

**Request Body:**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "Tech Corp",
  "role": "VP Engineering",
  "phone": "+966501234567",
  "department": "IT",
  "industry": "Technology",
  "companySize": "100-500",
  "pocInterest": ["Compliance", "Audit"],
  "requirements": "Need GRC solution for ISO 27001",
  "timeline": "3-6 months",
  "budget": "$50k-$100k"
}
```

### Sandbox Booking
```bash
POST /api/sandbox/book
GET  /api/sandbox/book?email=user@example.com
```

**Request Body:**
```json
{
  "name": "Bob Johnson",
  "email": "bob@example.com",
  "sandboxType": "grc-full",
  "date": "2024-12-25",
  "time": "14:00",
  "purpose": "Evaluate GRC features"
}
```

### Contact Form
```bash
POST /api/contact/submit
GET  /api/contact/submit?status=new
```

### Analytics
```bash
POST /api/analytics/track
GET  /api/analytics/track?solutionId=1&startDate=2024-01-01
```

### Dashboard Stats
```bash
GET /api/dashboard/stats
```

**Response:**
```json
{
  "success": true,
  "data": {
    "totalDemoRegistrations": 45,
    "totalPOCRegistrations": 12,
    "totalSandboxBookings": 28,
    "totalContactSubmissions": 67,
    "pendingDemos": 8,
    "pendingPOCs": 3,
    "recentActivity": [...]
  }
}
```

### Health Check
```bash
GET /api/health
```

## Performance Optimization

### Connection Pooling
Always use connection pooling in serverless:
```env
DATABASE_URL="...?pgbouncer=true&connection_limit=1"
```

### Prisma Client Singleton
The project uses a singleton pattern (`lib/prisma.js`) to prevent multiple Prisma Client instances.

### Cold Starts
- Prisma Client is generated at build time
- Connection pooling reduces connection overhead
- PgBouncer handles connection management

### Query Optimization
```javascript
// ✅ Good: Select specific fields
await prisma.user.findMany({
  select: { id: true, name: true, email: true }
});

// ❌ Avoid: Select all fields when not needed
await prisma.user.findMany();
```

## Prisma Studio

View/edit data locally:
```bash
npm run db:studio
```

Opens at http://localhost:5555

## Database Migrations

### Development
```bash
npx prisma db push
```

### Production
```bash
npx prisma migrate deploy
```

## Troubleshooting

### Error: "Can't reach database server"
- Check DATABASE_URL is correct
- Verify database is accessible
- Check firewall/security rules

### Error: "Prepared statement already exists"
- Use connection pooling
- Set `pgbouncer=true` in connection string

### Error: "Too many connections"
- Reduce `connection_limit` in DATABASE_URL
- Use connection pooling
- Switch to PgBouncer mode

### Slow Cold Starts
- Ensure Prisma Client is generated at build time
- Use connection pooling
- Consider using Prisma Accelerate

## Testing

### Test API Endpoints
```bash
# Health check
curl http://localhost:5000/api/health

# Demo registration
curl -X POST http://localhost:5000/api/demo/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","company":"Test Corp","role":"Developer"}'

# Dashboard stats
curl http://localhost:5000/api/dashboard/stats
```

## Monitoring

### Vercel Analytics
Enable in Vercel dashboard for:
- Request logs
- Function duration
- Cold start metrics
- Error tracking

### Database Monitoring
- Supabase: Built-in monitoring dashboard
- Neon: Query performance metrics
- PlanetScale: Query insights

## Security

### Environment Variables
Never commit `.env` files:
```bash
# .gitignore
.env
.env.*
!.env.example
```

### Rate Limiting
Consider adding rate limiting in production:
```javascript
// api/middleware/rateLimit.js
import rateLimit from 'express-rate-limit';

export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
```

### Input Validation
All API endpoints include basic validation. Consider adding:
- Zod for schema validation
- Express-validator for request validation
- Sanitization for user inputs

## Cost Optimization

### Free Tiers
- **Supabase**: 500MB storage, 2GB bandwidth
- **Neon**: 3 projects, 10GB storage
- **PlanetScale**: 5GB storage, 1 billion rows
- **Vercel**: 100GB bandwidth, 6000 build minutes

### Tips
- Use connection pooling to reduce connections
- Index frequently queried fields
- Implement caching for read-heavy operations
- Monitor query performance

## Next Steps

1. ✅ Set up database
2. ✅ Configure environment variables
3. ✅ Generate Prisma Client
4. ✅ Push schema
5. ⚠️ Test API endpoints locally
6. ⚠️ Deploy to Vercel
7. ⚠️ Configure production environment
8. ⚠️ Set up monitoring

## Resources

- [Prisma Docs](https://www.prisma.io/docs)
- [Vercel Docs](https://vercel.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Neon Docs](https://neon.tech/docs)

## Support

For issues:
1. Check logs in Vercel dashboard
2. Review Prisma query logs
3. Check database connection
4. Verify environment variables
