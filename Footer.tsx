import React from 'react';
import { Instagram, Facebook, MapPin, Phone, MessageCircle } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { Language } from '../types';

interface FooterProps { language: Language; }

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = TRANSLATIONS[language].footer;
  const nav = TRANSLATIONS[language].nav;

  return (
    <footer id="contact" className="bg-salon-brown dark:bg-gray-950 text-[#fef3e4] pt-24 pb-12 border-t-[6px] border-[#b79b8b]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mb-20">
        <div className="text-center md:text-right">
          <h2 className="text-4xl font-bold serif mb-2 text-white">SARAH ATEF</h2>
          <p className="text-[#f0e2db] text-lg leading-relaxed mb-8">{t.description}</p>
          <div className="flex justify-center md:justify-start space-x-reverse space-x-5">
            <a href="https://wa.me/201050362209" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-green-500 transition-all"><MessageCircle size={24} /></a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl serif font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">{nav.services}</h3>
          <ul className="space-y-4 text-lg">
            <li><a href="#home">{nav.home}</a></li>
            <li><a href="#booking">{nav.booking}</a></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl serif font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">{t.contactTitle}</h3>
          <ul className="space-y-6 text-lg">
            <li className="flex items-center justify-center md:justify-start space-x-reverse space-x-4"><MapPin size={24} /> <span>{t.address}</span></li>
            <li className="flex items-center justify-center md:justify-start space-x-reverse space-x-4"><Phone size={24} /> <span dir="ltr">01050362209</span></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-sm opacity-60">
        <p>&copy; 2026 Sarah Atef. {t.rights}</p>
      </div>
    </footer>
  );
};

export default Footer;