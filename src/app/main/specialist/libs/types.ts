export interface BaseSpecialist {
  name: string;
  specialization: string;
  experience: number;
  issues: string[];
  rating: number;
}

export interface Specialist extends BaseSpecialist {
  id: string;
}

export interface SpecialistProfile {
  name: string;
  specialization: string;
  experience: number;
  issues: string[];
  rating: number;
  reviews: number;
  location: string;
  education: string[];
  certifications: string[];
  languages: string[];
  availability: string[];
  consultationFee: number;
  about: string;
  contact: {
    phone: string;
    email: string;
  };
}
