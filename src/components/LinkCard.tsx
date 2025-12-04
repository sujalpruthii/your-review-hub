import { ExternalLink } from "lucide-react";

interface LinkCardProps {
  title: string;
  image: string;
  href: string;
  buttonText?: string;
}

const LinkCard = ({ title, image, href, buttonText = "View" }: LinkCardProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex-shrink-0 w-40 sm:w-48 scroll-snap-start"
    >
      <div className="relative overflow-hidden rounded-xl bg-card shadow-card transition-all duration-300 group-hover:shadow-hover group-hover:-translate-y-1">
        {/* Image */}
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        {/* Content */}
        <div className="p-3">
          <h3 className="font-semibold text-sm text-foreground line-clamp-2 mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          
          {/* Button */}
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium px-3 py-1.5 rounded-full accent-gradient text-accent-foreground transition-all duration-300 group-hover:shadow-md">
              {buttonText}
            </span>
            <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;
