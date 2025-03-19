import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-purple-50 to-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Find Expert{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              IT Talent
            </span>{' '}
            On Demand
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with top developers, designers, and IT professionals from around the world.
            Get your tech projects done by the best in the industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors">
              Hire IT Talent
            </button>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors">
              Find Tech Jobs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;