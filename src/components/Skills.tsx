import { Badge } from "@/components/ui/badge";
import { 
  Workflow, 
  Database, 
  Figma, 
  Code, 
  Cloud, 
  Sparkles, 
  BarChart3, 
  TrendingUp,
  Target,
  Search,
  Users,
  Lightbulb
} from "lucide-react";

const skills = [
  { name: "n8n Automation", icon: Workflow },
  { name: "Database Management", icon: Database },
  { name: "UI/UX Design (Figma)", icon: Figma },
  { name: "Web Designing", icon: Code },
  { name: "API Handling", icon: Code },
  { name: "Cloud Management", icon: Cloud },
  { name: "AI Tools Proficiency", icon: Sparkles },
  { name: "Prompt Engineering", icon: Sparkles },
  { name: "Financial Analysis", icon: BarChart3 },
  { name: "DCF Valuation", icon: TrendingUp },
  { name: "Data Visualization", icon: BarChart3 },
  { name: "Business Strategy", icon: Target },
  { name: "Project Management", icon: Users },
  { name: "Market Research", icon: Search },
  { name: "Consulting Mindset", icon: Lightbulb },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-terminal-steel/20 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-metallic-green">Skills</h2>
          <div className="h-1 w-24 bg-gradient-metallic rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technical expertise and strategic capabilities across finance and technology
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="glass-panel px-6 py-3 rounded-full group hover:glow-green transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-terminal-green group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-foreground font-medium group-hover:text-terminal-green transition-colors duration-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
