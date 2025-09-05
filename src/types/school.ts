export interface School {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: number;
  image?: string;
  email_id: string;
  website_url?: string;
  description?: string;
  established_year?: number;
  student_count?: number;
  rating?: number;
  created_at: string;
  updated_at: string;
}

export interface SchoolFormData {
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  email_id: string;
  website_url?: string;
  description?: string;
  established_year?: number;
  student_count?: number;
  image?: FileList;
}