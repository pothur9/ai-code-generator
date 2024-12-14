import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { Button } from '../ui/Button';

export function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `${
      isActive(path)
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
    } transition-colors`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">bolt</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <Link to="/documentation" className={linkClass('/documentation')}>Documentation</Link>
              <Link to="/examples" className={linkClass('/examples')}>Examples</Link>
              <Link to="/templates" className={linkClass('/templates')}>Templates</Link>
              <Link to="/enterprise" className={linkClass('/enterprise')}>Enterprise</Link>
              <Link to="/pricing" className={linkClass('/pricing')}>Pricing</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Link to="/playground" className={linkClass('/playground')}>
              <Button variant="primary">Start Coding</Button>
              </Link>
            </div>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/documentation" className="block px-3 py-2">Documentation</Link>
            <Link to="/examples" className="block px-3 py-2">Examples</Link>
            <Link to="/templates" className="block px-3 py-2">Templates</Link>
            <Link to="/enterprise" className="block px-3 py-2">Enterprise</Link>
            <Link to="/pricing" className="block px-3 py-2">Pricing</Link>
          </div>
        </div>
      )}
    </header>
  );
}