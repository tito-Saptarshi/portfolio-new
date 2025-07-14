import prisma from "@/app/lib/db";
import { ProjectShowcaseTest } from "../components/ProjectShowcaseTest";

async function getProjects() {
    return await prisma.project.findMany();
}

export default async function page() {
    const allProjects = await getProjects();
    return (
        <>
            <ProjectShowcaseTest allProjects={allProjects} />
        </>)
}