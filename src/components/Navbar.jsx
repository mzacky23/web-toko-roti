
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary' : 'text-warm-brown/80 hover:text-primary dark:text-gray-300 dark:hover:text-primary';
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-[#e6dec8] dark:border-[#3a352f]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-3xl">bakery_dining</span>
            <h1 className="text-2xl font-bold tracking-tight text-warm-brown dark:text-white">Toko Roti</h1>
          </Link>
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-semibold transition-colors ${isActive('/')}`}>Home</Link>
            <Link to="/catalog" className={`text-sm font-semibold transition-colors ${isActive('/catalog')}`}>Menu</Link>
            <Link to="/about" className={`text-sm font-semibold transition-colors ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`text-sm font-semibold transition-colors ${isActive('/contact')}`}>Contact</Link>
          </nav>
          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link to="/checkout" className="hidden md:flex items-center justify-center h-10 px-5 rounded-full bg-primary hover:bg-primary/90 text-white dark:text-[#171512] text-sm font-bold shadow-md transition-all transform hover:scale-105">
              <span className="material-symbols-outlined mr-2 text-[20px]">shopping_bag</span>
              <span>Cart (2)</span>
            </Link>
            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-warm-brown dark:text-white">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
