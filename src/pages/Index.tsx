
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeAreas from '@/components/PracticeAreas';
import Team from '@/components/Team';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AnimationInit from '@/components/AnimationInit';

const Index = () => {
  useEffect(() => {
    document.title = "Cabinet Avocatură Alexandroiu | Servicii Juridice de Înaltă Calitate";
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
      <AnimationInit />
    </div>
  );
};

export default Index;
