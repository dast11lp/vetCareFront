export interface ServiceType {
  id: number;
  name: string;
  description: string;
  durationMinutes: number;
  basePrice: number;
  requiredSpecialistType: {
    id: number;
    name: string;
  };
}

export interface ServiceContent {
  id: number;
  title: string;
  url: string;
  img: string;
  paragraph: string
}
