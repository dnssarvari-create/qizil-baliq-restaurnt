export type Language = 'az' | 'ru' | 'en';

export interface MenuItem {
  id: string;
  name: {
    az: string;
    ru: string;
    en: string;
  };
  description: {
    az: string;
    ru: string;
    en: string;
  };
  category: 'seafood' | 'kebabs' | 'sides' | 'drinks' | 'tea';
  isPopular?: boolean;
  isPlaceholder?: boolean;
  priceNote?: {
    az: string;
    ru: string;
    en: string;
  };
  image?: string;
}

export interface ReviewItem {
  id: string;
  quote: {
    az: string;
    ru: string;
    en: string;
  };
  source: string;
  authorLabel: {
    az: string;
    ru: string;
    en: string;
  };
  rating: number;
}

export interface GalleryPhoto {
  id: string;
  title: {
    az: string;
    ru: string;
    en: string;
  };
  category: 'interior' | 'food' | 'seafood' | 'atmosphere' | 'details';
  categoryLabel: {
    az: string;
    ru: string;
    en: string;
  };
  image: string;
  aspect: 'landscape' | 'portrait' | 'square';
}
