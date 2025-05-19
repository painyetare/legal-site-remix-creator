
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
  'contencios-administrativ': {
    title: 'Contencios Administrativ și Fiscal',
    content: `
      <p>Dreptul administrativ reglementează raporturile dintre autorități și cetățeni/companii în exercitarea atribuțiilor publice.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Reprezentare în litigii cu autoritățile publice</li>
        <li>Contestații acte administrative</li>
        <li>Litigii fiscale și contestarea deciziilor fiscale</li>
        <li>Proceduri în fața instanțelor de contencios administrativ</li>
        <li>Soluționarea litigiilor în materie de achiziții publice</li>
        <li>Consultanță în proceduri administrative</li>
      </ul>
    `
  },
  'drept-penal': {
    title: 'Drept Penal și Procesual Penal',
    content: `
      <p>Dreptul penal protejează valorile sociale fundamentale și stabilește regulile procesului penal.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Asistență și reprezentare în toate fazele procesului penal</li>
        <li>Apărare în faza de urmărire penală</li>
        <li>Reprezentare în fața instanțelor penale</li>
        <li>Asistență în proceduri de executare a pedepselor</li>
        <li>Consultanță juridică pentru victimele infracțiunilor</li>
        <li>Obținerea de despăgubiri pentru victimele infracțiunilor</li>
      </ul>
    `
  },
  'drept-contraventional': {
    title: 'Drept Contravențional',
    content: `
      <p>Dreptul contravențional reglementează faptele care constituie contravenții și procedura de sancționare a acestora.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Contestarea proceselor verbale de contravenție în instanță</li>
        <li>Reprezentare în fața instanțelor în litigii contravenționale</li>
        <li>Consultanță juridică în materie contravențională</li>
        <li>Asistență în procedura plângerii contravenționale</li>
      </ul>
    `
  },
  'drept-bancar': {
    title: 'Drept Bancar',
    content: `
      <p>Dreptul bancar reglementează raporturile dintre instituțiile de credit și clienți.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Contestarea clauzelor abuzive din contractele bancare</li>
        <li>Negocieri cu instituțiile de credit</li>
        <li>Reprezentare în litigii cu băncile și IFN-urile</li>
        <li>Asistență în proceduri de executare silită inițiate de instituții de credit</li>
        <li>Consultanță în materie de credite și garanții bancare</li>
      </ul>
    `
  },
  'dreptul-uniunii-europene': {
    title: 'Dreptul Uniunii Europene',
    content: `
      <p>Dreptul Uniunii Europene este ansamblul normelor juridice aplicabile în statele membre UE.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Consultanță în aplicarea legislației europene</li>
        <li>Reprezentare în fața autorităților naționale în probleme de drept european</li>
        <li>Consultanță în materia fondurilor europene</li>
        <li>Asistență în procedurile de trimitere preliminară la CJUE</li>
      </ul>
    `
  },
  'cedo': {
    title: 'CEDO (Convenția Europeană a Drepturilor Omului)',
    content: `
      <p>Convenția Europeană a Drepturilor Omului garantează drepturi și libertăți fundamentale în statele membre ale Consiliului Europei.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Reprezentare în fața Curții Europene a Drepturilor Omului</li>
        <li>Redactarea plângerilor către CEDO</li>
        <li>Consultanță în materia drepturilor omului</li>
        <li>Asistență în executarea hotărârilor CEDO</li>
      </ul>
    `
  },
  'imigrare': {
    title: 'Imigrare, Vize și Regimul Străinilor',
    content: `
      <p>Oferim consultanță și asistență juridică în domeniul imigrării și regimului juridic al străinilor în România.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Obținerea vizelor de intrare în România</li>
        <li>Obținerea/prelungirea dreptului de ședere în România</li>
        <li>Obținerea permiselor de muncă</li>
        <li>Asistență în proceduri de expulzare sau returnare</li>
        <li>Consultanță pentru reunificarea familiei</li>
        <li>Obținerea cetățeniei române</li>
      </ul>
    `
  },
  'recuperarea-creantelor': {
    title: 'Recuperarea Creanțelor / Asigurări',
    content: `
      <p>Oferim servicii complete de recuperare a creanțelor și asistență în domeniul asigurărilor.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Somații și notificări pentru plata creanțelor</li>
        <li>Reprezentare în proceduri judiciare de recuperare a creanțelor</li>
        <li>Proceduri de executare silită</li>
        <li>Obținerea de despăgubiri de la companiile de asigurări</li>
        <li>Asistență în proceduri de daună morală și materială</li>
      </ul>
    `
  },
  'proprietate-intelectuala': {
    title: 'Dreptul Proprietății Intelectuale și Industriale',
    content: `
      <p>Dreptul proprietății intelectuale reglementează protecția creațiilor intelectuale și industriale.</p>
      <p>Serviciile noastre în acest domeniu includ:</p>
      <ul>
        <li>Protejarea drepturilor de autor și a drepturilor conexe</li>
        <li>Înregistrarea mărcilor și a designului industrial</li>
        <li>Protecția brevetelor de invenție</li>
        <li>Acțiuni în contrafacere</li>
        <li>Transferul drepturilor de proprietate intelectuală</li>
      </ul>
    `
  },
  'servicii-mediere': {
    title: 'Servicii de Mediere',
    content: `
      <p>Medierea reprezintă o modalitate alternativă de soluționare a disputelor, prin care un terț specializat - mediatorul - asistă părțile în identificarea unei soluții reciproc avantajoase.</p>
      <p>Serviciile noastre de mediere includ:</p>
      <ul>
        <li>Mediere în conflicte civile și comerciale</li>
        <li>Mediere în conflicte de familie (divorț, partaj, custodie)</li>
        <li>Mediere în conflicte de muncă</li>
        <li>Mediere în materia protecției consumatorilor</li>
        <li>Ședințe de informare gratuite privind avantajele medierii</li>
      </ul>
    `
  }
};

