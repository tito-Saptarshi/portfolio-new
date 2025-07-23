import { Project } from "@/app/(root)/test/lib/types";

import Image from "next/image";
import { ArrowLeft, Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import markdownit from "markdown-it";
import { ProjectStatsCard } from "./ProjectStatsCard";
import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { extractWords } from "@/app/lib/utils";

export async function ShowcaseCard({
  project,
  id,
}: {
  project: Project;
  id: string;
}) {
  const { userId } = await auth();

  let tools_used;
  if (project.tools_used) {
    tools_used = extractWords(project.tools_used);
  }

  let isPostLiked = false;

  if (userId) {
    const isPresent = project.userId.includes(userId);
    if (isPresent) {
      isPostLiked = true;
    }
  }

  const md = markdownit();

  const parsedContent = md.render(project?.details || "");

  // const [showSignInDialog, setShowSignInDialog] = useState(false);

  console.log("Project ID: ", id);
  // console.log("Project Details -> ShowcaseCard : ", project);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      {/* Header */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4">
          <Link href={"/all-projects"}>
            <Button
              variant="ghost"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Image with Title Overlay */}
        <div className="relative mb-8 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={project.imageUrl || "/placeholder.svg"}
            alt={project.name}
            width={800}
            height={600}
            className="w-full h-96 md:h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.name}
            </h1>
            <div className="absolute bottom-4 right-4">
              <div className="bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-300" />
                <span className="text-white font-medium">
                  {project.views.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tech Stack and Type */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Technologies Used
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {tools_used?.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 px-3 py-1"
                      >
                        {/* { <Code className="w-4 h-4" />} */}
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  {(project.project_link || project.github_link) && (
                    <div className="mt-8">
                      <h3 className=" font-semibold text-gray-900 dark:text-white mb-4">
                        🔗 Links
                      </h3>
                      <div className="flex flex-col gap-3">
                        {project.project_link && (
                          <a
                            href={project.project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            🌐 Deployed Link
                          </a>
                        )}
                        {project.github_link && (
                          <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline dark:text-blue-400"
                          >
                            📦 GitHub Repository
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Type of Project - showcase / sell / sold  */}
                {/* <div className="flex flex-col items-start sm:items-end gap-2">
                  <Badge
                    variant={
                      project.project_type === "For Sale"
                        ? "default"
                        : "secondary"
                    }
                    className={`${
                      project.project_type === "For Sale"
                        ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/25"
                        : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                    } font-semibold px-4 py-2 text-sm`}
                  >
                    {project.project_type}
                  </Badge>

                  {project.price && (
                    <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{project.price}</div>
                  )}
                </div> */}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Project Description
              </h2>

              {parsedContent ? (
                <article
                  className="prose max-w-4xl font-work-sans break-all"
                  dangerouslySetInnerHTML={{ __html: parsedContent }}
                />
              ) : (
                <p className="no-result">No details provided</p>
              )}

              {/* External Project Links */}
              {project.other_link && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Other Links
                  </h3>
                  <div className="flex flex-col gap-3">
                    {project.other_link && (
                      <a
                        href={project.other_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline dark:text-blue-400"
                      >
                        🔗 LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          {/* <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  Project Stats
                </h3>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Total Likes
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {project.likes}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-600 dark:text-gray-400">
                      Views
                    </span>
                  </div>
                  <span className="font-bold text-gray-900 dark:text-white">
                    {project.views.toLocaleString()}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Category
                  </span>
                  <Badge
                    variant="outline"
                    className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
                  >
                    {project.project_type}
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={() => {}}
                  className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium flex items-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Like Project
                </Button>

                {project.project_type === "For Sale" && (
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium">
                    Purchase Project
                  </Button>
                )}

                <Button
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  Contact Developer
                </Button>
              </div>
            </div>
          </div> */}

          <ProjectStatsCard project={project} isPostLiked={isPostLiked} />
        </div>
      </div>

      {/* Sign-In Dialog */}
      {/* <Dialog open={showSignInDialog} onOpenChange={setShowSignInDialog}>
        <DialogContent className="sm:max-w-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Heart className="w-5 h-5 text-red-500" />
              Sign In Required
            </DialogTitle>
            <DialogDescription className="text-gray-600 dark:text-gray-400">
              You need to sign in to like projects and interact with the
              community.
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-4">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium">
              Sign In with Google
            </Button>
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Sign In with GitHub
            </Button>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-300 dark:border-gray-600" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-gray-900 px-2 text-gray-500 dark:text-gray-400">
                  Or
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Create Account
            </Button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              By signing in, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </DialogContent>
      </Dialog> */}
      {/* <View /> */}
    </div>
  );
}
