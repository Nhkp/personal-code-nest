export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="glass-card rounded-2xl p-8 md:p-12 space-y-6 hover:shadow-glow transition-all duration-500">
            <p className="text-lg text-foreground/90 leading-relaxed">
I’m a passionate software engineer with 3 years of professional experience building both proof-of-concepts and production-level applications and libraries. What began as an interest in parallel and hybrid computation has grown into a dedication to crafting pragmatic, efficient, and optimized solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
My expertise lies in low-level and backend programming, with a strong focus on performance, reliability, and clean architecture. I thrive in collaborative environments where I can learn from others, share my knowledge, and continuously grow as an engineer.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
Outside of coding, I enjoy sports, like running or cycling, and reading — whether it’s books, graphic novels, or newspapers. I also like strategy and board games and keep up with the latest trends through tech news and personal research.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
