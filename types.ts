
export interface Company {
  id: string;
  name: string;
  description: string;
  industry: string;
  role: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: 'Business' | 'Philanthropy' | 'Travel' | 'Events';
}
