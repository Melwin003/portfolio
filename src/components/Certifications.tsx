import {
  Award,
  Briefcase,
  FileText,
  GraduationCap,
  Target,
  BarChart3,
  TrendingUp,
  Shield,
} from "lucide-react";

const certifications = [
  {
    title: "Banking and Financial Markets (IIM Bangalore)",
    description:
      "Executive education course from IIM Bangalore covering advanced concepts in banking, capital markets, and financial instruments.",
    icon: BarChart3,
    pdf: "/certificates/Banking and financial markets (iimB).pdf",
  },
  {
    title: "Bachelor of Management Studies (Finance)",
    description:
      "Undergraduate degree specializing in corporate finance, investment analysis, and strategic management.",
    icon: GraduationCap,
    pdf: "/certificates/BMS degree.pdf",
  },
  {
    title: "Business Analysis by Microsoft & LinkedIn",
    description:
      "Certification in business data interpretation, stakeholder analysis, and requirements documentation using analytical frameworks.",
    icon: FileText,
    pdf: "/certificates/Business Analysis by Microsoft and LinkedIn.pdf",
  },
  {
    title: "Business Negotiation Certificate",
    description:
      "Training in negotiation strategies, persuasion, and decision dynamics across business and finance contexts.",
    icon: Shield,
    pdf: "/certificates/Business Negotiation certificate.pdf",
  },
  {
    title: "Corporate Finance Foundations",
    description:
      "Professional certificate covering valuation, risk management, and capital structure fundamentals.",
    icon: Award,
    pdf: "/certificates/Corporate Finance Foundations Professional Certificate.pdf",
  },
  {
    title: "Generative AI by Microsoft & LinkedIn",
    description:
      "Certification focused on AI-powered productivity, prompt engineering, and real-world business applications.",
    icon: TrendingUp,
    pdf: "/certificates/Generative AI by Microsoft and LinkedIn.pdf",
  },
  {
    title: "Imperial Finance Head Certificate",
    description:
      "Awarded for leadership in managing financial operations and overseeing investment decisions within the college finance committee.",
    icon: Briefcase,
    pdf: "/certificates/Imperial Finance head certificate.pdf",
  },
  {
    title: "Internship Certificate",
    description:
      "Recognition for successful completion of a finance and research internship demonstrating analytical and professional skills.",
    icon: Target,
    pdf: "/certificates/internship certificate .pdf",
  },
  {
    title: "LEO Club Certificate",
    description:
      "Appreciation certificate for active participation in community service initiatives and youth leadership programs.",
    icon: Award,
    pdf: "/certificates/leo certificate.pdf",
  },
  {
    title: "Negotiation Professional Certificate",
    description:
      "Issued by the American Negotiation Institute, focusing on advanced deal-making, conflict resolution, and leadership communication.",
    icon: Shield,
    pdf: "/certificates/Negotiation Professional Certificate by American Negotiation Institute.pdf",
  },
  {
    title: "Placement Committee Executive",
    description:
      "Certificate of responsibility for coordinating recruitment drives and liaising between corporates and student body.",
    icon: Briefcase,
    pdf: "/certificates/placement committee executive.pdf",
  },
  {
    title: "Project Management by Microsoft & LinkedIn",
    description:
      "Training in project planning, execution, and stakeholder management using modern agile tools and frameworks.",
    icon: FileText,
    pdf: "/certificates/Project Management by Microsoft and LinkedIn.pdf",
  },
  {
    title: "Student of the Year Award",
    description:
      "Honored for exceptional academic and extracurricular achievements throughout the undergraduate program.",
    icon: Award,
    pdf: "/certificates/student of the year certificate.pdf",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-metallic-green">
            Credentials & Achievements
          </h2>
          <div className="h-1 w-24 bg-gradient-metallic rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional certifications and academic excellence in finance and technology
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <a
                key={index}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel p-6 rounded-xl group cursor-pointer transform hover:scale-105 hover:glow-green transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-terminal-green/10 flex items-center justify-center group-hover:bg-terminal-green/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-terminal-green group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground group-hover:text-terminal-green transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-metallic transition-all duration-500" />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
