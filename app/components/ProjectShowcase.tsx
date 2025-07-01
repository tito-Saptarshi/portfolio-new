"use client";

import { useState } from "react";

import {
  Search,
  Code,
  Palette,
  Database,
  Globe,
  Smartphone,
} from "lucide-react";
import { Input } from "@/components/ui/input";

import { projectsShowcase } from "../lib/constants";
import ProjectCard from "./ProjectCard";

const skillIcons = {
  React: <Code className="w-3 h-3" />,
  "Node.js": <Database className="w-3 h-3" />,
  MongoDB: <Database className="w-3 h-3" />,
  Python: <Code className="w-3 h-3" />,
  Unity: <Palette className="w-3 h-3" />,
  Docker: <Globe className="w-3 h-3" />,
  "React Native": <Smartphone className="w-3 h-3" />,
};

export const ProjectShowcase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [showSignInDialog, setShowSignInDialog] = useState(false);

  const filteredProjects = projectsShowcase.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesType = selectedType === "All" || project.type === selectedType;
    return matchesSearch && matchesType;
  });

  const handleLikeClick = () => {
    setShowSignInDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 dark:from-blue-400 dark:via-cyan-400 dark:to-teal-400 bg-clip-text text-transparent">
                Project Portfolio
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Professional development projects and solutions
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 lg:w-auto w-full">
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search projects, skills, or technologies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-gray-100 dark:bg-gray-800/50 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500/20"
                />
              </div>

              <div className="flex gap-2">
                {["All", "For Sale", "Showcase"].map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      selectedType === type
                        ? "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
                        : "bg-gray-200 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700/50 border border-gray-300 dark:border-gray-700"
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewProject={() => {}}
              handleLikeClick ={() => handleLikeClick()}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 dark:text-gray-500 text-lg mb-2">
              No projects found
            </div>
            <p className="text-gray-400 dark:text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
