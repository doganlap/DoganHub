# GRC Demo Portal - Standalone Application

A comprehensive standalone demo portal application for the GRC (Governance, Risk & Compliance) platform with 20+ demo solutions and multilingual support.

## Features

- **Home Page** - Overview and quick access to all demo features
- **Demo Access** - Request instant demo credentials
- **POC Request** - Submit proof of concept requests (Available January 1st, 2026)
- **Dashboard** - Interactive demo dashboard with charts
- **Sandbox** - Test GRC scenarios in safe environment
- **Demo Kit** - 20+ LLM-powered demo solutions
- **Reports** - Visitor analytics and reporting
- **Arabic Language** - Full RTL support for Arabic users

## Tech Stack

- React 18
- React Router DOM 6
- Vite
- Tailwind CSS
- Recharts (for data visualization)
- Framer Motion (for animations)
- Lucide React (for icons)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

The application runs on **port 5000** by default.

Access the app at: http://localhost:5000

## Project Structure

```
demo/
├── src/
│   ├── components/
│   │   └── Layout.jsx       # Main layout with navigation
│   ├── pages/
│   │   ├── Home.jsx         # Landing page
│   │   ├── DemoAccess.jsx   # Demo access form
│   │   ├── POCRequest.jsx   # POC request form
│   │   ├── POCConfirmation.jsx
│   │   ├── Dashboard.jsx    # Demo dashboard
│   │   ├── Sandbox.jsx      # Interactive sandbox
│   │   ├── DemoKit.jsx      # Resources and downloads
│   │   └── Reports.jsx      # Analytics and reports
│   ├── App.jsx              # Main app router
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Routes

- `/` - Home page
- `/access` - Request demo access
- `/poc` - Request POC
- `/poc-confirm` - POC confirmation
- `/dashboard` - Demo dashboard
- `/sandbox` - Interactive sandbox
- `/kit` - Demo kit and resources
- `/reports` - Visitor reports

## Build

```bash
npm run build
```

Builds the app for production to the `dist` folder.

## Deployment

The built application can be deployed to:
- Azure Static Web Apps
- Cloudflare Pages
- Netlify
- Vercel
- Any static hosting service

## License

MIT
"# DoganHub" 
