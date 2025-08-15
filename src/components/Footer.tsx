import React from 'react';
import { Building, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-emerald-600 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Building className="text-amber-400 mr-2" size={32} />
              <span className="text-2xl font-bold">BuildMaster</span>
            </div>
            <p className="text-emerald-100 mb-6 leading-relaxed">
              Building excellence through quality craftsmanship and professional service since 2002.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            <ul className="space-y-3 text-emerald-100">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Residential Construction</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Commercial Buildings</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Renovations</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Project Management</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-300">Design-Build</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            <ul className="space-y-3 text-emerald-100">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-amber-400 transition-colors duration-300">Home</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-amber-400 transition-colors duration-300">Services</button></li>
              <li><button onClick={() => scrollToSection('projects')} className="hover:text-amber-400 transition-colors duration-300">Projects</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-amber-400 transition-colors duration-300">About Us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-amber-400 transition-colors duration-300">Contact</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative pb-3">
              Contact Info
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-amber-400"></div>
            </h3>
            <div className="space-y-4 text-emerald-100">
              <div className="flex items-start">
                <MapPin className="text-amber-400 mr-3 mt-1" size={16} />
                <p className="text-sm">123 Construction Way, Building City, BC 12345</p>
              </div>
              <div className="flex items-center">
                <Phone className="text-amber-400 mr-3" size={16} />
                <p className="text-sm">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-amber-400 mr-3" size={16} />
                <p className="text-sm">info@buildmaster.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-emerald-500 mt-12 pt-8 text-center text-emerald-100">
          <p>&copy; 2023 BuildMaster Construction. All Rights Reserved. | 
            <a href="#" className="hover:text-amber-400 transition-colors duration-300"> Privacy Policy</a> | 
            <a href="#" className="hover:text-amber-400 transition-colors duration-300"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;