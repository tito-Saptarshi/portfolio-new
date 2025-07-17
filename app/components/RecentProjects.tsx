import { Button } from "@/components/ui/button";
import prisma from "../lib/db";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { extractWords } from "../lib/utils";

async function getData() {
  return prisma.project.findMany({
    take: 3,
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function RecentProjects() {
  const projects = await getData();
  return (
    <section id="projects" className="container py-16 ">
      <div className="flex flex-col space-y-4 mb-16">
        <div className="inline-flex items-center px-3 py-1 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-black text-sm self-start">
          Featured Work
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white">
          Recent Projects
        </h2>
        <p className="max-w-[600px] text-black/60 dark:text-white/60 text-lg">
          Here are some of my latest projects that showcase my skills and
          expertise in web development.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 items-center`}
          >
            <div className="flex-1 relative group">
              <div className="absolute inset-0 border-2 border-black/10 dark:border-white/10 rounded-3xl transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-300"></div>
              <div className="relative overflow-hidden rounded-3xl border-2 border-black/20 dark:border-white/20">
                <Image
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.name}
                  width={600}
                  height={400}
                  className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 dark:group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Link href={`/test/project/${project.id}`}>
                    <Button
                      size="lg"
                      className="bg-white text-black hover:bg-white/90 dark:bg-black dark:text-white dark:hover:bg-black/90"
                    >
                      View Project
                    </Button>
                  </Link>
                </div>
              </div>
              <Badge
                className={`absolute top-4 right-4 ${
                  project.project_type === "For Sale"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "bg-white text-black dark:bg-black dark:text-white"
                }`}
              >
                {project.project_type}
              </Badge>
            </div>
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl font-bold text-black dark:text-white">
                {project.name}
              </h3>
              <p className="text-black/60 dark:text-white/60 text-lg">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                {extractWords(project.tools_used!).map((skill) => {
                  return (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-black/20 dark:border-white/20 text-black/70 dark:text-white/70 rounded-full px-4 py-1"
                    >
                      {skill}
                    </Badge>
                  );
                })}
              </div>
              <Link
                href={`/test/project/${project.id}`}
                className="inline-flex items-center text-black dark:text-white font-medium hover:underline mt-4"
              >
                View Project Details
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-20">
        <Link href={"/test/project"}>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 rounded-full px-8"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
