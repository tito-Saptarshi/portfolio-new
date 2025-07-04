"use server"

export async function createProject(formData: FormData, pitch: string) {
  "use server";

  const name = formData.get("name") as string;
  const toolsUsed = formData.get("tools_used") as string;
  const projectType = formData.get("project_type") as string;
  const projectLink = formData.get("project_link") as string;
  const githubLink = formData.get("github_link") as string;

  // Here you would typically call your database or API to create the project
  // For example:
  // await prisma.project.create({
  //   data: {
  //     name,
  //     toolsUsed,
  //     projectType,
  //     projectLink,
  //     githubLink,
  //     pitch,
  //   },
  // });

  console.log("Project created with data:", {
    name,
    toolsUsed,
    projectType,
    projectLink,
    githubLink,
    pitch,
  });
    
}