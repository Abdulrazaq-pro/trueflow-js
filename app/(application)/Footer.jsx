export default function TrueFlowFooter() {
  // Social media assets object
  const socialAssets = [
    {
      src: "/icons/socials/discord.png",
      alt: "Discord",
      href: "#",
    },
    {
      src: "/icons/socials/twitter.png",
      alt: "X (Twitter)",
      href: "#",
    },
    {
      src: "/icons/socials/linkedin.png",
      alt: "LinkedIn",
      href: "#",
    },
    {
      src: "/icons/socials/mail.png",
      alt: "Email",
      href: "#",
    },
  ];

  // Logo asset
  const logoAsset = {
    src: "/logo.png",
    alt: "TrueFlow Logo",
    width: 120,
    height: 40,
  };

  // Render social icons function
  const renderSocialIcons = () => (
    <div className="flex items-center space-x-4">
      {socialAssets.map((social, index) => (
        <a
          key={index}
          href={social.href}
          className="hover:opacity-75 transition-opacity"
        >
          <Image
            src={social.src}
            alt={social.alt}
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-gray-100 py-6 px-4">
      {/* Desktop version */}
      <div className="max-w-7xl mx-auto hidden md:flex items-center justify-between">
        {/* Left side - Social media icons */}
        {renderSocialIcons()}

        {/* Center - Copyright text */}
        <div className="text-gray-600 text-sm font-medium">
          Copyright © 2025 by TrueFlow. All rights reserved.
        </div>

        {/* Right side - Logo */}
        <div className="flex items-center">
          <Image
            src={logoAsset.src}
            alt={logoAsset.alt}
            width={logoAsset.width}
            height={logoAsset.height}
            className="h-10 w-auto"
          />
        </div>
      </div>

      {/* Mobile responsive version */}
      <div className="md:hidden flex flex-col items-center space-y-4">
        {renderSocialIcons()}

        <div className="text-gray-600 text-sm font-medium text-center">
          Copyright © 2025 by TrueFlow. All rights reserved.
        </div>

        <div className="flex items-center">
          <Image
            src={logoAsset.src}
            alt={logoAsset.alt}
            width={logoAsset.width}
            height={logoAsset.height}
            className="h-10 w-auto"
          />
        </div>
      </div>
    </footer>
  );
}
