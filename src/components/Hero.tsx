import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Data visualization background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-terminal-green rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
                opacity: Math.random() * 0.5 + 0.2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          <h1 className="text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight">
            <span className="text-metallic-green drop-shadow-[0_0_30px_rgba(70,255,178,0.5)]">
              MELWIN SHIBU
            </span>
          </h1>
          
          <div className="flex items-center justify-center gap-4 text-xl sm:text-2xl lg:text-3xl font-light text-muted-foreground">
            <span className="hover:text-terminal-green transition-colors duration-300">Finance</span>
            <span className="text-terminal-green">·</span>
            <span className="hover:text-terminal-gold transition-colors duration-300">Strategy</span>
            <span className="text-terminal-green">·</span>
            <span className="hover:text-terminal-green transition-colors duration-300">Automation</span>
          </div>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founder of <span className="text-terminal-green font-semibold">WhiteSignal</span>. 
            Building the future of finance through data-driven insights and AI automation.
          </p>

          <div className="pt-6">
            <Button
              onClick={scrollToAbout}
              size="lg"
              className="group relative bg-terminal-steel hover:bg-terminal-green text-foreground hover:text-terminal-black font-semibold px-8 py-6 text-lg transition-all duration-300 glow-green hover:scale-105"
            >
              Explore Portfolio
              <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
