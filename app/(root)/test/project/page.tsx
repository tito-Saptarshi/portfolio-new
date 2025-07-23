import prisma from "@/app/lib/db";
import { ProjectShowcaseTest } from "../components/ProjectShowcaseTest";
import { Suspense } from "react";
import { SkeletonCardAllProjects } from "../components/SkeletonCardAllProjects";

async function getProjects() {
    return await prisma.project.findMany();
}

export default async function page() {
    const allProjects = await getProjects();
    return (
        <>
         <Suspense fallback={ <SkeletonCardAllProjects/> }>
            <ProjectShowcaseTest allProjects={allProjects} />
         </Suspense>
        </>)
}