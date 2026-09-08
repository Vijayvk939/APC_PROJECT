import { Heart, Users, BookOpen, Sparkles } from 'lucide-react';
import { ChurchValue } from '@/types/about';
import aboutData from '../json/about.json';

const iconMap: Record<string, typeof Heart> = {
  Heart,
  Users,
  BookOpen,
  Sparkles,
};

export const values: ChurchValue[] = aboutData.values.map((val) => ({
  ...val,
  icon: iconMap[val.icon] || Heart,
}));
