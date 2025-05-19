
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Servicii juridice de excepție! Echipa de avocați a demonstrat profesionalism și dedicare în rezolvarea cazului meu. Recomand cu încredere!",
    author: "Mihai D.",
    position: "Client, Caz Civil",
    source: "Client direct"
  },
  {
    quote: "Am apelat la serviciile cabinetului pentru un litigiu comercial complex. Abordarea lor strategică și expertiza au fost determinante pentru succesul nostru.",
    author: "Elena M.",
    position: "Director, Company SRL",
    source: "Client direct"
  },
  {
    quote: "Excelență juridică și atenție deosebită acordată fiecărui detaliu. Consultanța primită m-a ajutat să iau cele mai bune decizii pentru situația mea.",
    author: "George P.",
    position: "Client, Dreptul Familiei",
    source: "Client direct"
  },
  {
    quote: "Profesionist, amabil, dedicat. Recomand cu încredere!",
    author: "Adrian Andrei",
    position: "Client Google",
    source: "Google Reviews"
  },
  {
    quote: "Un avocat profesionist și foarte bine pregătit. Recomand cu încredere!",
    author: "Florin Mihai",
    position: "Client Google",
    source: "Google Reviews"
  },
  {
    quote: "Cel mai bun avocat din oraș! Comunicare excelentă și rezultate pe măsură.",
    author: "Alexandru Ionescu",
    position: "Client Google",
    source: "Google Reviews"
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };
  
  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(interval);
  }, [current]);

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
    <section id="testimonials" className="py-24 bg-law-navy text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            Ce spun <span className="text-law-gold">clienții</span> noștri
          </h2>
        </div>
        
        <div className="max-w-3xl mx-auto relative animate-on-scroll">
          <div className="text-center px-6 md:px-12">
            <svg className="w-12 h-12 text-law-gold mx-auto mb-6 opacity-50" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10,8H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4v6H8a2,2,0,0,1-2-2V14a2,2,0,0,0-2-2H4a2,2,0,0,0-2,2v6a6,6,0,0,0,6,6h2a2,2,0,0,0,2-2V10A2,2,0,0,0,10,8Z"></path>
              <path d="M26,8H22a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2h4v6H24a2,2,0,0,1-2-2V14a2,2,0,0,0-2-2H20a2,2,0,0,0-2,2v6a6,6,0,0,0,6,6h2a2,2,0,0,0,2-2V10A2,2,0,0,0,26,8Z"></path>
            </svg>
            <p className="text-xl md:text-2xl italic mb-8">
              {testimonials[current].quote}
            </p>
            <div className="mb-8">
              <p className="text-law-gold font-medium text-lg">{testimonials[current].author}</p>
              <p className="text-white/60">{testimonials[current].position}</p>
              <p className="text-white/40 text-sm mt-1">Sursă: {testimonials[current].source}</p>
            </div>
            <div className="flex justify-center space-x-4">
              <button 
                onClick={prev}
                className="p-2 rounded-full border border-law-gold/30 hover:border-law-gold text-law-gold/70 hover:text-law-gold transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={next}
                className="p-2 rounded-full border border-law-gold/30 hover:border-law-gold text-law-gold/70 hover:text-law-gold transition-all"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
