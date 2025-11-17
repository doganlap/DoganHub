import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import DemoAccess from './pages/DemoAccess';
import POCRequest from './pages/POCRequest';
import POCConfirmation from './pages/POCConfirmation';
import Dashboard from './pages/Dashboard';
import Sandbox from './pages/Sandbox';
import DemoKit from './pages/DemoKit';
import Reports from './pages/Reports';
import SolutionPage from './pages/solutions/SolutionPage';
import DemoRegistration from './pages/DemoRegistration';
import POCRegistration from './pages/POCRegistration';
import SandboxScheduler from './pages/SandboxScheduler';
import POCAdvancedKit from './pages/POCAdvancedKit';
import SolutionDetailPage from './pages/SolutionDetailPage';
import SolutionStory from './pages/solutions/SolutionStory';
import DoganHubPage from './pages/DoganHubPage';

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="access" element={<DemoAccess />} />
            <Route path="poc" element={<POCRequest />} />
            <Route path="poc-confirm" element={<POCConfirmation />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="sandbox" element={<Sandbox />} />
            <Route path="kit" element={<DemoKit />} />
            <Route path="solution/:solutionId" element={<SolutionPage />} />
            <Route path="reports" element={<Reports />} />
            <Route path="register-demo" element={<DemoRegistration />} />
            <Route path="register-poc" element={<POCRegistration />} />
            <Route path="schedule-sandbox" element={<SandboxScheduler />} />
            <Route path="poc-kit" element={<POCAdvancedKit />} />
            <Route path="solution/:solutionId/story" element={<SolutionStory />} />
            <Route path="hub" element={<DoganHubPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
