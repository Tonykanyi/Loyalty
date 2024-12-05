import { Star, ShoppingBag } from 'lucide-react';
import { Product } from '../types';
import { useCartStore } from '../store/cartStore';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const addToCart = useCartStore((state) => state.addItem);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{product.description}</p>
        <div className="flex items-center mt-2">
          <Star className="h-5 w-5 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">{product.rating}</span>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">${product.price}</span>
          <span className="text-sm text-gray-500 dark:text-gray-400">{product.stock} in stock</span>
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingBag className="h-5 w-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}