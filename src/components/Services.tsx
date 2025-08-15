import React from 'react';
import { Home, Building, Hammer, ClipboardList, Compass, Leaf } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home size={48} />,
      title: 'Residential Construction',
      description: 'Custom home building, additions, and complete renovations tailored to your lifestyle and needs.'
    },
    {
      icon: <Building size={48} />,
      title: 'Commercial Buildings',
      description: 'Office spaces, retail buildings, and industrial facilities built to code and business requirements.'
    },
    {
      icon: <Hammer size={48} />,
      title: 'Renovations',
      description: 'Transform your existing space with our quality renovation services and design expertise.'
    },
    {
      icon: <ClipboardList size={48} />,
      title: 'Project Management',
      description: 'Professional oversight of your construction project from conception to completion.'
    },
    {
      icon: <Compass size={48} />,
      title: 'Design-Build',
      description: 'Integrated approach combining design and construction for seamless project execution.'
    },
    {
      icon: <Leaf size={48} />,
      title: 'Sustainable Construction',
      description: 'Eco-friendly building solutions that reduce environmental impact and operating costs.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-600 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of construction services to meet all your building needs, 
            from residential to commercial projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="text-purple-600 mb-6 flex justify-center group-hover:text-amber-500 transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-emerald-600 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;