
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 z-40 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <button
        type="button"
        onClick={scrollToTop}
        className="bg-law-gold hover:bg-law-gold-light text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:transform hover:scale-110"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ScrollToTop;
