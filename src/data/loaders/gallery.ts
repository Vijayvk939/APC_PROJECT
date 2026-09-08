import { GalleryImage } from '@/types/gallery';
import galleryData from '../json/gallery.json';

// Import images
import img1 from '/images/Gallery/IMG1.webp';
import img2 from '/images/Gallery/IMG2.webp';
import img3 from '/images/Gallery/IMG3.webp';
import img4 from '/images/Gallery/IMG4.webp';
import img5 from '/images/Gallery/IMG5.webp';
import img6 from '/images/Gallery/IMG6.webp';
import img7 from '/images/Gallery/IMG7.webp';
import img8 from '/images/Gallery/IMG8.webp';
import img9 from '/images/Gallery/IMG9.webp';
import img10 from '/images/Gallery/IMG10.webp';
import img11 from '/images/Gallery/IMG11.webp';
import img12 from '/images/Gallery/IMG12.webp';

const imageMap: Record<string, string> = {
  '/images/Gallery/IMG1.webp': img1,
  '/images/Gallery/IMG2.webp': img2,
  '/images/Gallery/IMG3.webp': img3,
  '/images/Gallery/IMG4.webp': img4,
  '/images/Gallery/IMG5.webp': img5,
  '/images/Gallery/IMG6.webp': img6,
  '/images/Gallery/IMG7.webp': img7,
  '/images/Gallery/IMG8.webp': img8,
  '/images/Gallery/IMG9.webp': img9,
  '/images/Gallery/IMG10.webp': img10,
  '/images/Gallery/IMG11.webp': img11,
  '/images/Gallery/IMG12.webp': img12,
};

// Process gallery images with image map
export const galleryImages: GalleryImage[] = galleryData.galleryImages.map((image) => ({
  ...image,
  url: imageMap[image.url] || image.url,
}));
