import React, { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: 'BuildMaster transformed our outdated home into a modern masterpiece. Their attention to detail and commitment to quality was evident throughout the entire process.',
      author: 'Sarah Johnson',
      role: 'Homeowner - Maplewood Residence',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    },
    {
      text: 'The commercial building they constructed for our business exceeded all expectations. They delivered on time and within budget, which is rare in this industry.',
      author: 'Michael Chen',
      role: 'CEO - TechSolutions Inc.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      text: 'From the initial design consultation to the final walkthrough, the BuildMaster team was professional, communicative, and a pleasure to work with.',
      author: 'Emily Rodriguez',
      role: 'Property Developer - Urban Spaces',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-emerald-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with BuildMaster Construction.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                }`}
              >
                <div className="text-center px-8">
                  <div className="text-xl md:text-2xl italic mb-8 relative">
                    <span className="text-6xl text-amber-400 opacity-50 absolute -top-4 -left-4">"</span>
                    <span className="relative z-10">{testimonial.text}</span>
                    <span className="text-6xl text-amber-400 opacity-50 absolute -bottom-8 -right-4">"</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden border-3 border-amber-400 mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-left">
                        <h4 className="font-bold text-lg">{testimonial.author}</h4>
                        <p className="text-emerald-200">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-amber-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;