import React from 'react';

const Hero = () => {
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-no-repeat pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(5, 150, 105, 0.8), rgba(124, 58, 237, 0.8)), url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`
      }}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 uppercase leading-tight">
            Building Your Vision, One Project at a Time
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            20+ Years of Quality Construction Services in the Greater Area
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-amber-500 text-white px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:bg-amber-600 transition-all duration-300 transform hover:scale-105"
            >
              Get a Free Estimate
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-md font-semibold uppercase tracking-wider hover:bg-white hover:text-emerald-600 transition-all duration-300 transform hover:scale-105"
            >
              View Our Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;