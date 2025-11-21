import { Heart, Users, BookOpen } from 'lucide-react';
import { SpecialPrayerCardData, RegularPrayerProgram } from '@/types/events';
import eventsData from '../json/events.json';

// Icon mapping
const iconMap: Record<string, typeof Heart> = {
  Heart,
  Users,
  BookOpen,
};

// Import images
import bvmpCA from '/images/Events/BVMP_CA.jpg';
import glpCA from '/images/Events/GLP_CA.jpg';
import fasting21Days from '/images/Events/21days_fastings.jpg';
import prayer40Days from '/images/Events/40DaysPrayers.jpg';
import semiChristmas from '/images/Events/Semi_Christmas.jpg';
import newYearGM from '/images/Events/New-year_GM.jpg';

const imageMap: Record<string, string> = {
  '/images/Events/BVMP_CA.jpg': bvmpCA,
  '/images/Events/GLP_CA.jpg': glpCA,
  '/images/Events/21days_fastings.jpg': fasting21Days,
  '/images/Events/40DaysPrayers.jpg': prayer40Days,
  '/images/Events/Semi_Christmas.jpg': semiChristmas,
  '/images/Events/New-year_GM.jpg': newYearGM,
};

// Process special prayer events with image imports
export const specialPrayerEvents: SpecialPrayerCardData[] = eventsData.specialPrayerEvents.map((event) => ({
  ...event,
  imageUrl: imageMap[event.imageUrl] || event.imageUrl,
}));

// Process regular programs with icon mapping
export const regularPrograms: RegularPrayerProgram[] = eventsData.regularPrograms.map((program) => ({
  ...program,
  icon: iconMap[program.icon] || Heart,
}));

