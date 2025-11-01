import { useState } from "react";
import { CustomCursor } from "@/components/CustomCursor";
import { TickerStrip } from "@/components/TickerStrip";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Certifications } from "@/components/Certifications";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { IntroAnimation } from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-background">
      <CustomCursor />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Skills />
      <Contact />
      <TickerStrip />
    </div>
  );
};

export default Index;
