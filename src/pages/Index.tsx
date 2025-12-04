import Header from "@/components/Header";
import AboutSection from "@/components/AboutSection";
import CategorySection from "@/components/CategorySection";

// Import images
import tech1 from "@/assets/tech-1.jpg";
import tech2 from "@/assets/tech-2.jpg";
import tech3 from "@/assets/tech-3.jpg";
import tech4 from "@/assets/tech-4.jpg";
import fitness1 from "@/assets/fitness-1.jpg";
import fitness2 from "@/assets/fitness-2.jpg";
import fitness3 from "@/assets/fitness-3.jpg";
import fitness4 from "@/assets/fitness-4.jpg";

const techItems = [
  {
    title: "Best Budget Smartphones 2024",
    image: tech1,
    href: "#",
    buttonText: "Check Out",
  },
  {
    title: "Top Wireless Headphones",
    image: tech2,
    href: "#",
    buttonText: "View",
  },
  {
    title: "Laptops Under ₹50,000",
    image: tech3,
    href: "#",
    buttonText: "Compare",
  },
  {
    title: "Gaming Keyboards Guide",
    image: tech4,
    href: "#",
    buttonText: "Explore",
  },
];

const fitnessItems = [
  {
    title: "Home Gym Equipment",
    image: fitness1,
    href: "#",
    buttonText: "Shop Now",
  },
  {
    title: "Best Fitness Trackers",
    image: fitness2,
    href: "#",
    buttonText: "Review",
  },
  {
    title: "Supplements Guide",
    image: fitness3,
    href: "#",
    buttonText: "Learn More",
  },
  {
    title: "Running Shoes Ranking",
    image: fitness4,
    href: "#",
    buttonText: "See List",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 pb-12">
        {/* Header with Logo & Social Links */}
        <Header />

        {/* About Section */}
        <AboutSection />

        {/* Categories */}
        <div className="space-y-8">
          <CategorySection 
            title="Tech Reviews" 
            items={techItems} 
            delay={400}
          />
          
          <CategorySection 
            title="Fitness Picks" 
            items={fitnessItems} 
            delay={600}
          />
        </div>

        {/* Footer */}
        <footer 
          className="mt-12 text-center animate-fade-in"
          style={{ animationDelay: "800ms" }}
        >
          <p className="text-xs text-muted-foreground">
            Made with ❤️ by Aapka Review Dost
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
