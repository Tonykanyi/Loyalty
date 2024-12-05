import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    category: 'men',
    price: 29.99,
    stock: 50,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500',
    description: 'Premium cotton classic fit t-shirt'
  },
  {
    id: '2',
    name: 'Floral Summer Dress',
    category: 'women',
    price: 79.99,
    stock: 30,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500',
    description: 'Light and breezy floral print dress'
  },
  {
    id: '3',
    name: 'Kids Denim Overall',
    category: 'kids',
    price: 45.99,
    stock: 25,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1519457431-44ccd64a579b?w=500',
    description: 'Comfortable and durable denim overalls'
  }
];