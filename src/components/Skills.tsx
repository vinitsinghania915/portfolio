import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "JavaScript",
      "ReactJS",
      "React Native",
      "Redux",
      "Webpack",
      "Babel",
      "Context APIs",
      "HTML",
      "CSS",
      "Bootstrap",
      "Material UI",
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      "NodeJS",
      "Express",
      "REST API",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "GraphQL",
      "Redis",
      "Kafka",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "C++",
      "C",
      "GIT",
      "Jira",
      "Linux",
      "PM2",
      "Forever",
      "VS Code",
      "AWS",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-skills-title"
          >
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} data-testid={`card-skill-category-${index}`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle
                      className="text-lg"
                      data-testid={`text-category-${index}`}
                    >
                      {category.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover-elevate"
                        data-testid={`badge-skill-${skill
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
