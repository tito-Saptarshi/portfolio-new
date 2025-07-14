

import { Project } from "../lib/types";
import { ProjectCardTest } from "./ProjectCardTest";
import { ProjectSecHeader } from "./ProjectSecHeader";

export function ProjectShowcaseTest({ allProjects }: { allProjects: Project[] }) {


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      {/* Header */}
        <ProjectSecHeader />   

      {/* Projects Grid */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <ProjectCardTest
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-500 dark:text-gray-500 text-lg mb-2">
              No projects found
            </div>
            <p className="text-gray-400 dark:text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )} */}
      </div>
    </div>
  );
};