// Mediation content
const mediationContent = {
  'despre-birou-mediator': {
    title: 'Despre Biroul de Mediator "Alexandroiu Radu-Florin"',
    content: `
      <p>Biroul de mediator "Alexandroiu Radu-Florin" vă oferă servicii profesionale de mediere, o modalitate alternativă de soluționare a disputelor.</p>
      <p>Mediatorul Alexandroiu Radu-Florin este autorizat de Consiliul de Mediere din România și are experiența necesară pentru a facilita dialogul între părțile aflate în conflict.</p>
      <p>Medierea reprezintă o soluție mai rapidă, mai puțin costisitoare și mai puțin stresantă decât procedurile judiciare clasice.</p>
      <p>Biroul nostru vă pune la dispoziție:</p>
      <ul>
        <li>Un mediator cu vastă experiență în domeniul juridic</li>
        <li>Spații amenajate special pentru desfășurarea ședințelor de mediere</li>
        <li>Confidențialitate absolută în tratarea cazurilor</li>
        <li>Flexibilitate în programarea ședințelor de mediere</li>
      </ul>
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
      <p>Procedura medierii este reglementată prin Legea nr. 192/2006 privind medierea și organizarea profesiei de mediator, cu modificările și completările ulterioare.</p>
    `
  },
  'domenii-mediere': {
    title: 'Domenii în Care Oferim Servicii de Mediere',
    content: `
      <p>Biroul de mediator "Alexandroiu Radu-Florin" oferă servicii de mediere în numeroase domenii, inclusiv:</p>
      <ul>
        <li><strong>Mediere în domeniul civil</strong> - conflicte legate de proprietate, obligații contractuale, daune</li>
        <li><strong>Mediere în domeniul familial</strong> - divorț, partaj, încredințare minori, pensie alimentară</li>
        <li><strong>Mediere în domeniul penal</strong> - pentru infracțiunile pentru care retragerea plângerii prealabile sau împăcarea părților înlătură răspunderea penală</li>
        <li><strong>Mediere în dreptul muncii</strong> - conflicte între angajatori și angajați</li>
        <li><strong>Mediere în domeniul protecției consumatorilor</strong> - litigii între consumatori și operatori economici</li>
        <li><strong>Mediere în domeniul comercial</strong> - conflicte între profesioniști/societăți comerciale</li>
        <li><strong>Mediere în domeniul asigurărilor</strong> - conflicte privind despăgubirile în materia asigurărilor</li>
      </ul>
      <p>În toate aceste domenii, medierea reprezintă o alternativă eficientă la soluționarea litigiilor în instanță.</p>
    `
  },
  'sedinte-informare': {
    title: 'Ședințe de Informare Gratuite',
    content: `
      <p>Biroul de mediator "Alexandroiu Radu-Florin" oferă <strong>ședințe de informare gratuite</strong> privind avantajele medierii, pentru ca dumneavoastră să puteți lua o decizie informată cu privire la modalitatea de soluționare a conflictului.</p>
      <p>În cadrul ședinței de informare gratuită, veți afla:</p>
      <ul>
        <li>Ce este medierea și cum funcționează</li>
        <li>Care sunt avantajele medierii față de procedura judiciară</li>
        <li>Cum se desfășoară procedura de mediere</li>
        <li>Costurile și durata estimativă a procedurii de mediere</li>
        <li>Efectele juridice ale acordului de mediere</li>
      </ul>
      <p>Ședințele de informare se pot organiza atât cu una dintre părți, cât și cu ambele părți implicate în conflict.</p>
      <p>Pentru programarea unei ședințe de informare gratuite, vă rugăm să ne contactați telefonic sau prin email.</p>
    `
  },
  'informare-obligatorie': {
    title: 'Domenii în Care Este Necesară Informarea cu Privire la Mediere',
    content: `
      <p>Conform legislației în vigoare, în anumite domenii, părțile trebuie să participe la o ședință de informare privind avantajele medierii înainte de a se adresa instanței.</p>
      <p>Domeniile în care informarea cu privire la avantajele medierii este necesară includ:</p>
      <ul>
        <li>Protecția consumatorilor</li>
        <li>Litigii de familie (divorț, partaj, exercitarea autorității părintești, stabilirea domiciliului minorilor)</li>
        <li>Litigii de vecinătate</li>
        <li>Litigii în materia răspunderii profesionale</li>
        <li>Litigii civile cu o valoare sub 50.000 lei</li>
      </ul>
      <p>În urma participării la ședința de informare, mediatorul va elibera un certificat de informare, document necesar pentru introducerea acțiunii în instanță.</p>
      <p>Biroul nostru oferă aceste ședințe de informare în mod gratuit, în conformitate cu prevederile legale.</p>
    `
  }
};

const PracticeAreaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const isMediation = window.location.pathname.includes('/mediation/');
  
  const content = isMediation 
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
            <Link 
              to={isMediation ? "/#practice" : "/#practice"} 
              className="inline-flex items-center text-law-gold hover:underline mb-4"
            >
              <ArrowRight className="mr-2 h-4 w-4 rotate-180" /> 
              Înapoi la {isMediation ? "Servicii de Mediere" : "Domenii de practică"}
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
