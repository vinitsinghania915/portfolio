import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Master of Computer Applications (M.C.A.)",
    institution: "Amity University",
    location: "Noida, India",
    year: "2018-2020",
    grade: "CGPA: 8.3",
  },
  {
    degree: "Bachelor of Computer Applications (B.C.A.)",
    institution: "Baby Happy Modern Degree PG College",
    location: "Hanumangarh, India",
    year: "2015 – 2018",
    grade: "Percentage: 70%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-education-title"
          >
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic foundation in computer science and applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card key={index} data-testid={`card-education-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-md bg-primary/10">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle
                      className="text-lg mb-1"
                      data-testid={`text-degree-${index}`}
                    >
                      {edu.degree}
                    </CardTitle>
                    <p
                      className="text-sm text-muted-foreground"
                      data-testid={`text-institution-${index}`}
                    >
                      {edu.institution}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span
                    className="text-muted-foreground"
                    data-testid={`text-location-${index}`}
                  >
                    {edu.location}
                  </span>
                  <span
                    className="text-muted-foreground"
                    data-testid={`text-year-${index}`}
                  >
                    {edu.year}
                  </span>
                </div>
                <div className="pt-2 border-t">
                  <span
                    className="text-sm font-medium"
                    data-testid={`text-grade-${index}`}
                  >
                    {edu.grade}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
