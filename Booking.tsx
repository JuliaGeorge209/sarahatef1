import React, { useState, useEffect } from 'react';
import { CATEGORIES, SERVICES, TRANSLATIONS } from '../constants';
import { CheckCircle, ChevronRight, ChevronLeft, Loader2, MessageCircle } from 'lucide-react';
import { BookingStep, BookingState, Language } from '../types';

interface BookingProps { 
  language: Language; 
  initialServiceId?: string | null;
  onResetSelection?: () => void;
}

const Booking: React.FC<BookingProps> = ({ language, initialServiceId, onResetSelection }) => {
  const [step, setStep] = useState<BookingStep>('category');
  const [isSending, setIsSending] = useState(false);
  const t = TRANSLATIONS[language].booking;
  const [state, setState] = useState<BookingState>({ category: '', serviceId: '', date: '', time: '', clientName: '', clientEmail: '', clientPhone: '' });
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (initialServiceId) {
      const service = SERVICES.find(s => s.id === initialServiceId);
      if (service) {
        setState(prev => ({ ...prev, category: service.category, serviceId: service.id }));
        setStep('datetime');
      }
    }
  }, [initialServiceId]);

  const nextStep = () => {
    if (step === 'category') setStep('service');
    else if (step === 'service') setStep('datetime');
    else if (step === 'datetime') setStep('details');
    else if (step === 'details') setStep('confirm');
  };

  const prevStep = () => {
    if (step === 'service') setStep('category');
    else if (step === 'datetime') {
      setStep('service');
      if (onResetSelection) onResetSelection();
    }
    else if (step === 'details') setStep('datetime');
    else if (step === 'confirm') setStep('details');
  };

  const selectedService = SERVICES.find(s => s.id === state.serviceId);
  const filteredServices = SERVICES.filter(s => s.category === state.category);

  const handleFinalConfirm = async () => {
    setIsSending(true);
    const serviceName = language === 'ar' ? selectedService?.nameAr : selectedService?.nameEn;
    const formData = {
      "الاسم": state.clientName,
      "رقم الهاتف": state.clientPhone,
      "الخدمة": serviceName,
      "التصنيف": state.category,
      "التاريخ": state.date,
      "الوقت": state.time,
      "ملاحظات": notes,
    };

    try {
      await fetch('https://formspree.io/f/xreaknja', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      setStep('confirm');
    } catch (error) {
      setStep('confirm');
    } finally {
      setIsSending(false);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 'category':
        return (
          <div className="animate-fade-in">
            <h3 className="text-3xl serif mb-8 text-salon-brown dark:text-white font-bold">{t.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => { setState({ ...state, category: cat }); nextStep(); }}
                  className={`p-8 rounded-2xl border-2 text-right transition-all group ${state.category === cat ? 'border-rose-gold bg-rose-gold/5' : 'border-gray-100 dark:border-gray-800'}`}
                >
                  <span className="text-xl font-bold text-salon-brown dark:text-gray-200 group-hover:text-rose-gold">
                    {language === 'ar' ? (cat === 'Nails' ? 'الأظافر' : cat === 'Lashes' ? 'الرموش' : 'الحواجب') : cat}
                  </span>
                </button>
              ))}
            </div>
          </div>
        );
      case 'service':
        return (
          <div className="animate-fade-in">
            <h3 className="text-3xl serif mb-8 text-salon-brown dark:text-white font-bold">{t.serviceTitle}</h3>
            <div className="space-y-4">
              {filteredServices.map(s => (
                <button key={s.id} onClick={() => { setState({ ...state, serviceId: s.id }); nextStep(); }} className={`w-full p-6 rounded-2xl border-2 flex justify-between items-center transition-all ${state.serviceId === s.id ? 'border-rose-gold bg-rose-gold/5' : 'border-gray-100 dark:border-gray-800 hover:border-rose-gold'}`}>
                  <h4 className="text-lg font-bold text-salon-brown dark:text-gray-200">{language === 'ar' ? s.nameAr : s.nameEn}</h4>
                  <span className="text-xl font-black text-rose-gold">{s.price}</span>
                </button>
              ))}
            </div>
          </div>
        );
      case 'datetime':
        return (
          <div className="animate-fade-in">
            <h3 className="text-3xl serif mb-8 text-salon-brown dark:text-white font-bold">{t.dateTitle}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <label className="block text-sm font-bold text-salon-brown dark:text-gray-400 uppercase mb-4 tracking-widest">{t.dateLabel}</label>
                <input type="date" className="w-full p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 outline-none focus:border-rose-gold bg-gray-50 dark:bg-gray-800 text-salon-brown dark:text-white" onChange={(e) => setState({ ...state, date: e.target.value })} />
              </div>
              <div>
                <label className="block text-sm font-bold text-salon-brown dark:text-gray-400 uppercase mb-4 tracking-widest">{t.timeLabel}</label>
                <div className="grid grid-cols-2 gap-4">
                  {['09:00 AM', '11:00 AM', '01:00 PM', '03:00 PM', '05:00 PM', '07:00 PM'].map(tStr => (
                    <button key={tStr} onClick={() => setState({ ...state, time: tStr })} className={`py-4 rounded-xl border-2 font-bold transition-all ${state.time === tStr ? 'bg-rose-gold text-white border-rose-gold' : 'border-gray-100 dark:border-gray-800 dark:text-gray-400'}`}>
                      {tStr}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button onClick={nextStep} disabled={!state.date || !state.time} className="w-full mt-12 py-5 bg-salon-brown dark:bg-rose-gold text-white font-bold rounded-2xl transition-all disabled:opacity-30 shadow-xl">{t.continue}</button>
          </div>
        );
      case 'details':
        return (
          <div className="animate-fade-in">
            <h3 className="text-3xl serif mb-8 text-salon-brown dark:text-white font-bold">{t.detailsTitle}</h3>
            <div className="space-y-6">
              <input type="text" placeholder={t.namePlaceholder} className="w-full p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:border-rose-gold" value={state.clientName} onChange={(e) => setState({...state, clientName: e.target.value})} />
              <input type="tel" placeholder={t.phonePlaceholder} className="w-full p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:border-rose-gold" value={state.clientPhone} onChange={(e) => setState({...state, clientPhone: e.target.value})} />
              <textarea placeholder={t.notesPlaceholder} className="w-full p-5 rounded-2xl border-2 border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 dark:text-white outline-none focus:border-rose-gold h-32" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
              <button onClick={handleFinalConfirm} disabled={!state.clientName || !state.clientPhone || isSending} className="w-full py-5 bg-rose-gold text-white font-bold rounded-2xl shadow-xl hover:opacity-90 transition-all disabled:opacity-50 flex items-center justify-center gap-3">
                {isSending ? <><Loader2 className="animate-spin" /> جاري التأكيد...</> : t.confirmBtn}
              </button>
            </div>
          </div>
        );
      case 'confirm':
        return (
          <div className="text-center animate-fade-in py-16">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-8" />
            <h3 className="text-4xl serif mb-6 text-salon-brown dark:text-white font-bold">{t.successTitle}</h3>
            <p className="text-gray-500 mb-10">{t.successNote}</p>
            <button onClick={() => window.location.reload()} className="px-12 py-4 bg-salon-brown dark:bg-rose-gold text-white font-bold rounded-full">{t.returnHome}</button>
          </div>
        );
    }
  };

  return (
    <section id="booking" className="py-32 bg-[#FDFBF7] dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="bg-white dark:bg-gray-900 p-8 md:p-16 rounded-[3rem] shadow-2xl border-t-[10px] border-rose-gold">
          {step !== 'confirm' && (
            <div className="mb-16 flex items-center justify-between">
              <div className="flex items-center space-x-reverse space-x-6 overflow-x-auto pb-4 no-scrollbar">
                {[1,2,3,4].map((idx) => (
                    <div key={idx} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${idx <= ['category','service','datetime','details'].indexOf(step) + 1 ? 'bg-rose-gold text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>{idx}</div>
                ))}
              </div>
              {step !== 'category' && (
                <button onClick={prevStep} className="flex items-center text-salon-brown dark:text-rose-gold font-bold gap-2">
                  {language === 'ar' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />} {t.back}
                </button>
              )}
            </div>
          )}
          {renderStep()}
        </div>
      </div>
    </section>
  );
};

export default Booking;