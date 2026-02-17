
export interface Service {
  id: string;
  nameAr: string;
  nameEn: string;
  category: string;
  price: string;
  duration: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  image: string;
}

export type BookingStep = 'category' | 'service' | 'datetime' | 'details' | 'confirm';

export interface BookingState {
  category: string;
  serviceId: string;
  date: string;
  time: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
}

export type Language = 'ar' | 'en';
export type Theme = 'light' | 'dark';
