import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">TechTalent</h3>
            <p className="text-gray-400">
              Connect with the world's best IT professionals and developers for your next tech project.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Companies</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Developers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Post IT Project</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Enterprise Solutions</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">For Developers</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Find Tech Jobs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Developer Profile</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Skill Assessment</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">API Access</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} TechTalent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;