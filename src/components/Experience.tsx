import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Kinara Capital",
    role: "Principal Software Engineer (Full-Stack)",
    duration: "July 2024 - Present",
    location: "Bangalore, India",
    achievements: [
      "Developing and maintaining Loan Origination System (LOS) API to streamline loan processing and approval workflows for a Fintech platform",
      "Owned and managed all partner-related integrations, ensuring smooth collaboration with fintech partners and reducing go-to-market time",
      "Designed and implemented a configurable Loan Booking API, enabling seamless disbursal of 40+ crore INR in loans monthly",
      "Developed a high-performance CSV Bulk Upload module with dynamic validation, facilitating 35+ crore monthly loan disbursements",
      "Leveraged AWS cloud services (EKS, S3, RDS) to deploy and scale the LOS API, ensuring high availability, security, and cost-efficiency",
    ],
    technologies: [
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "Express",
      "Nest.js",
      "Redis",
      "MySQL",
      "AWS",
    ],
  },
  {
    company: "Xoxoday",
    role: "Software Engineer (Full-Stack)",
    duration: "October 2020 – July 2024",
    location: "Bangalore, India",
    achievements: [
      "Played a key role in building the majority of Compass product features, contributing significantly to its development and success",
      "Built and optimized a powerful rule engine that processed over 50GB of data across 1,000+ campaigns and 3,000+ KPIs within 5 hours",
      "Reduced incentive calculation time from 60 days to just 10 days for the company's largest client",
      "Developed interactive Dashboard UI modules using React.js and Google Charts for advanced data visualization",
      "Created reusable UI components and integrated APIs across various microservices, promoting code reuse and maintainability",
    ],
    technologies: [
      "JavaScript",
      "ReactJS",
      "React-native",
      "Redux",
      "NodeJS",
      "Express",
      "Redis",
      "Kafka",
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "GraphQL",
    ],
  },
  {
    company: "Xoxoday",
    role: "Software Developer Intern",
    duration: "Jun 2020 – October 2020",
    location: "Bangalore, India",
    achievements: [
      "Quickly ramped up on new technologies within the first month, mastering Node.js, React.js, and MongoDB",
      "Developed RESTful APIs using Node.js and integrated them with a MongoDB database",
      "Built a dynamic dashboard application from the ground up, featuring various data visualizations and charts",
      "Contributed to daily tasks on Compass, delivering enhancements and new features",
    ],
    technologies: ["JavaScript", "ReactJS", "NodeJS", "MongoDB"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-experience-title"
          >
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable fintech solutions and data-driven applications
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 sm:pl-20">
                <div className="absolute left-0 md:left-[1.6rem] top-6 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-primary">
                  <Briefcase className="h-4 w-4 text-primary-foreground" />
                </div>

                <Card data-testid={`card-experience-${index}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <CardTitle
                          className="text-xl md:text-2xl"
                          data-testid={`text-company-${index}`}
                        >
                          {exp.company}
                        </CardTitle>
                        <CardDescription
                          className="text-base font-medium mt-1"
                          data-testid={`text-role-${index}`}
                        >
                          {exp.role}
                        </CardDescription>
                      </div>
                      <div className="text-sm text-muted-foreground sm:text-right">
                        <div data-testid={`text-duration-${index}`}>
                          {exp.duration}
                        </div>
                        <div data-testid={`text-location-${index}`}>
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex gap-3"
                          data-testid={`text-achievement-${index}-${i}`}
                        >
                          <CheckCircle2 className="h-5 w-5 text-chart-2 flex-shrink-0 mt-0.5" />
                          <span className="text-sm md:text-base">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          data-testid={`badge-tech-${tech.toLowerCase()}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
