import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactInfo, ContactCard, MapLocation } from '@/types/contact';
import contactData from '../json/contact.json';

// Icon mapping
const iconMap: Record<string, typeof Phone> = {
  Phone,
  Mail,
  MapPin,
};

// Process contact info with icon mapping
export const contactInfo: ContactInfo[] = contactData.contactInfo.map((info) => ({
  ...info,
  icon: iconMap[info.icon] || Phone,
}));

// Process contact cards with icon mapping
export const contactCards: ContactCard[] = contactData.contactCards.map((card) => ({
  ...card,
  icon: iconMap[card.icon] || Phone,
}));

export const mapLocations: Record<string, MapLocation> = contactData.mapLocations;
