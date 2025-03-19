import React from 'react';
import { Star } from 'lucide-react';

const freelancers = [
  {
    name: 'Alex Chen',
    title: 'Full Stack Developer',
    rating: 4.9,
    reviews: 127,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    hourlyRate: '$95/hr',
    skills: ['React', 'Node.js', 'AWS']
  },
  {
    name: 'Sarah Miller',
    title: 'DevOps Engineer',
    rating: 4.8,
    reviews: 93,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    hourlyRate: '$105/hr',
    skills: ['Docker', 'Kubernetes', 'CI/CD']
  },
  {
    name: 'David Kumar',
    title: 'Security Specialist',
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    hourlyRate: '$115/hr',
    skills: ['Penetration Testing', 'Security Audits', 'Cloud Security']
  }
];

const FeaturedFreelancers = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Top IT Professionals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.name}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center">
                  <img
                    src={freelancer.image}
                    alt={freelancer.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">{freelancer.name}</h3>
                    <p className="text-gray-600">{freelancer.title}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-gray-900 font-medium">{freelancer.rating}</span>
                    <span className="ml-1 text-gray-500">({freelancer.reviews} reviews)</span>
                  </div>
                  <p className="mt-2 text-purple-600 font-semibold">{freelancer.hourlyRate}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {freelancer.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-50 text-purple-700 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="mt-4 w-full bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedFreelancers;