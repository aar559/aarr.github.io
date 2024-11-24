import React, { useState } from 'react';
import { Terminal, Github, LinkedinIcon, Mail, Shield, Cloud, Database, Lock, Code, Server, X } from 'lucide-react';

const HomePage = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "AZ-900",
      name: "Microsoft Azure Fundamentals",
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      description: "Validated knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.",
      skills: ["Cloud Computing", "Azure Services", "Cloud Security", "Compliance"],
      certificateImage: "/images/Screenshot 2024-11-24 134926.png"
    },
    {
      title: "AI-900",
      name: "Microsoft Azure AI Fundamentals",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      description: "Demonstrated understanding of AI workloads and considerations, fundamental principles of machine learning on Azure, and features of computer vision workloads.",
      skills: ["AI Services", "Machine Learning", "Computer Vision", "Natural Language Processing"],
      certificateImage: "/images/Screenshot 2024-11-24 134926.png"
    },
    {
      title: "SC-900",
      name: "Microsoft Security, Compliance, and Identity Fundamentals",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      description: "Proved knowledge of security, compliance, and identity fundamentals across cloud-based and related Microsoft services.",
      skills: ["Security Concepts", "Identity & Access", "Information Protection", "Security Management"],
      certificateImage: "/images/Screenshot 2024-11-24 134910.png"
    }
  ];

  const skills = [
    {
      category: "Security",
      items: ["Network Security", "Cryptography", "Security Analysis", "Penetration Testing"],
      icon: <Lock className="w-6 h-6" />
    },
    {
      category: "Cloud",
      items: ["Azure", "Cloud Security", "IAM", "Cloud Architecture"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      category: "Programming",
      items: ["Python", "Java", "Shell Scripting", "SQL"],
      icon: <Code className="w-6 h-6" />
    },
    {
      category: "Infrastructure",
      items: ["Linux", "Windows Server", "Docker", "Networking"],
      icon: <Server className="w-6 h-6" />
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen pt-16 flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="inline-block p-2 rounded-lg bg-blue-500 bg-opacity-10 mb-4">
            <Terminal className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Cybersecurity Student & Cloud Enthusiast
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Bachelor of Computer Science student specializing in Cybersecurity. 
            Microsoft certified in Azure, AI, and Security fundamentals.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a 
              href="https://github.com/aar559?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aaryan-bhati/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a 
              href="mailto:aaryanbhati05@gmail.com" 
              className="p-2 rounded-full hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.title}
                onClick={() => setSelectedCert(cert)}
                className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-4">
                  {cert.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{cert.title}</h3>
                    <p className="text-sm text-gray-400">{cert.name}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{cert.description}</p>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-gray-900 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skillGroup.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-400">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
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

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full p-6 relative">
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="flex items-center space-x-4 mb-6">
              {selectedCert.icon}
              <div>
                <h3 className="text-2xl font-bold">{selectedCert.title}</h3>
                <p className="text-gray-400">{selectedCert.name}</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6">{selectedCert.description}</p>

            {/* Certificate Image */}
            <div className="mb-6">
              <img 
                src={selectedCert.certificateImage} 
                alt={`${selectedCert.title} Certificate`}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {selectedCert.skills.map((skill) => (
                <span key={skill} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;