import { LucideIcon } from 'lucide-react';

export interface WorshipService {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  time: string;
  location: string;
  highlights: string[];
  status: string;
}
