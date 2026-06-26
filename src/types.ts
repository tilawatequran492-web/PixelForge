export interface Service {
  id: string;
  title: string;
  experience: number;
  description: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  role?: string;
  avatarUrl: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
}
