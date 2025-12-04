const AboutSection = () => {
  return (
    <section 
      className="bg-card rounded-2xl p-5 shadow-card mb-8 animate-fade-in-up border border-border/50"
      style={{ animationDelay: "200ms" }}
    >
      <h2 className="font-bold text-foreground mb-2 flex items-center gap-2">
        <span className="text-lg">👋</span>
        About Me
      </h2>
      <p className="text-muted-foreground text-sm leading-relaxed">
        Hey there! I'm your review dost (friend) who helps you make informed decisions. 
        From the latest tech gadgets to fitness gear, I bring you honest, detailed reviews 
        so you can spend your money wisely. Explore my recommendations below!
      </p>
    </section>
  );
};

export default AboutSection;
