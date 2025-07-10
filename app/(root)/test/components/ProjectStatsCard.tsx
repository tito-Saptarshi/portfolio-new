"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";
import { Project } from "@/app/(root)/test/lib/types";
import { useState } from "react";
import { likePostTest } from "@/actions/post.actions";

export function ProjectStatsCard({ project }: { project: Project }) {
  const [likes, setLikes] = useState(project.likes || 0);
  const [toggleLike, setToggleLike] = useState(false);  

  const handleLike = () => {
    setLikes(likes + 1);
    setToggleLike(!toggleLike);

    if(toggleLike) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    likePostTest(project.id);
  };

  return (
    <div className="lg:col-span-1">
      <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 sticky top-24">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            Project Stats Card
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
              {likes}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-500" />
              <span className="text-gray-600 dark:text-gray-400">Views</span>
            </div>
            <span className="font-bold text-gray-900 dark:text-white">
              {project.views.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-gray-400">Category</span>
            <Badge
              variant="outline"
              className="border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400"
            >
              {project.project_type}
            </Badge>
          </div>
        </div>

        <div className="space-y-3">
          <form action={handleLike}>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium flex items-center gap-2"
            >
              <Heart className="w-4 h-4" />
              Like Project
            </Button>
          </form>

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
    </div>
  );
}
