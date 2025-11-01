import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, PaintBucket } from "lucide-react";

const projects = [
  {
    title: "WhiteSignal",
    description:
      "AI-driven insider-trading signal platform with live data feed and automated trading alerts. Real-time analysis of SEC filings and market movements.",
    icon: TrendingUp,
    tags: ["AI/ML", "Finance", "Automation"],
    color: "terminal-green",
    link: "https://whitesignal.site",
  },
  {
    title: "Market Research Project",
    description:
      "Undergraduate research analyzing the effects of part-time jobs on financial independence of teenagers.",
    icon: TrendingUp,
    tags: ["Research", "Finance", "Analysis"],
    color: "terminal-gold",
    link: "/projects/Market_Research_Project.pdf",
  },
  {
    title: "Asian Paints Valuation",
    description:
      "Detailed DCF financial model and comparative valuation analysis. In-depth examination of growth drivers and competitive positioning.",
    icon: PaintBucket,
    tags: ["Valuation", "Financial Modeling", "DCF"],
    color: "terminal-green",
    link: "/projects/Asian_Paints_Valuation.pdf",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-terminal-steel/20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-metallic-green">Projects</h2>
          <div className="h-1 w-24 bg-gradient-metallic rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Strategic initiatives combining finance expertise with technology innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="card-3d glass-panel p-6 rounded-xl group cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-lg bg-${project.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-7 h-7 text-${project.color}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-terminal-green transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-semibold bg-terminal-steel rounded-full text-terminal-green border border-terminal-green/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-terminal-green/30 hover:bg-terminal-green hover:text-terminal-black transition-all duration-300 group/btn"
                    >
                      View Case Study
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </a>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
