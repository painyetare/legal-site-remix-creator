
import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        if (position < screenHeight * 0.9) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-serif mb-6 text-law-navy">
              <span className="text-law-gold">Despre</span> noi
            </h2>
            <p className="text-law-gray-dark mb-4">
              Cabinet Avocatură Alexandroiu este un cabinet de avocatură de prestigiu, cu o vastă experiență, ce vă stă la dispoziție cu servicii juridice de calitate și soluții eficiente pentru problemele dumneavoastră.
            </p>
            <p className="text-law-gray-dark mb-4">
              Având o experiență de peste 20 de ani în dreptul penal, dreptul civil, dreptul familiei și alte ramuri juridice, vă oferim consultanță juridică de specialitate, asistență și reprezentare în fața instanțelor judecătorești și a organelor de urmărire penală.
            </p>
            <p className="text-law-gray-dark mb-6">
              Ne mândrim cu un portofoliu bogat de clienți mulțumiți și cu o rată ridicată de succes în soluționarea cazurilor. Suntem dedicați fiecărui client și fiecărui caz în parte, cu profesionalism, confidențialitate și etică profesională.
            </p>
            <a href="#contact" className="btn-outline">
              Programează o consultație
            </a>
          </div>
          <div className="animate-on-scroll" style={{animationDelay: '0.3s'}}>
            <div className="relative">
              <div className="bg-law-gold absolute -bottom-5 -left-5 w-24 h-24 z-0"></div>
              <img 
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070" 
                alt="Office Interior" 
                className="w-full h-auto rounded-md shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
