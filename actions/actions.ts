"use server";

import prisma from "@/app/lib/db";

export async function createProject(formData: FormData, pitch: string) {
  const name = formData.get("name") as string;
  const toolsUsed = formData.get("tools_used") as string;
  const projectType = formData.get("project_type") as string;
  const projectLink = formData.get("project_link") as string;
  const githubLink = formData.get("github_link") as string;
  const otherLink = formData.get("other_link") as string;
  const imageUrl = formData.get("project_image") as string;

  console.log("Project created with data:", {
    name,
    toolsUsed,
    projectType,
    projectLink,
    githubLink,
    pitch,
  });

  try {
    await prisma.project.create({
      data: {
        name: name,
        project_type: projectType,
        project_link: projectLink,
        tools_used: toolsUsed,
        github_link: githubLink,
        other_link: otherLink,
        imageUrl: imageUrl,
        details: pitch
      },
    });

    return {
      message: "Succesfully Updated",
      status: "green",
    };
  } catch (e) {
    console.log(e);
  }
}

export async function createProject1(
  prevState: unknown,
  formData: FormData,
  pitch: string,
  imageUrl: string
) {}

export async function createProject2(formData: FormData, pitch: string) {
  const name = formData.get("name") as string;
  const toolsUsed = formData.get("tools_used") as string;
  const projectType = formData.get("project_type") as string;
  const projectLink = formData.get("project_link") as string;
  const githubLink = formData.get("github_link") as string;
  const otherLink = formData.get("other_link") as string;
  const imageUrl = formData.get("project_image") as string;

  console.log("Project created with data:", {
    name,
    toolsUsed,
    projectType,
    projectLink,
    githubLink,
    otherLink,
    imageUrl,
    pitch,
  });
}
