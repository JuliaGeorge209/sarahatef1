import React, { useState } from 'react';
import { SERVICES, CATEGORIES, TRANSLATIONS } from '../constants';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface ServicesProps {
  onBook: (serviceId: string) => void;
  language: Language;
}

const Services: React.FC<ServicesProps> = ({ onBook, language }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const t = TRANSLATIONS[language].services;
  
  const filteredServices = activeCategory === 'All' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-24 bg-[#FCF9F7] dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl serif mb-4 text-salon-brown dark:text-white font-bold">{t.title}</h2>
          <div className="w-24 h-1 bg-rose-gold mx-auto mb-6" />
          <p className="text-rose-gold font-medium text-lg md:text-xl">{t.subtitle}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === 'All' ? 'bg-rose-gold text-white' : 'bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-300 shadow-sm'}`}
          >
            {t.all}
          </button>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-rose-gold text-white' : 'bg-white dark:bg-gray-700 text-gray-400 dark:text-gray-300 shadow-sm'}`}
            >
              {language === 'ar' ? (cat === 'Nails' ? 'الأظافر' : cat === 'Lashes' ? 'الرموش' : 'الحواجب') : cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map(service => (
            <div key={service.id} className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#F3E9E7] dark:border-gray-800">
              <div className="relative h-72 overflow-hidden">
                <img src={service.image} alt={language === 'ar' ? service.nameAr : service.nameEn} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl serif font-bold text-salon-brown dark:text-white">{language === 'ar' ? service.nameAr : service.nameEn}</h3>
                  <span className="text-xl font-extrabold text-rose-gold">{service.price}</span>
                </div>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-8 leading-relaxed italic border-t border-dashed border-[#EEDFDC] dark:border-gray-800 pt-4">
                  {language === 'ar' ? service.descriptionAr : service.descriptionEn}
                </p>
                <div className="flex items-center justify-end">
                  <button onClick={() => onBook(service.id)} className="flex items-center text-sm font-bold text-salon-brown dark:text-rose-gold hover:opacity-70 transition-colors gap-2">
                    {t.book} {language === 'ar' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;