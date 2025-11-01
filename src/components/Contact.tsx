import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Download, Mail, Linkedin, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // --- Send message (Formspree integration) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xdkppwjr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Error sending message. Check your connection.");
    }
  };

  // --- Resume download ---
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume/Melwin_Shibu_Resume.pdf";
    link.download = "Melwin_Shibu_Resume.pdf";
    link.click();
    toast.success("Resume download started");
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-terminal-steel/20 to-background relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-terminal-green rounded-full animate-pulse-glow" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-terminal-green rounded-full animate-pulse-glow"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-terminal-green rounded-full animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <h2 className="text-5xl font-bold text-metallic-green">
            Let's Connect
          </h2>
          <div className="h-1 w-24 bg-gradient-metallic rounded-full mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Open to opportunities in finance, consulting, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Resume Download Panel */}
          <div className="glass-panel p-8 rounded-2xl space-y-6 transform hover:scale-[1.02] transition-all duration-300">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">Resume</h3>
              <p className="text-muted-foreground">
                Download my complete resume with detailed experience, projects,
                and certifications.
              </p>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full bg-terminal-green hover:bg-terminal-green/90 text-terminal-black font-semibold py-6 text-lg group"
            >
              <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
              Download Resume
            </Button>

            {/* Social Links */}
            <div className="space-y-3 pt-4 border-t border-terminal-green/20">
              <p className="text-sm text-muted-foreground">Connect with me</p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  {
                    icon: Mail,
                    label: "Email",
                    href: "melwin.works.003@gmail.com", // ✏️ Replace with your email
                  },
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/melwinshibu003", // ✏️ Replace with your LinkedIn URL
                  },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "https://instagram.com/melwin__shibu", // ✏️ Replace with your Instagram URL
                  },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 min-w-[90px] glass-panel p-3 sm:p-4 rounded-lg flex items-center justify-center gap-2 hover:bg-terminal-green hover:text-terminal-black transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-medium">
                        {social.label}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="glass-panel p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  required
                  className="bg-terminal-steel border-terminal-green/20 focus:border-terminal-green transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your.email@example.com"
                  required
                  className="bg-terminal-steel border-terminal-green/20 focus:border-terminal-green transition-colors duration-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Your message..."
                  rows={5}
                  required
                  className="bg-terminal-steel border-terminal-green/20 focus:border-terminal-green transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-terminal-gold hover:bg-terminal-gold/90 text-terminal-black font-semibold py-6 text-lg group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-terminal-green/20">
          <p className="text-muted-foreground">
            © 2025 Melwin Shibu. Built with precision and passion.
          </p>
        </div>
      </div>
    </section>
  );
};
