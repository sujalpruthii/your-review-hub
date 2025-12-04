import { Instagram, Youtube, Twitter, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram", color: "hover:text-pink-500" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube", color: "hover:text-red-500" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter", color: "hover:text-sky-500" },
  { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp", color: "hover:text-green-500" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "hover:text-accent" },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`p-2.5 rounded-full bg-card shadow-card transition-all duration-300 hover:scale-110 hover:shadow-hover ${social.color}`}
        >
          <social.icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
