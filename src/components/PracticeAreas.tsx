
import React, { useEffect } from 'react';

const practiceAreas = [
  {
    title: 'Drept Penal',
    description: 'Asistență și reprezentare în toate fazele procesului penal, de la urmărirea penală până la executarea pedepselor.',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400'
  },
  {
    title: 'Drept Civil',
    description: 'Asistență și reprezentare în litigii civile, contracte, drept imobiliar, succesiuni și partaje.',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400'
  },
  {
    title: 'Dreptul Familiei',
    description: 'Consiliere în divorțuri, partaje, încredințare minori, pensii alimentare și autoritate părintească.',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400'
  },
  {
    title: 'Drept Comercial',
    description: 'Consultanță pentru societăți comerciale, contracte comerciale, litigii și recuperare creanțe.',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400'
  },
  {
    title: 'Dreptul Muncii',
    description: 'Asistență în litigii de muncă, negocieri contracte, concedieri și drepturi salariale.',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400'
  },
  {
    title: 'Drept Administrativ',
    description: 'Reprezentare în fața autorităților publice, contestații administrative și litigii cu statul.',
    icon: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400'
  }
];

const PracticeAreas = () => {
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
    <section id="practice" className="section-padding bg-law-gray-light">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 animate-on-scroll">
            <span className="text-law-gold">Arii</span> de practică
          </h2>
          <p className="max-w-xl mx-auto text-law-gray-dark animate-on-scroll" style={{animationDelay: '0.2s'}}>
            Oferim servicii juridice complete și de înaltă calitate în diverse domenii ale dreptului, adaptate nevoilor dumneavoastră.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-md shadow-md transition-all duration-300 hover:shadow-xl animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-law-gold/20 flex items-center justify-center mr-4">
                  <div className="w-8 h-8 rounded-full bg-law-gold"></div>
                </div>
                <h3 className="text-xl font-serif">{area.title}</h3>
              </div>
              <p className="text-law-gray-dark">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
