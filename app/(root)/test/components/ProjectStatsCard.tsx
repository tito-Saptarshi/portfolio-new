"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Loader2 } from "lucide-react";
import { Project } from "@/app/(root)/test/lib/types";
import { useState } from "react";
import { likePostTest, modifiedLikePost } from "@/actions/post.actions";

export function ProjectStatsCard({
  project,
  isPostLiked,
}: {
  project: Project;
  isPostLiked: boolean;
}) {
  const [likes, setLikes] = useState(project.likes || 0);
  const [toggleLike, setToggleLike] = useState(isPostLiked);
  const [loading, setLoading] = useState(false);

  const handleLike = async () => {
    setLoading(true);

    const isLiking = !toggleLike;
    setToggleLike(isLiking);
    setLikes((prev) => prev + (isLiking ? 1 : -1));

    const res = await modifiedLikePost(project, isPostLiked);
    console.error("res: " + res);
    if (!res.success) {
      // rollback UI if failed
      setToggleLike(!isLiking);
      setLikes((prev) => prev - (isLiking ? 1 : -1));
      console.error("res.message -> success: " + res.message); // or use toast later
    } else {
      console.error("res.message : fails" + res.message);
      console.log(res.message); // or use toast later
    }

    setLoading(false);
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
          <Button
            type="button"
            onClick={handleLike}
            disabled={loading}
            className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white font-medium flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : toggleLike ? (
              <>
                <Heart className="w-4 h-4 fill-white text-white" />
                Liked
              </>
            ) : (
              <>
                <Heart className="w-4 h-4" />
                Like Project
              </>
            )}
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
    </div>
  );
}
