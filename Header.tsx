import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language, Theme } from '../types';

interface HeaderProps {
  onNavigate: (section: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, language, setLanguage, theme, setTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = TRANSLATIONS[language].nav;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.home, target: 'home' },
    { label: t.about, target: 'about' },
    { label: t.services, target: 'services' },
    { label: t.booking, target: 'booking' },
    { label: t.contact, target: 'contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-gray-900 shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex flex-col items-start">
          <span className={`text-xl md:text-2xl font-bold tracking-widest font-playfair uppercase ${isScrolled ? 'text-salon-brown dark:text-white' : 'text-white'}`}>
            SARAH ATEF
          </span>
          <span className={`text-[10px] tracking-[4px] uppercase ${isScrolled ? 'text-rose-gold' : 'text-white/80'}`}>
            Beauty Salon
          </span>
        </button>

        <nav className="hidden md:flex items-center space-x-reverse space-x-6">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => onNavigate(link.target)}
              className={`text-sm font-medium transition-colors border-b-2 border-transparent hover:border-rose-gold py-1 ${
                isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-rose-gold' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          
          <div className="flex items-center space-x-reverse space-x-4 ml-4">
            <button 
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className={`p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white/80 hover:bg-white/10'}`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              className={`flex items-center gap-2 p-2 rounded-full transition-colors ${isScrolled ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' : 'text-white/80 hover:bg-white/10'}`}
            >
              <Globe size={18} />
              <span className="text-xs font-bold">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>

          <button
            onClick={() => onNavigate('booking')}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
              isScrolled 
                ? 'bg-salon-brown dark:bg-rose-gold text-white shadow-md' 
                : 'bg-white text-salon-brown hover:bg-gray-100 shadow-lg'
            }`}
          >
            {t.bookNow}
          </button>
        </nav>

        <div className="md:hidden flex items-center space-x-reverse space-x-4">
           <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className={isScrolled ? 'text-salon-brown dark:text-white' : 'text-white'}>
             {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
           </button>
           <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-salon-brown dark:text-white' : 'text-white'}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-[60] flex flex-col items-center justify-center space-y-8 animate-fade-in">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 left-6 text-salon-brown dark:text-white">
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <button key={link.target} onClick={() => { onNavigate(link.target); setIsMenuOpen(false); }} className="text-2xl font-bold text-salon-brown dark:text-white hover:text-rose-gold">
              {link.label}
            </button>
          ))}
          <button onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')} className="text-xl font-medium text-rose-gold flex items-center gap-2">
            <Globe size={24} /> {language === 'ar' ? 'Switch to English' : 'تغيير للغة العربية'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;