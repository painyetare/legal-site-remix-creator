
import React, { useEffect } from 'react';

const teamMembers = [
  {
    name: 'Alexandru Alexandroiu',
    title: 'Avocat Fondator',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=774',
    description: 'Cu peste 20 de ani de experiență în domeniul juridic, specializat în drept penal și litigii. Membru al Baroului București din anul 2002.'
  },
  {
    name: 'Maria Popescu',
    title: 'Avocat Partener',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=774',
    description: 'Specializată în drept civil și dreptul familiei, Maria are experiență vastă în negociere și mediere. Membru al Baroului București din 2007.'
  },
  {
    name: 'Andrei Ionescu',
    title: 'Avocat Asociat',
    photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=774',
    description: 'Expert în drept comercial și proprietate intelectuală, Andrei a gestionat cu succes numeroase cazuri complexe pentru clienți corporativi.'
  }
];

const Team = () => {
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
    <section id="team" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            <span className="text-law-gold">Echipa</span> noastră
          </h2>
          <p className="max-w-xl mx-auto text-law-gray-dark">
            Avocații noștri sunt profesioniști cu experiență, dedicați soluționării problemelor dumneavoastră juridice cu maximă eficiență.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${0.2 * index}s` }}
            >
              <div className="relative mb-6 inline-block">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-law-gold mb-4">
                  <img 
                    src={member.photo} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-serif mb-2">{member.name}</h3>
              <p className="text-law-gold font-medium mb-4">{member.title}</p>
              <p className="text-law-gray-dark">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
