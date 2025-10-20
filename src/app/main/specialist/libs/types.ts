export interface BaseSpecialist {
  name: string;
  specialization: string;
  experience: string;
  issues: string[];
  rating: number;
}

export interface Specialist extends BaseSpecialist {
  id: string;
}
