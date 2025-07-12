"use server";

import { Project } from "@/app/(root)/test/lib/types";
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
  console.log("server action -> likePostTest : ");
  console.log();

  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  console.log("User ID: ", userId);
  console.log("Project ID: ", projectId);
}

// new - prod
export async function modifiedLikePost(
  project: Project,
  isPostLiked: boolean
): Promise<{
  success: boolean;
  message: string;
}> {
  console.log("server action -> modifiedLikePost : ");
  console.log();

  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  if (!project) {
    console.log("Project not found");

    return { success: false, message: "Failed to update like. Try again." };
  }

  try {
    const updatedUserIds = isPostLiked
      ? project.userId.filter((id) => id !== userId) // remove
      : [...project.userId, userId]; // add

    const updatedLikes = isPostLiked
      ? Math.max(0, (project.likes || 0) - 1)
      : (project.likes || 0) + 1;

    await prisma.project.update({
      where: { id: project.id },
      data: { userId: updatedUserIds, likes: updatedLikes },
    });

    return {
      success: true,
      message: isPostLiked ? "Removed like from project" : "Liked the project",
    };
  } catch (error) {
    console.log(error);
    return { success: false, message: "Failed to update like. Try again." };
  }
}
