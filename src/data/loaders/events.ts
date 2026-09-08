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
import bvmpCA from '/images/Events/BVMP_CA.webp';
import glpCA from '/images/Events/GLP_CA.webp';
import fasting21Days from '/images/Events/21days_fastings.webp';
import prayer40Days from '/images/Events/40DaysPrayers.webp';
import semiChristmas from '/images/Events/Semi_Christmas.webp';
import newYearGM from '/images/Events/New-year_GM.webp';

const imageMap: Record<string, string> = {
  '/images/Events/BVMP_CA.webp': bvmpCA,
  '/images/Events/GLP_CA.webp': glpCA,
  '/images/Events/21days_fastings.webp': fasting21Days,
  '/images/Events/40DaysPrayers.webp': prayer40Days,
  '/images/Events/Semi_Christmas.webp': semiChristmas,
  '/images/Events/New-year_GM.webp': newYearGM,
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

