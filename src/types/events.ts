import { LucideIcon } from 'lucide-react';

export interface RegularPrayerProgram {
  icon: LucideIcon;
  title: string;
  schedule: string;
  description: string;
  color: string;
  status: string;
  accentColor: string;
}

export interface SpecialPrayerCardData {
  imageUrl: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  href?: string;
  themeColor: string;
}

