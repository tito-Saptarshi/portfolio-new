import { Project } from "@/app/(root)/test/lib/types";

export function ShowcaseCard({ project, id }: { project: Project, id: string }) {
    console.log("Project ID: ", id);
    console.log("Project Details -> ShowcaseCard : ", project);

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Showcase Card</h2>
            <p className="text-gray-700 dark:text-gray-300">This is a simple showcase card component.</p>
        </div>
    )
}