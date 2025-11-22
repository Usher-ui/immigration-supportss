import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import { createPageUrl } from '@/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Globe2, Search, ArrowRight, Building2, BookOpen, Users } from 'lucide-react';

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
            <Link to={createPageUrl('USAImmigration')}>
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 font-semibold">
                <Building2 className="w-5 h-5 mr-2" />
                🇺🇸 Start Your U.S. Journey
              </Button>
            </Link>
            <Link to={createPageUrl('OtherCountries')}>
              <Button variant="outline" className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 font-semibold">
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
              </div>
              <div>
                <div className="text-4xl font-bold text-white">100%</div>
                <div className="text-purple-50 font-medium">Official Resources</div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold text-white">Free</div>
                <div className="text-green-50 font-medium">Always & Forever</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Country Selection */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <Globe2 className="w-20 h-20 text-orange-500 mx-auto animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Where Are You From?
          </h2>
          <p className="text-xl text-slate-700 font-light">
            Every journey begins with a single step. Let's find the resources for <span className="font-semibold text-purple-600">your</span> home country 💫
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="🔍 Type your country name here..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-6 text-lg rounded-full shadow-xl border-2 border-orange-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-100 bg-white"
            />
          </div>

          {/* Region Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {regions.map((region, idx) => {
              const colors = [
                'from-orange-400 to-red-500',
                'from-pink-400 to-purple-500',
                'from-purple-400 to-indigo-500',
                'from-blue-400 to-cyan-500',
                'from-green-400 to-emerald-500',
                'from-yellow-400 to-orange-500',
                'from-rose-400 to-pink-500',
                'from-teal-400 to-green-500'
              ];
              return (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedRegion === region
                      ? `bg-gradient-to-r ${colors[idx % colors.length]} text-white shadow-lg shadow-${colors[idx % colors.length]}/50`
                      : 'bg-white text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 border-2 border-slate-200 hover:border-orange-300'
                  }`}
                >
                  {region === 'all' ? '🌍 All Regions' : region}
                </button>
              );
            })}
          </div>
        </div>

        {/* Countries Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg animate-pulse">
                <div className="h-12 w-12 bg-slate-200 rounded-xl mb-4" />
                <div className="h-6 bg-slate-200 rounded mb-2 w-3/4" />
                <div className="h-4 bg-slate-200 rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : filteredCountries.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map(country => (
              <Link
                key={country.id}
                to={createPageUrl(`CountryDetail?id=${country.id}`)}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-orange-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                    {country.flag_emoji || '🌍'}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">
                      {country.name}
                    </h3>
                    {country.region && (
                      <div className="text-sm text-slate-500 mb-3">
                        {country.region}
                      </div>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 text-sm line-clamp-3 leading-relaxed mb-4">
                  {country.description || `Find official U.S. immigration resources and embassy information for ${country.name}.`}
                </p>
                
                <div className="flex items-center text-orange-600 font-medium text-sm group-hover:text-orange-700">
                  Discover Your Path
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Globe2 className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <p className="text-xl text-slate-600">No countries found matching your search.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="text-6xl mb-6">🏡</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Don't See Your Country Yet?
          </h2>
          <p className="text-xl text-orange-50 mb-8 leading-relaxed">
            No worries! We're growing every day. You can still access all the general resources you need to start your journey. ✨
          </p>
          <Link to={createPageUrl('USAImmigration')}>
            <Button className="bg-white text-purple-900 hover:bg-yellow-50 px-10 py-6 text-lg rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 font-bold">
              🇺🇸 Explore U.S. Resources
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
