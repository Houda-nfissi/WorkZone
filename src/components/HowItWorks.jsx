import React from 'react';
import { FileText, Users, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Post a Project',
    description: 'Describe your project and receive competitive bids from freelancers within minutes'
  },
  {
    icon: Users,
    title: 'Choose Freelancers',
    description: 'Browse freelancer profiles, reviews, and portfolios to find the perfect match'
  },
  {
    icon: CheckCircle,
    title: 'Get Work Done',
    description: 'Safely pay for work when it has been completed and you\'re 100% satisfied'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="flex justify-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;