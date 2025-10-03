import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              data-testid="text-footer-heading"
            >
              Let's Connect
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              I'm always interested in hearing about new opportunities and
              collaborations. Feel free to reach out!
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="link-footer-email"
              >
                <a href="mailto:vinitsinghania915@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="link-footer-linkedin"
              >
                <a
                  href="https://linkedin.com/in/vinit-singhania"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                data-testid="link-footer-github"
              >
                <a
                  href="https://github.com/vinitsinghania915"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="ghost"
                onClick={() => scrollToSection("experience")}
                className="justify-start"
                data-testid="link-footer-experience"
              >
                Experience
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("skills")}
                className="justify-start"
                data-testid="link-footer-skills"
              >
                Skills
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("projects")}
                className="justify-start"
                data-testid="link-footer-projects"
              >
                Projects
              </Button>
              <Button
                variant="ghost"
                onClick={() => scrollToSection("education")}
                className="justify-start"
                data-testid="link-footer-education"
              >
                Education
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span data-testid="text-location">Bangalore, India</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {new Date().getFullYear()} Vinit Singhania. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
