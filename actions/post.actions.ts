"use server";

import prisma from "@/app/lib/db";
import { auth } from "@clerk/nextjs/server";

export async function likePost(projectId: string) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const likeExists = await prisma.like.findFirst({
    where: {
      projectId,
      userId,
    },
  });

  if (!likeExists) {
    const like = await prisma.like.create({
      data: {
        projectId,
        userId,
      },
    });

    console.log("Like created: ", like.id);
    console.log("Like object: ", like);
  } else {
    await prisma.like.delete({
      where: {
        id: likeExists.id,
      },
    });
    console.log("Like deleted: ", likeExists.id);
  }
}

export async function likePostTest(projectId: string) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  console.log("User ID: ", userId);
  console.log("Project ID: ", projectId);
}

// new - prod
export async function modifiedLikePost(projectId: string) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  const project = await prisma.project.findUnique({
    where: { id: projectId },
    select: { userId: true },
  });

  if (!project) {
    console.log("Project not found");

    return false;
  }

  try {
    const isPresent = project.userId.includes(userId);

    const updatedUserIds = isPresent
      ? project.userId.filter((id) => id !== userId) // remove
      : [...project.userId, userId]; // add

    await prisma.project.update({
      where: { id: projectId },
      data: { userId: updatedUserIds },
    });

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
