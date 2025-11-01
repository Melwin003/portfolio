import profileHero from "@/assets/profile-hero.jpg";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-metallic opacity-20 blur-3xl group-hover:opacity-30 transition-opacity duration-500" />
            <div className="relative glass-panel p-2 rounded-2xl transform hover:scale-[1.02] transition-all duration-500">
              <img
                src={profileHero}
                alt="Melwin Shibu"
                className="w-full h-auto rounded-xl shadow-deep"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-terminal-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-metallic-green">
                About Me
              </h2>
              <div className="h-1 w-24 bg-gradient-metallic rounded-full" />
            </div>

            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Finance graduate with a deep interest in{" "}
                <span className="text-terminal-green font-semibold">consulting</span>,{" "}
                <span className="text-terminal-gold font-semibold">valuation</span>, and{" "}
                <span className="text-terminal-green font-semibold">automation</span>.
              </p>
              
              <p>
                Builder of{" "}
                <span className="text-terminal-green font-bold">WhiteSignal</span>, 
                an AI-driven insider-trading signal platform that transforms complex 
                financial data into actionable intelligence.
              </p>
              
              <p>
                Passionate about blending{" "}
                <span className="text-foreground font-semibold">data</span>,{" "}
                <span className="text-foreground font-semibold">design</span>, and{" "}
                <span className="text-foreground font-semibold">decision-making</span>{" "}
                to create innovative solutions in the finance sector.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
            {[
              { label: "Projects", value: "3+" },
              { label: "Certifications", value: "8+" },
              { label: "Skills", value: "15+" },
            ].map((stat, index) => (
                <div
                  key={index}
                  className="glass-panel p-4 rounded-lg text-center transform hover:scale-105 transition-all duration-300 hover:glow-green"
                >
                  <div className="text-3xl font-bold text-terminal-green">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
