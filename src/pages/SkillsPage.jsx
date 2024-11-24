import React from 'react';
import { Lock, Cloud, Code, Server } from 'lucide-react';

const SkillsPage = () => {
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
    <section className="py-20 px-4 min-h-screen pt-24 bg-gray-800">
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
  );
};

export default SkillsPage;

