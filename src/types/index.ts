export interface Product {
  id: string;
  name: string;
  category: 'men' | 'women' | 'kids';
  price: number;
  stock: number;
  rating: number;
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  description: string;
}

export interface Sale {
  id: string;
  productId: string;
  quantity: number;
  total: number;
  date: Date;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'user';
  accessCode?: string;
}