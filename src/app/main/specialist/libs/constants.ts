import type { Specialist, SpecialistProfile } from "./types";

export const specialists: Specialist[] = [
  {
    id: "1",
    name: "John Doe",
    specialization: "Cardiologist",
    experience: 10,
    issues: ["Heart Attack", "Stroke", "Hypertension"],
    rating: 4.5,
  },
  {
    id: "2",
    name: "Jane Smith",
    specialization: "Oncologist",
    experience: 15,
    issues: ["Cancer"],
    rating: 4.8,
  },
  {
    id: "3",
    name: "Michael Johnson",
    specialization: "Psychiatrist",
    experience: 8,
    issues: ["Depression", "Anxiety"],
    rating: 4.2,
  },
  {
    id: "4",
    name: "Emily Brown",
    specialization: "Orthopedic Surgeon",
    experience: 12,
    issues: ["Back Pain", "Arthritis"],
    rating: 4.7,
  },
  {
    id: "5",
    name: "David Wilson",
    specialization: "Pediatrician",
    experience: 7,
    issues: ["Childhood Diseases", "Vaccinations"],
    rating: 4.3,
  },
  {
    id: "6",
    name: "Sarah Davis",
    specialization: "Dermatologist",
    experience: 9,
    issues: ["Skin Conditions", "Cosmetic Procedures"],
    rating: 4.6,
  },
  {
    id: "7",
    name: "Robert Taylor",
    specialization: "Neurologist",
    experience: 11,
    issues: ["Brain Disorders", "Nervous System Diseases"],
    rating: 4.4,
  },
  {
    id: "8",
    name: "Jennifer Anderson",
    specialization: "Gynecologist",
    experience: 10,
    issues: ["Women's Health", "Reproductive Issues"],
    rating: 4.5,
  },
  {
    id: "9",
    name: "Daniel Martinez",
    specialization: "Endocrinologist",
    experience: 13,
    issues: ["Diabetes", "Hormonal Disorders"],
    rating: 4.7,
  },
  {
    id: "10",
    name: "Laura Thompson",
    specialization: "Ophthalmologist",
    experience: 14,
    issues: ["Eye Disorders", "Vision Problems"],
    rating: 4.9,
  },
  {
    id: "11",
    name: "Christopher White",
    specialization: "Urologist",
    experience: 11,
    issues: ["Urinary Tract Disorders", "Male Reproductive Health"],
    rating: 4.6,
  },
  {
    id: "12",
    name: "Amanda Lee",
    specialization: "Dentist",
    experience: 10,
    issues: ["Oral Health", "Dental Procedures"],
    rating: 4.5,
  },
  {
    id: "13",
    name: "Brian Hall",
    specialization: "Allergist",
    experience: 9,
    issues: ["Allergies", "Immunology"],
    rating: 4.4,
  },
  {
    id: "14",
    name: "Samantha Clark",
    specialization: "Nutritionist",
    experience: 8,
    issues: ["Dietary Advice", "Nutritional Disorders"],
    rating: 4.3,
  },
  {
    id: "15",
    name: "Matthew King",
    specialization: "Physical Therapist",
    experience: 7,
    issues: ["Rehabilitation", "Musculoskeletal Disorders"],
    rating: 4.2,
  },
];

export const specialist: SpecialistProfile = {
  name: "John Doe",
  specialization: "Cardiologist",
  experience: 10,
  issues: [
    "Heart Attack",
    "Stroke",
    "Hypertension",
    "Arrhythmia",
    "Heart Failure",
  ],
  rating: 4.5,
  reviews: 127,
  location: "New York Medical Center",
  education: [
    "MD - Harvard Medical School",
    "Board Certified in Cardiology",
    "PhD in Cardiovascular Research",
  ],
  certifications: [
    "American Board of Internal Medicine",
    "Advanced Cardiac Life Support",
    "Cardiovascular Disease Certification",
  ],
  languages: ["English", "Spanish", "French"],
  availability: ["Mon-Fri: 9:00 AM - 5:00 PM", "Sat: 10:00 AM - 2:00 PM"],
  consultationFee: 200,
  about:
    "Dr. John Doe is a renowned cardiologist with over 10 years of experience in treating complex cardiovascular conditions. He specializes in interventional cardiology and has published numerous research papers in medical journals.",
  contact: {
    phone: "+1 (555) 123-4567",
    email: "john.doe@medicalcenter.com",
  },
};

export const specialties = [
  {
    label: "Cardiologist",
    value: "cardiologist",
  },
  {
    label: "Dermatologist",
    value: "dermatologist",
  },
  {
    label: "Endocrinologist",
    value: "endocrinologist",
  },
];

export const locations = [
  {
    label: "Nigeria",
    value: "nigeria",
  },
  {
    label: "Ghana",
    value: "ghana",
  },
  {
    label: "Kenya",
    value: "kenya",
  },
];

export const issues = [
  {
    label: "Heart Attack",
    value: "heart-attack",
  },
  {
    label: "Stroke",
    value: "stroke",
  },
  {
    label: "Hypertension",
    value: "hypertension",
  },
];

export const ratings = [
  {
    label: "4.5",
    value: 4.5,
  },
  {
    label: "4.8",
    value: 4.8,
  },
  {
    label: "4.2",
    value: 4.2,
  },
];

export const experiences = [
  {
    label: "10",
    value: 10,
  },
  {
    label: "15",
    value: 15,
  },
  {
    label: "8",
    value: 8,
  },
];
