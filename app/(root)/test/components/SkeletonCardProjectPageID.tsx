// components/ShowcaseSkeletonCard.tsx

import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCardProjectPageID() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      {/* Header Skeleton */}
      <div className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-black/50 backdrop-blur-md sticky top-0 z-10">
        <div className="container mx-auto px-6 py-4 flex items-center gap-4">
          <Skeleton className="w-32 h-8 rounded" />
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        {/* Hero Image Skeleton */}
        <Skeleton className="w-full h-96 md:h-[500px] rounded-2xl mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Skeleton */}
          <div className="lg:col-span-2 space-y-6">
            {/* Technologies Used */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800 mb-6">
              <Skeleton className="h-6 w-40 mb-4 rounded" />
              <div className="flex gap-2 flex-wrap">
                {[...Array(4)].map((_, idx) => (
                  <Skeleton key={idx} className="w-20 h-8 rounded" />
                ))}
              </div>
            </div>

            {/* Project Description */}
            <div className="bg-white dark:bg-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-800">
              <Skeleton className="w-40 h-6 mb-4 rounded" />
              <div className="space-y-3">
                {[...Array(5)].map((_, idx) => (
                  <Skeleton key={idx} className="w-full h-4 rounded" />
                ))}
                <Skeleton className="w-3/4 h-4 rounded" />
              </div>
              {/* Links */}
              <div className="mt-8 flex flex-col gap-2">
                {[...Array(3)].map((_, idx) => (
                  <Skeleton key={idx} className="w-44 h-6 rounded" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Skeleton */}
          <div className="space-y-4 sticky top-24">
            <Skeleton className="w-full h-24 rounded-xl" />
            {[...Array(3)].map((_, idx) => (
              <Skeleton key={idx} className="w-full h-10 rounded-md" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
