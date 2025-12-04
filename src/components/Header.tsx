import logo from "@/assets/logo.png";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <header className="pt-8 pb-6 text-center animate-fade-in">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={logo}
          alt="Aapka Review Dost"
          className="w-32 h-32 mx-auto rounded-2xl shadow-soft object-contain bg-card p-3 border border-border"
        />
      </div>

      {/* Brand Name */}
      <h1 className="text-2xl font-extrabold text-foreground mb-2">
        Aapka Review Dost
      </h1>
      <p className="text-muted-foreground text-sm mb-6">
        Your trusted friend for honest reviews 👍
      </p>

      {/* Social Links */}
      <SocialLinks />
    </header>
  );
};

export default Header;
