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

export async function modifiedLikePost(projectId: string) {
  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  // traverse through Project model to find the userId of the logged-in user
}