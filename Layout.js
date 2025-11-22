import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Home as HomeIcon } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Navigation */}
      <header className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to={createPageUrl('Home')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <HomeIcon className="w-8 h-8" />
              <span className="text-2xl font-bold">Immigration Guide</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link 
                to={createPageUrl('Home')} 
                className={`font-medium hover:text-yellow-200 transition-colors ${currentPageName === 'Home' ? 'text-yellow-200' : ''}`}
              >
                Home
              </Link>
              <Link 
                to={createPageUrl('USAImmigration')} 
                className={`font-medium hover:text-yellow-200 transition-colors ${currentPageName === 'USAImmigration' ? 'text-yellow-200' : ''}`}
              >
                USA Immigration
              </Link>
              <Link 
                to={createPageUrl('OtherCountries')} 
                className={`font-medium hover:text-yellow-200 transition-colors ${currentPageName === 'OtherCountries' ? 'text-yellow-200' : ''}`}
              >
                Other Countries
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <HomeIcon className="w-5 h-5" />
                Immigration Guide
              </h3>
              <p className="text-sm leading-relaxed">
                Your trusted companion for immigration resources and official embassy information worldwide. 
                We guide you to official sources for your journey.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to={createPageUrl('Home')} className="hover:text-orange-400 transition-colors">
                    Find Your Country
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('USAImmigration')} className="hover:text-orange-400 transition-colors">
                    U.S. Immigration
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('OtherCountries')} className="hover:text-orange-400 transition-colors">
                    Other Countries
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Important Notice</h3>
              <p className="text-sm leading-relaxed">
                This website provides links to official government resources only. 
                We do not provide legal advice. Please consult with licensed immigration professionals.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center text-sm">
            <p>© {new Date().getFullYear()} Immigration Guide. All rights reserved.</p>
            <p className="mt-2 text-slate-400">
              🏠 Helping families find their way home, one journey at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
