import prisma from "@/app/lib/db";
import { ShowcaseCard } from "../../components/ShowcaseCard";
import { redirect } from "next/navigation";
import { incrementViews } from "@/actions/post.actions";

async function getData(id: string) {
  const data = await prisma.project.findUnique({
    where: {
      id: id,
    },
  });

  return data;
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  let project;

  project = await incrementViews(id);
  if (!project) {
    console.error("Project not found or failed to increment views");
    project = await getData(id);
  }

  if (!project) return redirect("/");

  // console.log("Project Details: ", project);

  return (
    <main>
      <ShowcaseCard project={project} id={id} />
    </main>
  );
}
