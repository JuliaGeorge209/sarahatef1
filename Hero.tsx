import React from 'react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface HeroProps {
  onBook: () => void;
  language: Language;
}

const Hero: React.FC<HeroProps> = ({ onBook, language }) => {
  const t = TRANSLATIONS[language].hero;
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=1920" 
          alt="Sarah Atef Salon Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-salon-brown/40 dark:bg-black/75 backdrop-blur-[0.5px] transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-salon-brown/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="mb-8 inline-block animate-fade-in">
          <span className="text-rose-gold uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
            {language === 'ar' ? 'فن الجمال والأناقة' : 'The Art of Beauty & Elegance'}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 leading-tight serif drop-shadow-2xl">
          {t.title} <br />
          <span className="text-rose-gold font-playfair italic font-normal">Sarah Atef</span>
        </h1>
        
        <p className="text-white/90 text-lg md:text-2xl font-light mb-12 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
          {t.subtitle} <br />
          <span className="opacity-80 block mt-2 text-base md:text-xl">{t.description}</span>
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <button 
            onClick={onBook} 
            className="w-full md:w-auto px-12 py-5 bg-rose-gold text-white text-lg font-bold rounded-full hover:scale-105 hover:bg-white hover:text-rose-gold transition-all shadow-2xl active:scale-95"
          >
            {TRANSLATIONS[language].nav.bookNow}
          </button>
          <a 
            href="#services" 
            className="w-full md:w-auto px-12 py-5 bg-white/10 backdrop-blur-md border border-white/30 text-white text-lg font-bold rounded-full hover:bg-white hover:text-salon-brown transition-all shadow-lg"
          >
            {t.explore}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;