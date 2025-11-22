<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Home - Your Immigration Journey Starts Here</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    .animate-pulse {
      animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-bounce {
      animation: bounce 1s infinite;
    }
  </style>
</head>
<body>
  <div class="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 via-purple-50 to-blue-50">
    
    <!-- Hero Section -->
    <div class="relative overflow-hidden">
      <div class="absolute inset-0">
        <video
          autoplay
          loop
          muted
          playsinline
          class="w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-statue-of-liberty-and-downtown-manhattan-4330-large.mp4" type="video/mp4">
        </video>
        <div class="absolute inset-0 bg-gradient-to-br from-orange-600/80 via-pink-600/80 via-purple-700/80 to-blue-700/80"></div>
      </div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_rgba(255,200,100,0.2)_0%,_transparent_50%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,_rgba(255,100,200,0.2)_0%,_transparent_50%)]"></div>
      
      <div class="relative max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div class="flex items-center justify-center mb-6">
          <div class="relative">
            <div class="w-16 h-16 text-yellow-300 animate-pulse text-4xl flex items-center justify-center">🌍</div>
            <div class="absolute -top-2 -right-2 text-4xl animate-bounce">🏠</div>
          </div>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-white text-center mb-6 tracking-tight drop-shadow-lg">
          Welcome Home to Your New Journey ✨
        </h1>
        
        <p class="text-xl md:text-2xl text-yellow-50 text-center max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          We're here to guide you every step of the way. Your dream of a new home starts with trusted resources and a warm welcome.
        </p>

        <div class="flex flex-wrap justify-center gap-4">
          <a href="#usa-section">
            <button class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-110 font-semibold">
              <i class="fas fa-building mr-2"></i>
              🇺🇸 Start Your U.S. Journey
            </button>
          </a>
          <a href="#countries-section">
            <button class="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 font-semibold">
              <i class="fas fa-globe mr-2"></i>
              🌍 Explore Other Countries
            </button>
          </a>
        </div>
      </div>
    </div>

    <!-- Quick Stats -->
    <div class="max-w-7xl mx-auto px-6 -mt-12 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
              <i class="fas fa-users text-2xl text-white"></i>
            </div>
            <div>
              <div class="text-4xl font-bold text-white" id="country-count">195+</div>
              <div class="text-orange-50 font-medium">Countries Covered</div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
              <i class="fas fa-building text-2xl text-white"></i>
            </div>
            <div>
              <div class="text-4xl font-bold text-white">100%</div>
              <div class="text-purple-50 font-medium">Official Resources</div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-green-400 to-teal-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
              <i class="fas fa-book-open text-2xl text-white"></i>
            </div>
            <div>
              <div class="text-4xl font-bold text-white">Free</div>
              <div class="text-green-50 font-medium">Always & Forever</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Country Selection -->
    <div class="max-w-7xl mx-auto px-6 py-20" id="countries-section">
      <div class="text-center mb-12">
        <div class="inline-block mb-4 text-5xl animate-pulse">🌍</div>
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
