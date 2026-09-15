import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { Modal } from './components/common/Modal';
import { Toast } from './components/common/Toast';
import { ContactForm } from './components/forms/ContactForm';
import { PilotBuilderModal } from './components/forms/PilotBuilderModal';
import { ExperienceDetailModal } from './components/explore/ExperienceDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ExplorePage } from './pages/ExplorePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { InstitutionsPage } from './pages/InstitutionsPage';
import { PartnersPage } from './pages/PartnersPage';
import { WorldPage } from './pages/WorldPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

import { Program, PillarType } from './types/cms';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(
    window.location.pathname || '/'
  );
  const [selectedPillar, setSelectedPillar] = useState<PillarType | null>(null);

  // Initialize universal scroll reveal animations on route changes
  useScrollReveal(currentPath);

  // Global Dialogs & Modals
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryCategory, setEnquiryCategory] = useState('Institution');
  const [selectedProgramForEnquiry, setSelectedProgramForEnquiry] = useState<Program | null>(null);
  
  const [pilotBuilderOpen, setPilotBuilderOpen] = useState(false);
  
  const [selectedProgramDetail, setSelectedProgramDetail] = useState<Program | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // Global Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync with browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const search = new URLSearchParams(window.location.search);
      const pillar = search.get('pillar') as PillarType | null;
      setCurrentPath(path);
      setSelectedPillar(pillar);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (pathWithQuery: string) => {
    const [path, query] = pathWithQuery.split('?');
    if (query) {
      const searchParams = new URLSearchParams(query);
      const pillar = searchParams.get('pillar') as PillarType | null;
      setSelectedPillar(pillar);
    } else {
      setSelectedPillar(null);
    }

    setCurrentPath(path || '/');
    window.history.pushState({}, '', pathWithQuery);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (category: string = 'Institution', program?: Program) => {
    setEnquiryCategory(category);
    setSelectedProgramForEnquiry(program || null);
    setEnquiryModalOpen(true);
  };

  const handleViewProgramDetail = (program: Program) => {
    setSelectedProgramDetail(program);
    setDetailModalOpen(true);
  };

  const handleEnquireProgram = (program: Program) => {
    handleOpenEnquiry('Institution', program);
  };

  const handlePilotCreated = (summary: string) => {
    setToastMessage('Pilot request generated successfully! Our team will contact you.');
  };

  const handleFormSubmitted = () => {
    setToastMessage('Enquiry received! We will connect within 24 business hours.');
  };

  // Render active page component based on path
  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/':
        return (
          <HomePage
            onNavigate={navigateTo}
            onViewProgram={handleViewProgramDetail}
            onEnquireProgram={handleEnquireProgram}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenPilotBuilder={() => setPilotBuilderOpen(true)}
          />
        );
      case '/explore':
        return (
          <ExplorePage
            initialPillar={selectedPillar}
            onViewProgram={handleViewProgramDetail}
            onEnquireProgram={handleEnquireProgram}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );
      case '/how-it-works':
        return (
          <HowItWorksPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenPilotBuilder={() => setPilotBuilderOpen(true)}
          />
        );
      case '/institutions':
        return (
          <InstitutionsPage
            onOpenEnquiry={handleOpenEnquiry}
            onOpenPilotBuilder={() => setPilotBuilderOpen(true)}
          />
        );
      case '/partners':
        return (
          <PartnersPage
            onOpenEnquiry={handleOpenEnquiry}
          />
        );
      case '/world':
        return (
          <WorldPage
            onViewProgram={handleViewProgramDetail}
            onEnquireProgram={handleEnquireProgram}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );
      case '/about':
        return (
          <AboutPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiry}
          />
        );
      case '/contact':
        return (
          <ContactPage
            initialCategory={enquiryCategory}
            initialProgramTitle={selectedProgramForEnquiry?.title}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={navigateTo}
            onViewProgram={handleViewProgramDetail}
            onEnquireProgram={handleEnquireProgram}
            onOpenEnquiry={handleOpenEnquiry}
            onOpenPilotBuilder={() => setPilotBuilderOpen(true)}
          />
        );
    }
  };

  return (
    <div className="site-wrapper">
      {/* Global Sticky Header */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page Body */}
      <main className="main-content">{renderCurrentPage()}</main>

      {/* Global Ecosystem Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Global Partnership / Contact Enquiry Modal */}
      <Modal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        maxWidth="760px"
        title="Connect with xplorED"
      >
        <ContactForm
          initialCategory={enquiryCategory}
          initialProgramTitle={selectedProgramForEnquiry?.title}
          onSuccessSubmit={() => {
            handleFormSubmitted();
          }}
        />
      </Modal>

      {/* Interactive Institutional Pilot Builder Modal */}
      <PilotBuilderModal
        isOpen={pilotBuilderOpen}
        onClose={() => setPilotBuilderOpen(false)}
        onPilotCreated={handlePilotCreated}
      />

      {/* Experience Deep Dive Detail Modal */}
      <ExperienceDetailModal
        program={selectedProgramDetail}
        isOpen={detailModalOpen}
        onClose={() => {
          setDetailModalOpen(false);
          setSelectedProgramDetail(null);
        }}
        onEnquire={handleEnquireProgram}
      />

      {/* Global Toast Notification */}
      <Toast
        message={toastMessage || ''}
        isVisible={!!toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
