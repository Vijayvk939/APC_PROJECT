import { Church, Users } from 'lucide-react';
import { WorshipService } from '@/types/worship';
import worshipData from '../json/worship.json';

const iconMap: Record<string, typeof Church> = {
  Church,
  Users,
};

export const worshipServices: WorshipService[] = worshipData.worshipServices.map((service) => ({
  ...service,
  icon: iconMap[service.icon] || Church,
}));
