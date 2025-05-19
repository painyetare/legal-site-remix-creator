
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const practiceAreas = [
    { label: 'DREPT CIVIL ȘI PROCESUAL CIVIL', href: '/practice/drept-civil' },
    { label: 'DREPTUL MUNCII', href: '/practice/dreptul-muncii' },
    { label: 'DREPTUL SOCIETĂȚILOR COMERCIALE', href: '/practice/dreptul-societatilor' },
    { label: 'DREPTUL FAMILIEI', href: '/practice/dreptul-familiei' },
    { label: 'CONTENCIOS ADMINISTRATIV ȘI FISCAL', href: '/practice/contencios-administrativ' },
    { label: 'DREPT PENAL ȘI PROCESUAL PENAL', href: '/practice/drept-penal' },
    { label: 'DREPT CONTRAVENȚIONAL', href: '/practice/drept-contraventional' },
    { label: 'DREPT BANCAR', href: '/practice/drept-bancar' },
    { label: 'DREPTUL UNIUNII EUROPENE', href: '/practice/dreptul-uniunii-europene' },
    { label: 'CEDO (CONVENȚIA EUROPEANĂ A DREPTURILOR OMULUI)', href: '/practice/cedo' },
    { label: 'IMIGRARE, VIZE ȘI REGIMUL STRĂINILOR', href: '/practice/imigrare' },
    { label: 'RECUPERAREA CREANȚELOR / ASIGURĂRI', href: '/practice/recuperarea-creantelor' },
    { label: 'DREPTUL PROPRIETĂȚII INTELECTUALE ȘI INDUSTRIALE', href: '/practice/proprietate-intelectuala' },
    { label: 'SERVICII DE MEDIERE', href: '/practice/servicii-mediere' }
  ];

  const mediationServices = [
    { label: 'DESPRE BIROUL DE MEDIATOR "ALEXANDROIU RADU-FLORIN"', href: '/mediation/despre-birou-mediator' },
    { label: 'DESPRE MEDIERE', href: '/mediation/despre-mediere' },
    { label: 'DOMENII ÎN CARE OFERIM SERVICII DE MEDIERE', href: '/mediation/domenii-mediere' },
    { label: 'ȘEDINȚE DE INFORMARE GRATUITE', href: '/mediation/sedinte-informare' },
    { label: 'DOMENII ÎN CARE ESTE NECESARĂ INFORMAREA CU PRIVIRE LA MEDIERE', href: '/mediation/informare-obligatorie' }
  ];

  const infoItems = [
    { label: 'STAGIU', href: '/#about' },
    { label: 'COLABORĂRI', href: '/#about' },
    { label: 'CONFIDENȚIALITATE', href: '/#about' },
    { label: 'ONORARII', href: '/#about' },
    { label: 'PRO BONO', href: '/#about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Changed this logic to ensure navbar is always visible
      // The navbar will still change style when scrolling down
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check to set correct state on page load
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-law-navy shadow-md py-3' : 'bg-law-navy/90 py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-white font-serif text-2xl font-bold">
            Alexandroiu
            <span className="text-law-gold">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/#about" className="text-white hover:text-law-gold transition-colors">Despre noi</Link>
            <Link to="/#team" className="text-white hover:text-law-gold transition-colors">Avocați</Link>
            <NavDropdown title="Domenii de practică" items={practiceAreas} />
            <NavDropdown title="Mediere" items={mediationServices} />
            <Link to="/#articles" className="text-white hover:text-law-gold transition-colors">Articole</Link>
            <NavDropdown title="Informări" items={infoItems} />
            <Link to="/#contact" className="text-white hover:text-law-gold transition-colors">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-law-navy absolute left-0 right-0 top-full p-4 shadow-md max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col space-y-4">
              <Link to="/#about" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Despre noi</Link>
              <Link to="/#team" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Avocați</Link>
              
              <div className="border-t border-law-gold/30 pt-2">
                <p className="text-law-gold mb-2">Domenii de practică</p>
                <div className="flex flex-col space-y-2 pl-2">
                  {practiceAreas.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.href} 
                      className="text-white text-sm hover:text-law-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="border-t border-law-gold/30 pt-2">
                <p className="text-law-gold mb-2">Mediere</p>
                <div className="flex flex-col space-y-2 pl-2">
                  {mediationServices.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.href} 
                      className="text-white text-sm hover:text-law-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/#articles" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Articole</Link>
              
              <div className="border-t border-law-gold/30 pt-2">
                <p className="text-law-gold mb-2">Informări</p>
                <div className="flex flex-col space-y-2 pl-2">
                  {infoItems.map((item, index) => (
                    <Link 
                      key={index} 
                      to={item.href} 
                      className="text-white text-sm hover:text-law-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link to="/#contact" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
