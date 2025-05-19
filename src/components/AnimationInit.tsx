
import { useEffect } from "react";

const AnimationInit = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Animation for elements that fade in
      const elements = document.querySelectorAll('.animate-on-scroll');
      // Animation for elements that fade in from right
      const rightElements = document.querySelectorAll('.animate-on-scroll-right');
      // Animation for elements that fade in from left
      const leftElements = document.querySelectorAll('.animate-on-scroll-left');
      // Animation for elements that fade in from bottom
      const bottomElements = document.querySelectorAll('.animate-on-scroll-bottom');
      // Animation for elements that have a delayed fade in
      const delayedElements = document.querySelectorAll('.animate-on-scroll-delayed');
      
      const allElements = [
        ...elements, 
        ...rightElements, 
        ...leftElements, 
        ...bottomElements,
        ...delayedElements
      ];
      
      allElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        
        // Activate animation when element is 90% into view
        if (position < screenHeight * 0.9) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load with a small delay to ensure elements are rendered
    setTimeout(handleScroll, 300);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default AnimationInit;
