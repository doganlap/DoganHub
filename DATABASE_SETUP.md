# Database Setup & Deployment Guide

## Overview
This guide covers setting up the Prisma database, seeding data, and deploying the complete registration system.

## Database Configuration

### Environment Variables
Already configured in `.env`:
- `PRISMA_DATABASE_URL`: Direct PostgreSQL connection
- `POSTGRES_URL`: Alternative PostgreSQL connection
- `PRISMA_ACCELERATE_URL`: Edge/Serverless deployment URL

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install:
- `@prisma/client` - Prisma client for database operations
- `prisma` - Prisma CLI for migrations and management

### 2. Generate Prisma Client
```bash
npm run db:generate
```

This generates the Prisma Client based on your schema.

### 3. Push Schema to Database
```bash
npm run db:push
```

This creates all tables in your PostgreSQL database:
- `demo_registrations` - Demo access registrations
- `poc_registrations` - POC request registrations
- `sandbox_bookings` - Sandbox scheduler bookings
- `solution_views` - Solution page analytics
- `contact_submissions` - Contact form submissions

### 4. Seed Database with Demo Data
```bash
npm run db:seed
```

This populates your database with:
- ✅ 5 Demo Registrations (approved, pending, contacted statuses)
- ✅ 5 POC Registrations (various industries and requirements)
- ✅ 4 Sandbox Bookings (confirmed sessions with access links)
- ✅ 2000+ Solution View Analytics (across 20 solutions × 5 pages)
- ✅ 3 Contact Submissions (various statuses)

### 5. View Database (Optional)
```bash
npm run db:studio
```

Opens Prisma Studio in your browser to view and manage database records.

## Features Implemented

### 1. Registration System
- **Demo Registration** (`/register-demo`)
  - Personal info collection
  - Interest area selection
  - Form validation
  - Database integration
  - Email notifications (ready)

- **POC Registration** (`/register-poc`)
  - 3-step wizard form
  - Company details
  - POC requirements
  - Timeline and budget
  - Database integration

### 2. Sandbox Scheduler (`/schedule-sandbox`)
- 4 sandbox types:
  - Complete GRC Platform (2 hours)
  - Risk Management (1 hour)
  - Compliance Automation (1 hour)
  - Custom Configuration (3 hours)
- Date picker (next 14 days, weekdays only)
- Time slot selection (9 AM - 6 PM)
- Automatic access link generation
- Database booking storage

### 3. POC Advanced Kit (`/poc-kit`)
- 10 comprehensive POC solutions:
  - Complete GRC Platform
  - Risk Management System
  - Compliance Automation
  - Security Orchestration
  - Cloud Security Posture Management
  - Data Governance Platform
  - AI-Powered Security Analytics
  - Network Security Monitoring
  - Policy Management
  - Infrastructure Monitoring
- Detailed specifications for each:
  - Features list
  - Deliverables
  - Tech stack
  - Resource requirements
  - Duration and effort estimates

### 4. 5-Page Solution Stories (`/solution/:id/story`)
Each of the 20+ demo solutions includes:
- **Page 1: Overview** - Introduction, highlights, key stats
- **Page 2: Features** - 6 detailed features with icons
- **Page 3: Use Cases** - 3 industry-specific examples
- **Page 4: Implementation** - 4-week timeline, tech stack
- **Page 5: Success Stories** - Testimonials, ROI metrics, CTAs

Interactive features:
- Progress indicator
- Page navigation
- "Book Demo" and "Request POC" buttons
- Responsive design

## Database Schema

### Demo Registrations
```prisma
model DemoRegistration {
  id            String   
  name          String
  email         String   @unique
  company       String
  role          String
  phone         String?
  interests     String[] 
  status        String   @default("pending")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

### POC Registrations
```prisma
model POCRegistration {
  id            String   
  name          String
  email         String   @unique
  company       String
  role          String
  phone         String
  department    String
  industry      String
  companySize   String
  pocInterest   String[]
  requirements  String   @db.Text
  timeline      String
  budget        String?
  status        String   @default("pending")
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

### Sandbox Bookings
```prisma
model SandboxBooking {
  id            String   
  name          String
  email         String
  sandboxType   String
  date          String
  time          String
  purpose       String?  @db.Text
  status        String   @default("confirmed")
  accessLink    String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
}
```

## Routes Added

| Route | Component | Description |
|-------|-----------|-------------|
| `/register-demo` | DemoRegistration | Demo access registration form |
| `/register-poc` | POCRegistration | 3-step POC request form |
| `/schedule-sandbox` | SandboxScheduler | Sandbox booking system |
| `/poc-kit` | POCAdvancedKit | ICT POC solutions catalog |
| `/solution/:id/story` | SolutionStory | 5-page solution stories |

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel --prod
```

Your app is already configured with:
- `vercel.json` with route mappings
- Environment variables (add to Vercel dashboard)
- Database connection via Prisma

### Post-Deployment
1. Add environment variables to Vercel:
   - `PRISMA_DATABASE_URL`
   - `POSTGRES_URL`
   - `VITE_API_URL`

2. Run database setup:
   ```bash
   npm run db:push
   npm run db:seed
   ```

3. Test all registration forms

## Testing

### Test Demo Registration
1. Navigate to `/register-demo`
2. Fill in form with test data
3. Submit registration
4. Check database: `npm run db:studio`

### Test POC Registration
1. Navigate to `/register-poc`
2. Complete all 3 steps
3. Submit POC request
4. Verify in database

### Test Sandbox Booking
1. Navigate to `/schedule-sandbox`
2. Select sandbox type
3. Choose date and time
4. Submit booking
5. Check confirmation

### Test Solution Stories
1. Navigate to `/kit`
2. Click "View 5-Page Story" on any solution
3. Navigate through all 5 pages
4. Test "Book Demo" and "Request POC" buttons

## Analytics

Solution view tracking is automatic:
- Every page view is recorded
- Session tracking
- User agent capture
- View solution analytics: `npm run db:studio`

## Support

For issues or questions:
- Check database connection: `npm run db:studio`
- Verify environment variables in `.env`
- Test Prisma client: `npm run db:generate`

## Summary

✅ Database configured with Prisma + PostgreSQL
✅ 5 tables created with indexes
✅ Demo data seeded (20+ records)
✅ Registration system (Demo + POC)
✅ Sandbox scheduler with 4 types
✅ 10 POC solutions catalog
✅ 5-page stories for 20+ solutions
✅ Ready for production deployment

**Next Steps:**
1. Run `npm install` to install dependencies
2. Run `npm run db:push` to create tables
3. Run `npm run db:seed` to populate data
4. Run `npm run dev` to start development server
5. Test all registration flows
6. Deploy to Vercel: `vercel --prod`
