
export interface ProfileData {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  about: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
  skills: {
    category: string;
    items: string[];
  }[];
  experience: {
    company: string;
    position: string;
    period: string;
    description: string[];
  }[];
  projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
  }[];
  blog: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    content: string;
    coverImage: string;
  }[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
