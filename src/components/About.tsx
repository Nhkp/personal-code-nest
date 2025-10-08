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
              I'm a passionate software engineer with over 5 years of experience building web applications 
              that make a difference. My journey in tech started with a curiosity about how things work, 
              and evolved into a career focused on creating innovative solutions.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              I specialize in full-stack development, with expertise in modern JavaScript frameworks, 
              cloud infrastructure, and scalable architecture. I thrive in collaborative environments 
              where I can learn from others and share my knowledge.
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing 
              technical articles, or exploring the latest trends in web development and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
