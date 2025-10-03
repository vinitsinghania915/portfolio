import { Mail, Linkedin, Github, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("/attached_assets/Vinit_Singhania_1759232015210.pdf", "_blank");
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="max-w-6xl w-full">
        <div className="flex flex-col items-center text-center gap-8">
          <Avatar className="h-32 w-32 border-4 border-primary">
            <AvatarImage src="/Vinit_Singhania.jpeg" alt="Vinit Singhania" />
            <AvatarFallback className="text-4xl font-bold bg-primary text-primary-foreground">
              VS
            </AvatarFallback>
          </Avatar>

          <div className="space-y-4">
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold"
              data-testid="text-name"
            >
              Vinit Singhania
            </h1>
            <p
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium"
              data-testid="text-role"
            >
              Principal Software Engineer
            </p>
            <p
              className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto"
              data-testid="text-tagline"
            >
              Post Graduate software developer with 5+ years experience in
              scalable MERN stack development. Specialized in building
              high-performance fintech applications and data-driven solutions.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              variant="outline"
              size="lg"
              asChild
              data-testid="link-email"
            >
              <a
                href="mailto:vinitsinghania915@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-5 w-5" />
                <span className="hidden sm:inline">Email</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              data-testid="link-linkedin"
            >
              <a
                href="https://linkedin.com/in/vinit-singhania"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-5 w-5" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              data-testid="link-github"
            >
              <a
                href="https://github.com/vinitsinghania915"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("experience")}
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={handleDownloadResume}
              data-testid="button-download-resume"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
