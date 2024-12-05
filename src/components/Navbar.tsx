import { ShoppingBag, User, Menu, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCartStore } from '../store/cartStore';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  onCartClick: () => void;
}

export default function Navbar({ onCartClick }: NavbarProps) {
  const { user, signOut } = useAuth();
  const cartItems = useCartStore((state) => state.items);
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <ShoppingBag className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">Loyalty</span>
          </Link>
          
          <div className="hidden sm:flex space-x-8">
            <Link to="/category/men" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Men</Link>
            <Link to="/category/women" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Women</Link>
            <Link to="/category/kids" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Kids</Link>
            <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
            >
              <ShoppingBag className="h-6 w-6 text-gray-600 dark:text-gray-300" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {user ? (
              <>
                {user.role === 'admin' && (
                  <Link 
                    to="/admin" 
                    className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    Admin
                  </Link>
                )}
                <button
                  onClick={() => signOut()}
                  className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link 
                to="/login" 
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <User className="h-6 w-6" />
              </Link>
            )}
            <button className="sm:hidden">
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}