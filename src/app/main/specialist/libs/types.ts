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
