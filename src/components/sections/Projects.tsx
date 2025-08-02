"use client";
import { Project, projects } from "@/data/projects";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div whileHover={{ y: -8 }}>
      <Card className="flex flex-col h-full">
        <CardHeader>
          {/* image */}
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow space-y-2">
          <p className="text-muted-foreground">{project.description}</p>
          <div className="flex flex-wrap gap-2 space-x-2">
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </a>
          </Button>
          {project.liveUrl && (
            <Button asChild>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Siteyi Gör
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projeler" className="py-24">
      <h2 className="text-3xl font-bold text-center mb-12">Projelerim</h2>
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <div className="text-center">
        <p className="text-lg text-muted-foreground mb-4">
          Daha fazlasını görmek isterseniz,
        </p>
        <h3 className="text-2xl font-semibold mb-6">
          Tüm projelerimi ve kodlarımı GitHub&apos;da inceleyebilirsiniz.
        </h3>
        <Button asChild size="lg">
          <a
            href="https://github.com/eeyll18"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub Profilim
          </a>
        </Button>
      </div>
    </section>
  );
};

export default Projects;
