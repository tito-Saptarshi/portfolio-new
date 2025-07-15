import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, Zap } from "lucide-react";
import Image from "next/image";

import { Code, Palette, Database, Globe, Smartphone } from "lucide-react";
import { Project } from "../lib/types";
import { Badge } from "@/components/ui/badge";
import { extractWords } from "@/app/lib/utils";
import Link from "next/link";

const skillIcons = {
  React: <Code className="w-3 h-3" />,
  "Node.js": <Database className="w-3 h-3" />,
  MongoDB: <Database className="w-3 h-3" />,
  Python: <Code className="w-3 h-3" />,
  Unity: <Palette className="w-3 h-3" />,
  Docker: <Globe className="w-3 h-3" />,
  "React Native": <Smartphone className="w-3 h-3" />,
};

export function ProjectCardTest({ project }: { project: Project }) {
  let tools_used;
  if (project.tools_used) {
    tools_used = extractWords(project.tools_used);
  }
  return (
    <Link href={`project/${project.id}`}>
      <Card
        key={project.id}
        className="group h-[450px] flex flex-col justify-between bg-white dark:bg-gray-900/50 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
      >
        <div className="relative overflow-hidden h-48">
          <Image
            src={project.imageUrl ?? ""}
            alt={project.name}
            width={400}
            height={300}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Likes and Views */}
          <div className="absolute top-4 left-4 flex gap-2">
            <div className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
              <Eye className="w-3 h-3 text-gray-300" />
              <span className="text-white text-xs font-medium">
                {project.views.toLocaleString()}
              </span>
            </div>
            <div className="bg-black/80 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
              <Heart className="w-3 h-3 text-red-400" />
              <span className="text-white text-xs font-medium">
                {project.likes}
              </span>
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <Badge
              variant={
                project.project_type === "For Sale" ? "default" : "secondary"
              }
              className={`${
                project.project_type === "For Sale"
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25"
                  : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
              } font-semibold`}
            >
              {project.project_type}
            </Badge>
          </div>
        </div>

        <CardContent className="flex-1 flex flex-col justify-between p-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {project.name}
              </h3>
              <Zap className="w-5 h-5 text-yellow-500" />
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400 line-clamp-3 mb-4">
              {project.shortDescription || "No description available."}
            </p>

            <p className="text-sm text-gray-500 dark:text-gray-500 mb-2 font-medium">
              Technologies Used:
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {tools_used?.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-1"
                >
                  {skillIcons[skill as keyof typeof skillIcons] || (
                    <Code className="w-3 h-3" />
                  )}
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
