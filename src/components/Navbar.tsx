
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <a href="#practice" className="text-white hover:text-law-gold transition-colors">Arii de practica</a>
            <a href="#team" className="text-white hover:text-law-gold transition-colors">Echipa</a>
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
          <div className="md:hidden bg-law-navy absolute left-0 right-0 top-full p-4 shadow-md">
            <div className="flex flex-col space-y-4">
              <a href="#about" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Despre noi</a>
              <a href="#practice" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Arii de practica</a>
              <a href="#team" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Echipa</a>
              <a href="#contact" className="text-white hover:text-law-gold transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
