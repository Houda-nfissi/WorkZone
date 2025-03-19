import React from 'react';
import { Code, Database, Globe, Shield, Cloud, Cpu } from 'lucide-react';

const categories = [
  { icon: Code, name: 'Software Development', count: '2,543 jobs' },
  { icon: Database, name: 'Database Administration', count: '873 jobs' },
  { icon: Globe, name: 'Web Development', count: '1,982 jobs' },
  { icon: Shield, name: 'Cybersecurity', count: '745 jobs' },
  { icon: Cloud, name: 'Cloud Computing', count: '951 jobs' },
  { icon: Cpu, name: 'DevOps', count: '832 jobs' },
];

const PopularCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Top IT Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
            >
              <category.icon className="w-10 h-10 text-purple-600" />
              <div className="ml-4">
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-500">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;