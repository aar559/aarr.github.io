import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="p-2 rounded-full hover:bg-gray-800 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Aaryan Bhati. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
