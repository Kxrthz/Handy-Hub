'use client';

import { Search, MapPin, Star, Zap, Lock, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { icon: '🔧', name: 'Repairs', desc: 'Quick fixes for home issues' },
    { icon: '🧹', name: 'Cleaning', desc: 'Professional cleaning services' },
    { icon: '💧', name: 'Plumbing', desc: 'Expert plumbing solutions' },
    { icon: '⚡', name: 'Electrical', desc: 'Licensed electricians' },
    { icon: '🏠', name: 'Maintenance', desc: 'Regular home maintenance' },
    { icon: '🎨', name: 'Painting', desc: 'Interior & exterior painting' },
  ];

  const features = [
    { icon: Lock, title: 'Verified Providers', desc: 'All professionals are background checked' },
    { icon: CheckCircle, title: 'Quality Guaranteed', desc: '30-day warranty on all services' },
    { icon: Zap, title: 'Real-time Tracking', desc: 'Track your service in real-time' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            HandyHub
          </div>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-purple-400 transition">Services</a>
            <a href="#features" className="hover:text-purple-400 transition">Features</a>
            <a href="#providers" className="hover:text-purple-400 transition">Providers</a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
              Sign In
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-purple-500/20 p-4 flex flex-col gap-4">
            <a href="#services" className="hover:text-purple-400">Services</a>
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#providers" className="hover:text-purple-400">Providers</a>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg w-full">
              Sign In
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 bg-clip-text text-transparent leading-tight">
            All Home Services in One Place
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Connect with verified professionals for repairs, cleaning, plumbing, and more.
            Book instantly. Pay securely. Track in real-time.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12 flex gap-2 bg-slate-800 rounded-full p-2 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
            <div className="flex items-center gap-2 px-4 flex-1">
              <Search size={20} className="text-purple-400" />
              <input
                type="text"
                placeholder="What service do you need?"
                className="bg-transparent outline-none w-full placeholder-slate-400"
              />
            </div>
            <div className="flex items-center gap-2 px-4 border-l border-purple-500/30">
              <MapPin size={20} className="text-purple-400" />
              <input
                type="text"
                placeholder="Your location"
                className="bg-transparent outline-none w-full placeholder-slate-400"
              />
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition flex items-center gap-2 whitespace-nowrap">
              Search <ArrowRight size={18} />
            </button>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
              Book a Service
            </button>
            <button className="border border-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition">
              Become a Provider
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Popular Services
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-slate-700/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10 transition cursor-pointer group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-slate-400 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            Why Choose HandyHub?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full">
                      <Icon size={32} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-y border-purple-500/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-slate-300 mb-8">
            Join thousands of satisfied customers and professionals on HandyHub.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition">
              Get Started
            </button>
            <button className="border border-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-purple-500/20 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">HandyHub</h3>
              <p className="text-slate-400 text-sm">All home services in one place.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Repairs</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Cleaning</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Plumbing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">About</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2024 HandyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
