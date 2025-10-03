import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "Todo List Application",
    description:
      "A full-featured task management application where users can login, save, update, and remove tasks. Includes activity logs to track task updates and changes over time.",
    technologies: ["ReactJS", "NodeJS", "MySQL"],
    features: [
      "User authentication and authorization",
      "CRUD operations for tasks",
      "Activity logging system",
      "Real-time task updates",
    ],
  },
  {
    title: "Dashboard Application",
    description:
      "A comprehensive data visualization platform with APIs for retrieving data across specific date ranges (daily, monthly, yearly). Features interactive charts and flexible date selection.",
    technologies: ["ReactJS", "NodeJS", "Google Charts"],
    features: [
      "Date range selection interface",
      "Multiple chart types for data visualization",
      "API for flexible data queries",
      "Responsive design for all devices",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-projects-title"
          >
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Personal projects demonstrating full-stack development capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover-elevate transition-transform hover:scale-[1.02]"
              data-testid={`card-project-${index}`}
            >
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-2 rounded-md bg-primary/10">
                    <FolderGit2 className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle
                      className="text-xl mb-2"
                      data-testid={`text-project-title-${index}`}
                    >
                      {project.title}
                    </CardTitle>
                    <CardDescription
                      className="text-base"
                      data-testid={`text-project-description-${index}`}
                    >
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-muted-foreground">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start gap-2"
                        data-testid={`text-feature-${index}-${i}`}
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        data-testid={`badge-project-tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
