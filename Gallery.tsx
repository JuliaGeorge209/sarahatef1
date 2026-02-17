import React from 'react';
import { Language } from '../types';

interface GalleryProps { language: Language; }

const Gallery: React.FC<GalleryProps> = ({ language }) => {
  const images = [
    'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800',
    'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800',
    'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?q=80&w=800',
    'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800'
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl serif mb-4 dark:text-white">
            {language === 'ar' ? 'معرض الصور' : 'Gallery'}
          </h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((img, i) => (
            <div key={i} className="relative overflow-hidden group rounded-2xl">
              <img src={img} alt={`Gallery ${i}`} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;