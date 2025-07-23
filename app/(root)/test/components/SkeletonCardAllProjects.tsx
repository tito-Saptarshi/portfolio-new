// components/ProjectShowcaseSkeleton.tsx
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <div className="group h-[450px] flex flex-col justify-between bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden relative">
      <Skeleton className="w-full h-48" />

      <div className="absolute top-4 left-4 flex gap-2 z-10">
        <Skeleton className="w-14 h-6 rounded-lg" />
        <Skeleton className="w-14 h-6 rounded-lg" />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <Skeleton className="w-20 h-6 rounded-lg" />
      </div>

      <div className="flex-1 flex flex-col justify-between p-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <Skeleton className="h-6 w-2/3 rounded" />
            <Skeleton className="h-6 w-6 rounded" />
          </div>

          <Skeleton className="h-4 w-full mb-2 rounded" />
          <Skeleton className="h-4 w-5/6 mb-2 rounded" />
          <Skeleton className="h-4 w-[60%] mb-4 rounded" />

          <div className="flex flex-wrap gap-2 mt-2 mb-2">
            <Skeleton className="h-6 w-16 rounded-full" />
            <Skeleton className="h-6 w-20 rounded-full" />
            <Skeleton className="h-6 w-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkeletonCardAllProjects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Array.from({ length: 9 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
