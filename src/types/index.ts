export type Lang = 'en' | 'es';

export interface Product {
  id: string;
  name: string;
  name_es: string;
  collection: string;
  collection_es: string;
  season: string;
  sku: string;
  passport_id: string;
  description: string | null;
  description_es: string | null;
  hero_image_url: string | null;
  back_image_url: string | null;
  detail_image_url: string | null;
  created_at: string;
}

export interface Material {
  id: string;
  product_id: string;
  name: string;
  name_es: string;
  fabric_type: string;
  fabric_type_es: string;
  origin_country: string;
  origin_region: string | null;
  composition_descriptor: string;
  composition_descriptor_es: string;
  color: string | null;
  certification: string | null;
  supplier_name: string | null;
  sort_order: number;
}

export interface TimelineEvent {
  id: string;
  product_id: string;
  stage: string;
  stage_es: string;
  location: string;
  country: string;
  event_date: string | null;
  description: string | null;
  description_es: string | null;
  verified: boolean;
  sort_order: number;
}

export interface Certification {
  id: string;
  product_id: string;
  name: string;
  issuing_body: string;
  year: number | null;
  description: string | null;
  description_es: string | null;
  icon_key: string | null;
}

export interface PassportData {
  product: Product;
  materials: Material[];
  timeline: TimelineEvent[];
  certifications: Certification[];
}
