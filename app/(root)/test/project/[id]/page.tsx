import prisma from "@/app/lib/db";
import { ShowcaseCard } from "../../components/ShowcaseCard";
import { redirect } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });

  return data;
}

export default async function Page({ params }: { params: { id: string } }) {
  const project = await getData(params.id);
  if (!project) return redirect("/");

    console.log("Project Details: ", project);
    

  return (
    <main>
      <div>
        <h1>Project Details</h1>
        <ShowcaseCard project={project} id={params.id} />
      </div>
    </main>
  );
}
