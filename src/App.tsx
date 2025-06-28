import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin, Clock, Wine, Users, Star, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  const carouselImages = [
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
    "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg",
    "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg",
    "https://images.pexels.com/photos/2795026/pexels-photo-2795026.jpeg",
    "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg",
    "https://images.pexels.com/photos/1089932/pexels-photo-1089932.jpeg",
    "https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg",
    "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg"
  ];

  const heroImages = [
    "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg",
    "https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg",
    "https://images.pexels.com/photos/1304540/pexels-photo-1304540.jpeg"
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'gallery', 'menu', 'events', 'story', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  useEffect(() => {
    const heroInterval = setInterval(() => {
      setHeroImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const cocktails = [
    {
      name: "Symposium Signature",
      description: "Premium gin, elderflower, fresh cucumber, lime zest",
      price: "$18"
    },
    {
      name: "Golden Philosophy",
      description: "Aged whiskey, honey liqueur, fresh thyme, lemon",
      price: "$16"
    },
    {
      name: "Dark Academia",
      description: "Mezcal, blackberry, rosemary smoke, lime",
      price: "$17"
    },
    {
      name: "Midnight Discourse",
      description: "Premium vodka, blackcurrant, sage, champagne",
      price: "$19"
    },
    {
      name: "Ancient Wisdom",
      description: "Aged rum, amaretto, fresh orange, cardamom",
      price: "$15"
    },
    {
      name: "Modern Classic",
      description: "Bourbon, aperol, fresh grapefruit, rosemary",
      price: "$16"
    }
  ];

  const appetizers = [
    {
      name: "Truffle Arancini",
      description: "Crispy risotto balls with wild mushroom and truffle oil",
      price: "$14"
    },
    {
      name: "Burrata & Prosciutto",
      description: "Creamy burrata, aged prosciutto, fig jam, sourdough",
      price: "$18"
    },
    {
      name: "Tuna Tartare",
      description: "Fresh yellowfin, avocado, citrus, sesame, wonton chips",
      price: "$22"
    },
    {
      name: "Wagyu Sliders",
      description: "Three premium beef sliders with aged cheddar, truffle aioli",
      price: "$24"
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Wine className="h-8 w-8 text-yellow-600" />
              <span className="text-xl font-bold">Symposium</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {[
                { name: 'Gallery', id: 'gallery' },
                { name: 'Menu', id: 'menu' },
                { name: 'Events', id: 'events' },
                { name: 'Our Story', id: 'story' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-yellow-600 ${
                    activeSection === item.id ? 'text-yellow-600' : 'text-gray-300'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Social Media Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-white transition-all mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/95 border-t border-gray-700">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {[
                  { name: 'Gallery', id: 'gallery' },
                  { name: 'Menu', id: 'menu' },
                  { name: 'Events', id: 'events' },
                  { name: 'Our Story', id: 'story' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-yellow-600 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
                <div className="flex space-x-4 px-3 py-2">
                  <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section with Automatic Background Carousel */}
      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {heroImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Hero background ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                index === heroImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Symposium
            <span className="block text-3xl md:text-4xl font-light text-yellow-600 mt-2">
              Bar & Lounge
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Where Philosophy Meets Mixology
          </p>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-yellow-600 text-black px-8 py-3 text-lg font-semibold rounded-full hover:bg-yellow-500 transition-colors"
          >
            Visit Us Today
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-yellow-600" />
        </div>
      </section>

      {/* Gallery Section with Carousel */}
      <section id="gallery" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Step into our world of sophisticated ambiance and exquisite craftsmanship
            </p>
          </div>

          {/* Image Carousel */}
          <div className="relative max-w-5xl mx-auto mb-12">
            <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg">
              <img
                src={carouselImages[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentImageIndex ? 'bg-yellow-600' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {carouselImages.slice(0, 8).map((src, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img
                  src={src}
                  alt={`Gallery thumbnail ${index + 1}`}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {index === currentImageIndex && (
                  <div className="absolute inset-0 border-2 border-yellow-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Menu</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover our carefully curated selection of premium cocktails and artisanal bites
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Cocktails */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-yellow-600 flex items-center">
                <Wine className="mr-3" />
                Signature Cocktails
              </h3>
              <div className="space-y-6">
                {cocktails.map((cocktail, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{cocktail.name}</h4>
                      <span className="text-yellow-600 font-bold">{cocktail.price}</span>
                    </div>
                    <p className="text-gray-400">{cocktail.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Appetizers */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-yellow-600 flex items-center">
                <Star className="mr-3" />
                Artisanal Bites
              </h3>
              <div className="space-y-6">
                {appetizers.map((item, index) => (
                  <div key={index} className="border-b border-gray-700 pb-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">{item.name}</h4>
                      <span className="text-yellow-600 font-bold">{item.price}</span>
                    </div>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Events</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join us for exclusive events and unforgettable experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
              <Wine className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Live Jazz Nights</h3>
              <p className="text-gray-400 mb-4">Every Friday & Saturday, 8 PM - 11 PM</p>
              <p className="text-sm text-gray-500">
                Experience smooth jazz performances by talented local artists while enjoying our premium cocktails.
              </p>
            </div>

            <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
              <Users className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Mixology Masterclasses</h3>
              <p className="text-gray-400 mb-4">Second Sunday of each month, 3 PM - 5 PM</p>
              <p className="text-sm text-gray-500">
                Learn the art of cocktail making from our expert mixologists in intimate group sessions.
              </p>
            </div>

            <div className="bg-black/50 rounded-lg p-6 border border-gray-700">
              <Star className="h-12 w-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold mb-3">Wine & Whiskey Tastings</h3>
              <p className="text-gray-400 mb-4">Monthly themed tastings</p>
              <p className="text-sm text-gray-500">
                Discover rare spirits and wines with guided tastings featuring premium selections from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <p className="text-xl text-gray-300 mb-6">
                Founded on the principle that great conversations are born from great drinks, Symposium Bar & Lounge brings together the ancient art of discourse with modern mixology.
              </p>
              <p className="text-gray-400 mb-6">
                Our name pays homage to the philosophical gatherings of ancient Greece, where thinkers would come together over wine to explore ideas and forge connections. Today, we continue that tradition in a contemporary setting, creating a space where every cocktail tells a story and every evening offers the possibility of meaningful connection.
              </p>
              <p className="text-gray-400">
                Our team of expert mixologists combines premium spirits with carefully sourced ingredients, creating cocktails that are both innovative and timeless. Each drink is crafted with precision and passion, reflecting our commitment to excellence in every detail.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg"
                alt="Master mixologist at work"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Experience the perfect blend of philosophy and mixology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Address</h4>
                    <p className="text-gray-300">123 Philosophy Lane</p>
                    <p className="text-gray-300">Downtown District, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Phone</h4>
                    <p className="text-gray-300">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Email</h4>
                    <p className="text-gray-300">hello@symposiumbar.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-lg mb-1">Hours</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Monday - Thursday: 5 PM - 12 AM</p>
                      <p>Friday - Saturday: 5 PM - 2 AM</p>
                      <p>Sunday: 5 PM - 11 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Happy Hour & Special Offers */}
            <div className="bg-black/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-yellow-600">Special Offers</h3>
              
              <div className="space-y-6">
                <div className="bg-yellow-600/10 rounded-lg p-6 border border-yellow-600/20">
                  <h4 className="text-xl font-bold text-yellow-600 mb-3">Happy Hour</h4>
                  <p className="text-gray-300 mb-2">Monday - Friday: 5 PM - 7 PM</p>
                  <p className="text-gray-300 font-semibold">25% off all cocktails</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Join us for discounted premium cocktails and light bites during our daily happy hour.
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-xl font-bold text-white mb-3">Private Events</h4>
                  <p className="text-gray-300 mb-2">Available for bookings</p>
                  <p className="text-sm text-gray-400">
                    Host your special occasion in our elegant space. Contact us for custom packages and group reservations.
                  </p>
                </div>

                <div className="bg-gray-700/50 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-xl font-bold text-white mb-3">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                      <Instagram className="h-8 w-8" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                      <Facebook className="h-8 w-8" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 mt-2">
                    Stay updated with our latest events and special cocktail creations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="bg-black border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; 2024 Symposium Bar & Lounge. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;