import React from "react";
import { Twitter, Linkedin, MessageCircle, Mail } from "lucide-react";

const CommunitySection = () => {
  const socialLinks = [
    {
      name: "X (Twitter)",
      icon: Twitter,
      href: "#",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
    },
    {
      name: "Discord",
      icon: MessageCircle,
      href: "#",
    },
    {
      name: "Email",
      icon: Mail,
      href: "#",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="bg-black rounded-2xl p-6 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8 text-white">
          Join the TrueFlow Community
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          {socialLinks.map((link) => {
            const IconComponent = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center justify-center gap-3 px-6 py-3 w-full bg-gray-800 text-white rounded-lg font-medium text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg hover:bg-neutral-700"
              >
                <IconComponent className="w-4 h-4" />
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
