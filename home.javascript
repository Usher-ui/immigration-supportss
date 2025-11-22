mport React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '@/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Globe2, Search, ArrowRight, Building2, BookOpen, Users } from 'lucide-react';

const SHADOW_COLORS = [
  'shadow-orange-500',
  'shadow-pink-500',
  'shadow-purple-500',
  'shadow-blue-500',
  'shadow-green-500',
  'shadow-yellow-500',
  'shadow-rose-500',
  'shadow-teal-500'
];

const GRADIENT_COLORS = [
  'from-orange-400 to-red-500',
  'from-pink-400 to-purple-500',
  'from-purple-400 to-indigo-500',
  'from-blue-400 to-cyan-500',
  'from-green-400 to-emerald-500',
  'from-yellow-400 to-orange-500',
  'from-rose-400 to-pink-500',
  'from-teal-400 to-green-500'
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const { data: countries = [], isLoading } = useQuery({
    queryKey: ['countries'],
    queryFn: () => base44.entities.Country.list('name', 100),
  });

  const regions = ['all', 'Asia', 'Europe', 'Africa', 'North America', 'South America', 'Oceania', 'Middle East'];

  const filteredCountries = countries.filter(country => {
    const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion = selectedRegion === 'all' || country.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-statue-of-liberty-and-downtown-manhattan-4330-large.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-pink-600/80 via-purple-700/80 to-blue-700/80" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,200,100,0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(255,100,200,0.2)_0%,_transparent_50%)]" />
        
        <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <Globe2 className="w-16 h-16 text-yellow-300 animate-pulse" />
              <div className="absolute -top-2 -right-2 text-4xl animate-bounce">🏠</div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center mb-6 tracking-tight drop-shadow-lg">
            Welcome Home to Your New Journey ✨
          </h1>
          
          <p className="text-xl md:text-2xl text-yellow-50 text-center max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            We're here to guide you every step of the way. Your dream of a new home starts with trusted resources and a warm welcome.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to={createPageUrl('USAImmigration')} asChild>
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 font-semibold cursor-pointer">
                <Building2 className="w-5 h-5 mr-2" />
                🇺🇸 Start Your U.S. Journey
              </Button>
            </Link>
            <Link to={createPageUrl('OtherCountries')} asChild>
              <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 font-semibold cursor-pointer">
                <Globe2 className="w-5 h-5 mr-2" />
                🌍 Explore Other Countries
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white">{countries.length}+</div>
                <div className="text-orange-50 font-medium">Countries Covered</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
                <Building2 className="w-8 h-8 text-white" />
              </div>I appreciate you reaching out, but I don't have any prior response to continue from. This appears to be the start of our conversation.
