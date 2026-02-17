
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Footer from './components/Footer';
import { Language, Theme } from './types';
import { TRANSLATIONS } from './constants';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('light');
  const [preSelectedServiceId, setPreSelectedServiceId] = useState<string | null>(null);
  
  const t = TRANSLATIONS[language].about;

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const navigateTo = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookService = (serviceId: string) => {
    setPreSelectedServiceId(serviceId);
    navigateTo('booking');
  };

  return (
    <div className="relative min-h-screen selection:bg-rose-gold selection:text-white overflow-x-hidden">
      <Header 
        onNavigate={navigateTo} 
        language={language} 
        setLanguage={setLanguage} 
        theme={theme} 
        setTheme={setTheme} 
      />
      
      <main>
        <Hero 
          onBook={() => {
            setPreSelectedServiceId(null);
            navigateTo('booking');
          }} 
          language={language} 
        />
        
        <section id="about" className="py-32 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
            <div className="md:w-1/2 relative group">
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-rose-gold/5 dark:bg-white/5 rounded-full -z-10 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800&h=1000&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl transition-all duration-700"
              />
            </div>
            <div className="md:w-1/2">
              <span className="text-rose-gold uppercase tracking-[0.4em] font-bold text-xs mb-6 block">{t.badge}</span>
              <h2 className="text-5xl md:text-6xl serif mb-10 text-salon-brown dark:text-white font-bold leading-tight">{t.title}</h2>
              <div className="space-y-8">
                <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">{t.experience}</p>
                <div className="bg-rose-gold/5 dark:bg-white/5 border-r-4 border-rose-gold p-8 rounded-2xl italic">
                  <p className="text-salon-brown dark:text-rose-gold text-xl leading-relaxed">{t.quote}</p>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed">{t.extra}</p>
                <div className="pt-6">
                  <button 
                    onClick={() => navigateTo('services')}
                    className="px-12 py-4 bg-salon-brown dark:bg-rose-gold text-white rounded-full font-bold shadow-lg hover:opacity-90 transition-all"
                  >
                    {t.btn}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Services 
          onBook={handleBookService} 
          language={language} 
        />
        <Gallery language={language} />
        <Booking 
          language={language} 
          initialServiceId={preSelectedServiceId}
          onResetSelection={() => setPreSelectedServiceId(null)}
        />
      </main>

      <Footer language={language} />
    </div>
  );
};

export default App;
