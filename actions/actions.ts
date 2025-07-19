"use server";

import prisma from "@/app/lib/db";
export async function adminMessage(formData: FormData): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const name = formData.get("name") as string;
    const toolsUsed = formData.get("tools_used") as string;

    return {
      success: false,
      message: "failure",
    };
  } catch (error) {
    console.log("error ", error);
    return {
      success: false,
      message: "failure",
    };
  }
}

export async function createProject(formData: FormData, pitch: string) {
  const name = formData.get("name") as string;
  const toolsUsed = formData.get("tools_used") as string;
  const projectType = formData.get("project_type") as string;
  const projectLink = formData.get("project_link") as string;
  const githubLink = formData.get("github_link") as string;
  const otherLink = formData.get("other_link") as string;
  const imageUrl = formData.get("project_image") as string;
  const shortDescription = formData.get("short_description") as string;

  console.log("Project created with data:", {
    name,
    toolsUsed,
    projectType,
    projectLink,
    githubLink,
    shortDescription,
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
        shortDescription: shortDescription,
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
