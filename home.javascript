<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome Home - Immigration Resources</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    .animate-pulse { animation: pulse 2s infinite; }
    .animate-bounce { animation: bounce 1s infinite; }
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
          <a href="#countries" class="inline-block">
            <button class="bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 px-8 py-6 text-lg rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-110 font-semibold">
              🏢 Start Your U.S. Journey
            </button>
          </a>
          <a href="#countries" class="inline-block">
            <button class="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-6 text-lg rounded-full shadow-xl transition-all duration-300 font-semibold">
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
              <span class="text-2xl">👥</span>
            </div>
            <div>
              <div class="text-4xl font-bold text-white" id="countriesCount">50+</div>
              <div class="text-orange-50 font-medium">Countries Covered</div>
            </div>
          </div>
        </div>
        
        <div class="bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
          <div class="flex items-center gap-4">
            <div class="bg-white/30 backdrop-blur-sm p-4 rounded-2xl">
              <span class="text-2xl">🏢</span>
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
              <span class="text-2xl">📚</span>
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
    <div class="max-w-7xl mx-auto px-6 py-20" id="countries">
      <div class="text-center mb-12">
        <div class="inline-block mb-4">
          <div class="w-20 h-20 text-orange-500 mx-auto animate-pulse text-5xl flex items-center justify-center">🌍</div>
        </div>
        <h2 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Where Are You From?
        </h2>
        <p class="text-xl text-slate-700 font-light">
          Every journey begins with a single step. Let's find the resources for <span class="font-semibold text-purple-600">your</span> home country 💫
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <div class="relative group">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search countries..." 
            class="w-full px-6 py-4 rounded-2xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-lg transition-all duration-300 group-hover:border-purple-300"
          />
          <span class="absolute right-4 top-1/2 transform -translate-y-1/2 text-2xl">🔍</span>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" id="countriesGrid">
        <!-- Countries will be dynamically inserted here -->
      </div>
    </div>

    <!-- Country Detail View -->
    <div id="countryDetail" class="hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div class="bg-white rounded-3xl max-w-2xl w-full my-8 shadow-2xl animate-slideUp">
        <div class="relative">
          <button id="closeDetail" class="absolute top-6 right-6 text-2xl hover:scale-110 transition-transform z-10">✕</button>
          <div id="detailContent" class="p-8">
            <!-- Detail content will be inserted here -->
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-12 mt-20">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-2xl font-bold mb-4">EduConnect</h3>
            <p class="text-slate-300">Connecting students worldwide with educational resources and opportunities.</p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-slate-300">
              <li><a href="#home" class="hover:text-orange-400 transition-colors">Home</a></li>
              <li><a href="#countries" class="hover:text-orange-400 transition-colors">Find Resources</a></li>
              <li><a href="#about" class="hover:text-orange-400 transition-colors">About</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">Connect</h4>
            <ul class="space-y-2 text-slate-300">
              <li><a href="#" class="hover:text-orange-400 transition-colors">Twitter</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Facebook</a></li>
              <li><a href="#" class="hover:text-orange-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-slate-700 pt-8 text-center text-slate-400">
          <p>&copy; 2024 EduConnect. All rights reserved. Made with 💜 for global education.</p>
        </div>
      </div>
    </footer>

    <style>
      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .animate-slideUp {
        animation: slideUp 0.3s ease-out;
      }

      .animate-pulse {
        animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }

      @keyframes pulse {
        0%, 100% {
          opacity: 1;
        }
        50% {
          opacity: 0.5;
        }
      }
    </style>

    <script>
      // Country data with educational resources
      const countries = [
        {
          name: "India",
          flag: "🇮🇳",
          description: "Home to diverse learning platforms",
          resources: [
            { name: "SWAYAM", url: "https://swayam.gov.in", type: "Online Courses" },
            { name: "BYJU'S", url: "https://byjus.com", type: "Learning App" },
            { name: "Khan Academy India", url: "https://www.khanacademy.org", type: "Free Courses" },
            { name: "Vedantu", url: "https://www.vedantu.com", type: "Online Tutoring" }
          ]
        },
        {
          name: "United States",
          flag: "🇺🇸",
          description: "Leading educational innovation hub",
          resources: [
            { name: "Khan Academy", url: "https://www.khanacademy.org", type: "Free Courses" },
            { name: "Coursera", url: "https://www.coursera.org", type: "Online Degrees" },
            { name: "edX", url: "https://www.edx.org", type: "University Courses" },
            { name: "MIT OpenCourseWare", url: "https://ocw.mit.edu", type: "Free MIT Courses" }
          ]
        },
        {
          name: "United Kingdom",
          flag: "🇬🇧",
          description: "Prestigious academic traditions",
          resources: [
            { name: "Open University", url: "https://www.open.ac.uk", type: "Distance Learning" },
            { name: "BBC Learning", url: "https://www.bbc.com/learning", type: "Educational Content" },
            { name: "Coursera", url: "https://www.coursera.org", type: "Online Courses" },
            { name: "FutureLearn", url: "https://www.futurelearn.com", type: "Online Learning" }
          ]
        },
        {
          name: "Canada",
          flag: "🇨🇦",
          description: "Quality education for all",
          resources: [
            { name: "Coursera", url: "https://www.coursera.org", type: "Online Courses" },
            { name: "edX", url: "https://www.edx.org", type: "University Courses" },
            { name: "Udemy", url: "https://www.udemy.com", type: "Skill Development" },
            { name: "Khan Academy", url: "https://www.khanacademy.org", type: "Free Courses" }
          ]
        },
        {
          name: "Australia",
          flag: "🇦🇺",
          description: "World-class education system",
          resources: [
            { name: "Coursera", url: "https://www.coursera.org", type: "Online Courses" },
            { name: "edX", url: "https://www.edx.org", type: "University Courses" },
            { name: "Open Universities Australia", url: "https://www.open.edu.au", type: "Distance Education" },
            { name: "Udemy", url: "https://www.udemy.com", type: "Skill Development" }
          ]
        },
        {
          name: "Germany",
          flag: "🇩🇪",
          description: "Engineering and innovation focus
