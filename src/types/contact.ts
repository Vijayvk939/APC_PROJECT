import { LucideIcon } from 'lucide-react';

export interface ContactInfo {
  icon: LucideIcon;
  title: string;
  content: string;
  description: string;
  color: string;
  action: string;
  status: string;
  accentColor: string;
}

export interface ContactCard {
  icon: LucideIcon;
  title: string;
  value: string;
  href: string;
  description: string;
}

export interface MapLocation {
  title: string;
  subtitle: string;
  embedUrl: string;
  mapsUrl: string;
}
