export type MainCategory = 'cars' | 'beauty';

export type CarCategory = 'electric' | 'luxury' | 'suv' | 'sports' | 'hybrid';
export type BeautyCategory = 'skincare' | 'haircare' | 'makeup' | 'fragrance' | 'tools';

export interface CategoryFilter {
  main: MainCategory;
  sub?: CarCategory | BeautyCategory;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
  images?: string[];
  video?: string;
  productId?: string;
}

export interface SalesData {
  platform: string;
  price: string;
  url: string;
  inStock: boolean;
  discount?: {
    original: string;
    percentage: number;
  };
  shipping?: string;
  rating?: number;
  reviews?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: MainCategory;
  image: string;
  readTime: string;
  salesTrends?: {
    title: string;
    description: string;
    data: {
      platform: string;
      values: { date: string; price: number }[];
    }[];
  };
  relatedProducts?: {
    name: string;
    sales: SalesData[];
  }[];
}

export interface ComparableProduct {
  name: string;
  price: string;
  rating: number;
  specifications: Record<string, string>;
  keyDifferences: string[];
}

export interface Product {
  id: string;
  name: string;
  category: MainCategory;
  subCategory: CarCategory | BeautyCategory;
  rating: number;
  image: string;
  description: string;
  reviews?: Review[];
  price: string;
  brand: string;
  features: string[];
  pros?: string[];
  cons?: string[];
  specifications: Record<string, string>;
  trending?: boolean;
  new?: boolean;
  purchaseLink: string;
  monthlyRatings?: { month: string; rating: number }[];
  sales?: SalesData[];
  comparableProducts?: ComparableProduct[];
}