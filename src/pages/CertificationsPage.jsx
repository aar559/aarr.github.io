import React from 'react';
import { Shield, Cloud, Database } from 'lucide-react';

const CertificationsPage = () => {
  const certifications = [
    {
      title: "AZ-900",
      name: "Microsoft Azure Fundamentals",
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      description: "Validated knowledge of cloud concepts, Azure services, Azure workloads, security and privacy in Azure, as well as Azure pricing and support.",
      date: "2024",
      skills: ["Cloud Computing", "Azure Services", "Cloud Security", "Compliance"]
    },
    {
      title: "AI-900",
      name: "Microsoft Azure AI Fundamentals",
      icon: <Database className="w-8 h-8 text-purple-500" />,
      description: "Demonstrated understanding of AI workloads and considerations, fundamental principles of machine learning on Azure, and features of computer vision workloads.",
      date: "2024",
      skills: ["AI Services", "Machine Learning", "Computer Vision", "Natural Language Processing"]
    },
    {
      title: "SC-900",
      name: "Microsoft Security Fundamentals",
      icon: <Shield className="w-8 h-8 text-green-500" />,
      description: "Proved knowledge of security, compliance, and identity fundamentals across cloud-based and related Microsoft services.",
      date: "2024",
      skills: ["Security Concepts", "Identity & Access", "Information Protection", "Security Management"]
    }
  ];

  return (
    <section className="py-20 px-4 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div 
              key={cert.title}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-colors"
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
  );
};

export default CertificationsPage;
