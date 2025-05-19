
import React, { useEffect } from 'react';
import { 
  Book, Scale, Gavel, Handshake, 
  MessageSquareHeart, MessageSquareQuestion 
} from 'lucide-react';
import { Link } from 'react-router-dom';

const practiceAreas = [
  {
    title: 'Drept Civil',
    description: 'Consultanță și reprezentare în litigii civile, contracte, drepturi reale, succesiuni și partaje.',
    icon: Book,
    slug: 'drept-civil'
  },
  {
    title: 'Dreptul Muncii',
    description: 'Asistență în litigii de muncă, negocieri contracte, concedieri și drepturi salariale.',
    icon: Book,
    slug: 'dreptul-muncii'
  },
  {
    title: 'Dreptul Societăților Comerciale',
    description: 'Consultanță pentru societăți comerciale, contracte, litigii și recuperare creanțe.',
    icon: Book,
    slug: 'dreptul-societatilor'
  },
  {
    title: 'Dreptul Familiei',
    description: 'Consiliere în divorțuri, partaje, încredințare minori, pensii alimentare și autoritate părintească.',
    icon: Book,
    slug: 'dreptul-familiei'
  },
  {
    title: 'Contencios Administrativ și Fiscal',
    description: 'Reprezentare în litigii cu autoritățile publice și contestații administrative.',
    icon: Book,
    slug: 'contencios-administrativ'
  },
  {
    title: 'Drept Penal',
    description: 'Asistență și reprezentare în toate fazele procesului penal, de la urmărirea penală până la executarea pedepselor.',
    icon: Book,
    slug: 'drept-penal'
  },
  {
    title: 'Drept Contravențional',
    description: 'Consultanță și asistență în contestarea proceselor verbale de contravenție.',
    icon: Book,
    slug: 'drept-contraventional'
  },
  {
    title: 'Drept Bancar',
    description: 'Reprezentare în litigii cu instituțiile bancare și financiare nebancare.',
    icon: Book,
    slug: 'drept-bancar'
  },
  {
    title: 'Dreptul Uniunii Europene',
    description: 'Consultanță privind aplicarea și interpretarea legislației europene.',
    icon: Book,
    slug: 'dreptul-uniunii-europene'
  },
  {
    title: 'CEDO',
    description: 'Reprezentare în fața Curții Europene a Drepturilor Omului pentru încălcări ale drepturilor fundamentale.',
    icon: Book,
    slug: 'cedo'
  },
  {
    title: 'Imigrare și Regimul Străinilor',
    description: 'Asistență în obținerea vizelor, permiselor de ședere și de muncă pentru cetățenii străini.',
    icon: Book,
    slug: 'imigrare'
  },
  {
    title: 'Recuperarea Creanțelor',
    description: 'Servicii complete pentru recuperarea creanțelor și executare silită.',
    icon: Scale,
    slug: 'recuperarea-creantelor'
  },
  {
    title: 'Dreptul Proprietății Intelectuale',
    description: 'Protejarea drepturilor de autor, brevetelor, mărcilor și desenelor industriale.',
    icon: Book,
    slug: 'proprietate-intelectuala'
  },
  {
    title: 'Servicii de Mediere',
    description: 'Soluționarea alternativă a disputelor prin procedura medierii.',
    icon: Handshake,
    slug: 'servicii-mediere'
  }
];

const mediationServices = [
  {
    title: 'Despre Biroul de Mediator',
    description: 'Informații despre Biroul de Mediator "Alexandroiu Radu-Florin"',
    icon: MessageSquareHeart,
    slug: 'despre-birou-mediator'
  },
  {
    title: 'Despre Mediere',
    description: 'Ce este medierea și cum vă poate ajuta în soluționarea disputelor',
    icon: Handshake,
    slug: 'despre-mediere'
  },
  {
    title: 'Domenii de Mediere',
    description: 'Domeniile în care oferim servicii de mediere',
    icon: Gavel,
    slug: 'domenii-mediere'
  },
  {
    title: 'Ședințe de Informare Gratuite',
    description: 'Participați la ședințe de informare gratuite despre avantajele medierii',
    icon: MessageSquareQuestion,
    slug: 'sedinte-informare'
  },
  {
    title: 'Informare Obligatorie',
    description: 'Domenii în care este necesară informarea cu privire la mediere',
    icon: MessageSquareQuestion,
    slug: 'informare-obligatorie'
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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 animate-on-scroll">
            <span className="text-law-gold">Domenii</span> de practică
          </h2>
          <p className="max-w-xl mx-auto text-law-gray-dark animate-on-scroll" style={{animationDelay: '0.2s'}}>
            Oferim servicii juridice complete și de înaltă calitate în diverse domenii ale dreptului, adaptate nevoilor dumneavoastră.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Link 
              key={index}
              to={`/practice/${area.slug}`}
              className="bg-white p-6 rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:bg-law-gold/5 animate-on-scroll"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-4 flex items-center">
                <div className="w-12 h-12 rounded-full bg-law-gold/20 flex items-center justify-center mr-4">
                  <area.icon className="w-6 h-6 text-law-gold" />
                </div>
                <h3 className="text-xl font-serif">{area.title}</h3>
              </div>
              <p className="text-law-gray-dark">{area.description}</p>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4 animate-on-scroll">
            <span className="text-law-gold">Servicii</span> de Mediere
          </h2>
          <p className="max-w-xl mx-auto text-law-gray-dark animate-on-scroll mb-8" style={{animationDelay: '0.2s'}}>
            Soluționarea alternativă a disputelor prin procedura medierii, o metodă rapidă și eficientă.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediationServices.map((service, index) => (
              <Link
                key={index}
                to={`/mediation/${service.slug}`}
                className="bg-white p-6 rounded-md shadow-md transition-all duration-300 hover:shadow-xl hover:bg-law-gold/5 animate-on-scroll"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="mb-4 flex items-center">
                  <div className="w-12 h-12 rounded-full bg-law-gold/20 flex items-center justify-center mr-4">
                    <service.icon className="w-6 h-6 text-law-gold" />
                  </div>
                  <h3 className="text-xl font-serif">{service.title}</h3>
                </div>
                <p className="text-law-gray-dark">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
