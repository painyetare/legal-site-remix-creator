
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import NavDropdown from './NavDropdown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const practiceAreas = [
    { label: 'DREPT CIVIL ȘI PROCESUAL CIVIL', href: '#practice' },
    { label: 'DREPTUL MUNCII', href: '#practice' },
    { label: 'DREPTUL SOCIETĂȚILOR COMERCIALE', href: '#practice' },
    { label: 'DREPTUL FAMILIEI', href: '#practice' },
    { label: 'CONTENCIOS ADMINISTRATIV ȘI FISCAL', href: '#practice' },
    { label: 'DREPT PENAL ȘI PROCESUAL PENAL', href: '#practice' },
    { label: 'DREPT CONTRAVENȚIONAL', href: '#practice' },
    { label: 'DREPT BANCAR', href: '#practice' },
    { label: 'DREPTUL UNIUNII EUROPENE', href: '#practice' },
    { label: 'CEDO (CONVENȚIA EUROPEANĂ A DREPTURILOR OMULUI)', href: '#practice' },
    { label: 'IMIGRARE, VIZE ȘI REGIMUL STRĂINILOR', href: '#practice' },
    { label: 'RECUPERAREA CREANȚELOR / ASIGURĂRI', href: '#practice' },
    { label: 'DREPTUL PROPRIETĂȚII INTELECTUALE ȘI INDUSTRIALE', href: '#practice' },
    { label: 'SERVICII DE MEDIERE', href: '#practice' }
  ];

  const mediationServices = [
    { label: 'DESPRE BIROUL DE MEDIATOR "ALEXANDROIU RADU-FLORIN"', href: '#contact' },
    { label: 'DESPRE MEDIERE', href: '#contact' },
    { label: 'DOMENII ÎN CARE OFERIM SERVICII DE MEDIERE', href: '#contact' },
    { label: 'ȘEDINȚE DE INFORMARE GRATUITE', href: '#contact' },
    { label: 'DOMENII ÎN CARE ESTE NECESARĂ INFORMAREA CU PRIVIRE LA MEDIERE', href: '#contact' }
  ];

  const infoItems = [
    { label: 'STAGIU', href: '#about' },
    { label: 'COLABORĂRI', href: '#about' },
    { label: 'CONFIDENȚIALITATE', href: '#about' },
    { label: 'ONORARII', href: '#about' },
    { label: 'PRO BONO', href: '#about' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-law-navy shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white font-serif text-2xl font-bold">
            Alexandroiu
            <span className="text-law-gold">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#about" className="text-white hover:text-law-gold transition-colors">Despre noi</a>
            <a href="#team" className="text-white hover:text-law-gold transition-colors">Avocați</a>
            <NavDropdown title="Domenii de practică" items={practiceAreas} />
            <NavDropdown title="Mediere" items={mediationServices} />
            <a href="#articles" className="text-white hover:text-law-gold transition-colors">Articole</a>
            <NavDropdown title="Informări" items={infoItems} />
            <a href="#contact" className="text-white hover:text-law-gold transition-colors">Contact</a>
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
              <a href="#about" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Despre noi</a>
              <a href="#team" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Avocați</a>
              
              <div className="border-t border-law-gold/30 pt-2">
                <p className="text-law-gold mb-2">Domenii de practică</p>
                <div className="flex flex-col space-y-2 pl-2">
                  {practiceAreas.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="text-white text-sm hover:text-law-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-law-gold/30 pt-2">
                <p className="text-law-gold mb-2">Mediere</p>
                <div className="flex flex-col space-y-2 pl-2">
                  {mediationServices.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="text-white text-sm hover:text-law-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="#articles" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Articole</a>
              
              <div className="border-t border-law-gold/30 pt-2">
                <p className="text-law-gold mb-2">Informări</p>
                <div className="flex flex-col space-y-2 pl-2">
                  {infoItems.map((item, index) => (
                    <a 
                      key={index} 
                      href={item.href} 
                      className="text-white text-sm hover:text-law-gold transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="#contact" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
