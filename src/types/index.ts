export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
}

export interface Example {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface CodeExample {
  id: string;
  title: string;
  description: string;
  code: string;
  language: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  tags: string[];
  icon: string;
}