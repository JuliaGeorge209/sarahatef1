
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'n1',
    nameAr: 'الجيل بوليش',
    nameEn: 'Gel Polish',
    category: 'Nails',
    price: '270 EGP',
    duration: '60 min',
    descriptionAr: 'ملمس زي الزجاج، يمنح أظافرك بريق أنيق وبساطة راقية.',
    descriptionEn: 'Glass-like finish, gives your nails an elegant sparkle and refined simplicity.',
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=800'
  },
  {
    id: 'n2',
    nameAr: 'تريتمنت',
    nameEn: 'Treatment',
    category: 'Nails',
    price: '300 EGP',
    duration: '45 min',
    descriptionAr: 'علاج عميق بيغذي أظافرك ويرجع لها النعومة والحيوية.',
    descriptionEn: 'Deep treatment that nourishes your nails and restores softness and vitality.',
    image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800'
  },
  {
    id: 'n3',
    nameAr: 'هارد جيل',
    nameEn: 'Hard Gel',
    category: 'Nails',
    price: '370 EGP',
    duration: '90 min',
    descriptionAr: 'طبقة ناعمة وقوية تحمي أظافرك أسابيع طويلة.',
    descriptionEn: 'A smooth and strong layer that protects your nails for many weeks.',
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=800'
  },
  {
    id: 'l1',
    nameAr: 'كلاسيك لاشيز',
    nameEn: 'Classic Lashes',
    category: 'Lashes',
    price: '350 EGP',
    duration: '120 min',
    descriptionAr: 'رموش طبيعية وأنيقة، لمسة ناعمة طول اليوم.',
    descriptionEn: 'Natural and elegant lashes, a soft touch all day long.',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=800'
  },
  {
    id: 'l2',
    nameAr: 'هايبرد لاشيز',
    nameEn: 'Hybrid Lashes',
    category: 'Lashes',
    price: '450 EGP',
    duration: '120 min',
    descriptionAr: 'مزيج مثالي بين النعومة والكثافة.',
    descriptionEn: 'The perfect blend of softness and density.',
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800'
  },
  {
    id: 'b1',
    nameAr: 'ميكروبليدنج',
    nameEn: 'Microblading',
    category: 'Brows',
    price: '1250 EGP',
    duration: '180 min',
    descriptionAr: 'رسم دقيق للحواجب يدوم حتى سنتين.',
    descriptionEn: 'Precise eyebrow drawing that lasts up to two years.',
    image: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=800'
  }
];

export const CATEGORIES = ['Nails', 'Lashes', 'Brows'];

export const TRANSLATIONS: any = {
  ar: {
    nav: { home: 'الرئيسية', about: 'من نحن', services: 'الخدمات', booking: 'الحجوزات', contact: 'اتصل بنا', bookNow: 'احجزي الآن' },
    hero: { title: 'أهلاً بيكي في صالون', subtitle: '"استرخي واستمتعي بلحظاتك الخاصة، فجمالك هو فننا."', description: 'هنا الثقة التي هتغير مزاجك.', explore: 'قائمة الخدمات' },
    about: { badge: 'جمالك هو شغفنا', title: 'سارة عاطف للتجميل', experience: 'خبرة أكثر من ١٠ سنين في عالم العناية بالأظافر والرموش. نحن نؤمن أن الجمال يكمن في التفاصيل الصغيرة.', quote: '"لأنكِ تستحقين الاهتمام بأدق التفاصيل، نخلق لكِ مساحة من الجمال والراحة. في صالوننا، كل لمسة عناية تحكي قصة أناقة، وكل ظفر يعكس اهتمامنا بكِ."', extra: 'استمتعي بتجربة فريدة تجمع بين الفخامة والاسترخاء.', btn: 'اكتشفي خدماتنا' },
    services: { title: 'قائمة الخدمات', subtitle: 'لأنك تستحقين الأفضل، دلعي نفسك واختاري ما يناسبك', all: 'الكل', nails: 'الأظافر', lashes: 'الرموش', brows: 'الحواجب', book: 'احجزي الآن' },
    booking: { title: 'اختاري قسم الخدمة', serviceTitle: 'اختاري الخدمة المطلوبة', dateTitle: 'اختاري الموعد المناسب', dateLabel: 'تاريخ الحجز', timeLabel: 'المواعيد المتاحة', detailsTitle: 'بيانات التواصل', namePlaceholder: 'الاسم بالكامل', phonePlaceholder: 'رقم الهاتف', notesPlaceholder: 'ملاحظات إضافية', confirmBtn: 'تأكيد حجز الموعد', back: 'رجوع', continue: 'استكمال البيانات', successTitle: 'تم تأكيد الحجز بنجاح!', successNote: 'شكراً لاختيارك صالون سارة عاطف. سنقوم بالتواصل معكِ لتأكيد الموعد نهائياً.', returnHome: 'العودة للرئيسية', summary: { client: 'العميلة', service: 'الخدمة', appointment: 'الموعد' } },
    footer: { brandTag: 'Beauty Salon', description: 'لأنكِ تستحقين الاهتمام بأدق التفاصيل، نخلق لكِ مساحة من الجمال والراحة.', contactTitle: 'تواصل معنا', address: '📍 خلف كنيسة ابى سيفين ,عزبة النخل الغربية', quickLinks: 'روابط سريعة', rights: 'جميع الحقوق محفوظة.' },
    lang: 'English'
  },
  en: {
    nav: { home: 'Home', about: 'About', services: 'Services', booking: 'Booking', contact: 'Contact', bookNow: 'Book Now' },
    hero: { title: 'Welcome to', subtitle: '"Relax and enjoy your private moments, your beauty is our art."', description: 'Here is the confidence that will change your mood.', explore: 'Explore Services' },
    about: { badge: 'Your Beauty is Our Passion', title: 'Sarah Atef Beauty', experience: 'Over 10 years of experience in the world of nail and lash care. We believe beauty lies in the small details.', quote: '"Because you deserve attention to the finest details, we create a space of beauty and comfort for you. In our salon, every touch tells a story of elegance."', extra: 'Enjoy a unique experience that combines luxury and relaxation.', btn: 'Discover Our Services' },
    services: { title: 'Service Menu', subtitle: 'Because you deserve the best, pamper yourself and choose', all: 'All', nails: 'Nails', lashes: 'Lashes', brows: 'Brows', book: 'Book Now' },
    booking: { title: 'Select Category', serviceTitle: 'Select Service', dateTitle: 'Pick Date & Time', dateLabel: 'Booking Date', timeLabel: 'Available Slots', detailsTitle: 'Contact Details', namePlaceholder: 'Full Name', phonePlaceholder: 'Phone Number', notesPlaceholder: 'Additional Notes', confirmBtn: 'Confirm Appointment', back: 'Back', continue: 'Continue', successTitle: 'Booking Confirmed!', successNote: 'Thank you for choosing Sarah Atef Salon. We will contact you to finalize the appointment.', returnHome: 'Back to Home', summary: { client: 'Client', service: 'Service', appointment: 'Appointment' } },
    footer: { brandTag: 'Beauty Salon', description: 'Because you deserve attention to the finest details, we create a space of beauty and comfort.', contactTitle: 'Contact Us', address: '📍 Behind Abi Sifin Church, West Ezbet El Nakhl', quickLinks: 'Quick Links', rights: 'All rights reserved.' },
    lang: 'العربية'
  }
};
