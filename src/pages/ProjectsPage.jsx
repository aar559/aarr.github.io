import React from 'react';

const ProjectsPage = () => {
  return (
    <section className="py-20 px-4 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Security Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Network Security Analysis Tool</h3>
            <p className="text-gray-400 mb-4">
              Developed a Python-based tool for analyzing network traffic and detecting potential security threats.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-sm">Python</span>
              <span className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-sm">Network Security</span>
              <span className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-sm">Wireshark</span>
            </div>
          </div>
          
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Cloud Security Framework</h3>
            <p className="text-gray-400 mb-4">
              Implemented a security framework for Azure cloud infrastructure following best practices and compliance requirements.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-sm">Azure</span>
              <span className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-sm">Security</span>
              <span className="px-3 py-1 bg-blue-500 bg-opacity-10 text-blue-400 rounded-full text-sm">IAM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

