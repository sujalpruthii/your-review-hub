import { ChevronRight } from "lucide-react";
import LinkCard from "./LinkCard";

interface CategoryItem {
  title: string;
  image: string;
  href: string;
  buttonText?: string;
}

interface CategorySectionProps {
  title: string;
  items: CategoryItem[];
  delay?: number;
}

const CategorySection = ({ title, items, delay = 0 }: CategorySectionProps) => {
  return (
    <section 
      className="animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
          <span className="w-1 h-6 rounded-full accent-gradient" />
          {title}
        </h2>
        <button className="text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
          See all
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="relative -mx-4 px-4">
        <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-snap-x pb-2">
          {items.map((item, index) => (
            <LinkCard
              key={index}
              title={item.title}
              image={item.image}
              href={item.href}
              buttonText={item.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
