// HomePage.tsx - Main landing page
import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import ArchitectureSection from '../components/sections/ArchitectureSection';
import ApplicationsSection from '../components/sections/ApplicationsSection';
import ContactSection from '../components/sections/ContactSection';
import { trackPageView } from '../utils/analytics';

export default function HomePage() {
  useEffect(() => {
    trackPageView('/');
  }, []);

  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <ArchitectureSection />
      <ApplicationsSection />
      <ContactSection />
    </Layout>
  );
}
