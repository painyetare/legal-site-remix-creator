
import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const articles = [
  {
    id: 1,
    title: "Drepturile și obligațiile martorului în procesul penal",
    excerpt: "În calitate de martor într-un proces penal, este esențial să cunoașteți atât drepturile cât și obligațiile pe care le aveți...",
    date: "15 Mai 2023",
    category: "Drept Penal"
  },
  {
    id: 2,
    title: "Divorțul prin acordul soților - procedură și avantaje",
    excerpt: "Separarea legală prin acordul părților reprezintă o opțiune mai rapidă și mai puțin costisitoare pentru cuplurile care decid să încheie căsătoria...",
    date: "3 Aprilie 2023",
    category: "Dreptul Familiei"
  },
  {
    id: 3,
    title: "Recuperarea creanțelor comerciale - metode și strategii eficiente",
    excerpt: "Pentru companiile care se confruntă cu debitori rău-platnici, există mai multe metode legale pentru recuperarea sumelor datorate...",
    date: "22 Martie 2023",
    category: "Drept Comercial"
  }
];

const Articles = () => {
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
    <section id="articles" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">
            <span className="text-law-gold">Art</span>icole Juridice
          </h2>
          <p className="max-w-2xl mx-auto text-law-gray-dark">
            Resurse și informații de actualitate din domeniul juridic pentru a vă ajuta să înțelegeți mai bine drepturile și obligațiile legale.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div key={article.id} className="animate-on-scroll border border-gray-200 rounded-md overflow-hidden shadow-md transition-transform hover:transform hover:scale-105 hover:shadow-lg">
              <div className="p-6">
                <span className="text-sm text-law-gold font-medium mb-2 block">{article.category}</span>
                <h3 className="font-serif text-xl mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-law-gray-dark mb-4 text-sm line-clamp-3">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <a href="#" className="text-law-gold font-medium flex items-center hover:underline">
                    Citește mai mult <ChevronRight className="ml-1 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#" className="btn-outline">Vezi toate articolele</a>
        </div>
      </div>
    </section>
  );
};

export default Articles;
