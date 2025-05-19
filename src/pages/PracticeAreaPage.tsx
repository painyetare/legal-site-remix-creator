
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

// Practice area content will be stored here
const practiceAreaContent = {
  'drept-civil': {
    title: 'Drept Civil și Procesual Civil',
    content: `
      <p>Dreptul civil reglementează raporturile patrimoniale și nepatrimoniale dintre persoane fizice și persoane juridice aflate pe poziție de egalitate juridică.</p>
      <p>Cabinetul nostru oferă servicii complete de consultanță și reprezentare în domeniul dreptului civil, inclusiv:</p>
      <ul>
        <li>Asistență și reprezentare în litigii civile</li>
        <li>Problematici privind drepturile reale</li>
        <li>Contracte civile și comerciale</li>
        <li>Succesiuni și partaje</li>
        <li>Acțiuni privind starea civilă</li>
        <li>Acțiuni în răspundere civilă delictuală și contractuală</li>
      </ul>
    `
  },
  'dreptul-muncii': {
    title: 'Dreptul Muncii',
    content: `
      <p>Dreptul muncii reglementează relațiile individuale și colective de muncă, oferind protecție juridică atât angajaților, cât și angajatorilor.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Consultanță și asistență pentru încheierea, modificarea și încetarea contractelor individuale de muncă</li>
        <li>Reprezentare în litigii de muncă (concedieri abuzive, drepturi salariale, discriminare la locul de muncă)</li>
        <li>Negocieri contracte colective de muncă</li>
        <li>Consultanță în probleme de sănătate și securitate în muncă</li>
        <li>Mediere în conflictele de muncă</li>
      </ul>
    `
  },
  'dreptul-societatilor': {
    title: 'Dreptul Societăților Comerciale',
    content: `
      <p>Oferim consultanță juridică completă pentru societățile comerciale în toate etapele existenței acestora.</p>
      <p>Serviciile noastre includ:</p>
      <ul>
        <li>Asistență în constituirea societăților comerciale</li>
        <li>Modificări ale actelor constitutive</li>
        <li>Restructurări, fuziuni și achiziții</li>
        <li>Lichidări și proceduri de insolvență</li>
        <li>Reprezentare în litigii comerciale</li>
        <li>Consultanță pentru asociații și administratorii societăților</li>
        <li>Redactare și avizare contracte comerciale</li>
        <li>Recuperare creanțe comerciale</li>
      </ul>
    `
  },
  'dreptul-familiei': {
    title: 'Dreptul Familiei',
    content: `
      <p>Dreptul familiei reglementează relațiile de familie, fiind unul dintre cele mai sensibile domenii ale dreptului civil.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Asistență și reprezentare în divorțuri</li>
        <li>Proceduri privind încredințarea minorilor</li>
        <li>Stabilirea domiciliului minorilor</li>
        <li>Stabilirea și modificarea pensiei de întreținere</li>
        <li>Exercitarea autorității părintești</li>
        <li>Partaje de bunuri comune</li>
        <li>Mediere în conflictele familiale</li>
      </ul>
    `
  },
  // Add the rest of the practice areas here...
};

// Mediation content
const mediationContent = {
  'despre-birou-mediator': {
    title: 'Despre Biroul de Mediator "Alexandroiu Radu-Florin"',
    content: `
      <p>Biroul de mediator "Alexandroiu Radu-Florin" vă oferă servicii profesionale de mediere, o modalitate alternativă de soluționare a disputelor.</p>
      <p>Mediatorul Alexandroiu Radu-Florin este autorizat de Consiliul de Mediere din România și are experiența necesară pentru a facilita dialogul între părțile aflate în conflict.</p>
      <p>Medierea reprezintă o soluție mai rapidă, mai puțin costisitoare și mai puțin stresantă decât procedurile judiciare clasice.</p>
    `
  },
  'despre-mediere': {
    title: 'Despre Mediere',
    content: `
      <p>Medierea este o modalitate voluntară de soluționare a conflictelor, prin care un terț specializat, neutru, imparțial și fără putere de decizie - mediatorul - asistă părțile în cadrul procesului de mediere în vederea identificării unor soluții reciproc avantajoase.</p>
      <p>Avantajele medierii includ:</p>
      <ul>
        <li>Soluționarea rapidă a disputelor</li>
        <li>Costuri reduse față de procedurile judiciare</li>
        <li>Confidențialitate</li>
        <li>Control deplin asupra deciziilor</li>
        <li>Menținerea relațiilor între părți</li>
        <li>Înțelegeri personalizate, adaptate nevoilor specifice</li>
      </ul>
    `
  },
  // Add the rest of the mediation areas here...
};

const PracticeAreaPage = () => {
  const { slug, category } = useParams<{ slug: string, category: string }>();
  
  const content = category === 'mediation' 
    ? mediationContent[slug as keyof typeof mediationContent]
    : practiceAreaContent[slug as keyof typeof practiceAreaContent];
  
  useEffect(() => {
    if (content) {
      document.title = `${content.title} | Cabinet Avocatură Alexandroiu`;
      window.scrollTo(0, 0);
    }
  }, [content, slug]);

  if (!content) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-3xl font-serif mb-4">Pagină negăsită</h1>
            <p className="mb-6">Domeniul de practică solicitat nu există.</p>
            <Link to="/#practice" className="inline-flex items-center text-law-gold hover:underline">
              <ArrowRight className="mr-2 h-4 w-4" /> Înapoi la Domenii de practică
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Link to="/#practice" className="inline-flex items-center text-law-gold hover:underline mb-4">
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> Înapoi la Domenii de practică
            </Link>
            <h1 className="text-3xl md:text-4xl font-serif mb-6">{content.title}</h1>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.content }}></div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-serif mb-4">Aveți nevoie de asistență juridică?</h2>
            <p className="mb-6">Contactați-ne pentru o consultație inițială și vom găsi cea mai bună soluție pentru situația dumneavoastră.</p>
            <Link 
              to="/#contact" 
              className="inline-flex items-center bg-law-gold text-white px-6 py-3 rounded hover:bg-law-gold/90 transition-colors"
            >
              Contactați-ne
            </Link>
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PracticeAreaPage;
