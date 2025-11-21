import { Phone, Mail } from 'lucide-react';
import { ContactInfo } from '@/types/contact';
import contactData from '../json/contact.json';

// Icon mapping
const iconMap: Record<string, typeof Phone> = {
  Phone,
  Mail,
};

// Process contact info with icon mapping
export const contactInfo: ContactInfo[] = contactData.contactInfo.map((info) => ({
  ...info,
  icon: iconMap[info.icon] || Phone,
}));

