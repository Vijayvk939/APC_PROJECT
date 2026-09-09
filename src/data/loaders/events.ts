import { Heart, Users, BookOpen, Megaphone, TrendingUp } from 'lucide-react';
import { SpecialPrayerCardData, RegularPrayerProgram, PastorInfo, SpecialtyItem } from '@/types/events';
import eventsData from '../json/events.json';
import pastorImage from '/images/SamuelPrasad1.webp';

// Icon mapping
const iconMap: Record<string, typeof Heart> = {
  Heart,
  Users,
  BookOpen,
  Megaphone,
  TrendingUp,
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

// Process pastor info
export const pastorInfo: PastorInfo = {
  ...eventsData.pastorInfo,
  image: eventsData.pastorInfo.image === '/images/SamuelPrasad1.webp' ? pastorImage : eventsData.pastorInfo.image,
};

// Process specialty items with icon mapping
export const specialtyItems: SpecialtyItem[] = eventsData.specialtyItems.map((item) => ({
  ...item,
  icon: iconMap[item.icon] || Heart,
}));


