import React from 'react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Years Experience' },
    { number: '350+', label: 'Projects Completed' },
    { number: '50+', label: 'Professional Staff' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-600 mb-4">About Our Company</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Learn about our history, values, and what sets us apart in the construction industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Construction Team"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold text-emerald-600 mb-6">Building Excellence Since 2002</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                BuildMaster Construction was founded with a simple mission: to deliver exceptional quality 
                construction services with integrity, professionalism, and attention to detail.
              </p>
              <p>
                Over the past two decades, we've grown from a small local contractor to a respected 
                full-service construction firm serving residential and commercial clients throughout the region.
              </p>
              <p>
                What sets us apart is our commitment to craftsmanship, our experienced team of professionals, 
                and our dedication to building lasting relationships with our clients.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;