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

export async function likeAdminMessageTest(project: Project, message: string) {
  console.log("server action -> likeAdminMessageTest : ");
  console.log();

  const { userId, redirectToSignIn } = await auth();

  if (!userId) return redirectToSignIn();

  console.log("User ID: ", userId);
   console.log("User ID: ", userId);
  console.log("Project ID: ", project.id);
  console.log("Project : ", project);
  console.log("Message : ", message);
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

export async function incrementViews(projectId: string) {
  try {
    await prisma.project.update({
      where: { id: projectId },
      data: {
        views: {
          increment: 1,
        },
      },
    });
  } catch (error) {
    console.error("Failed to increment views", error);
  }
}

export async function sendAdminMessage(formData: FormData) {
  const { getUser } = auth();
  const user = await getUser();

  if (!user || !user.id) {
    return { success: false, message: "User not authenticated" };
  }

  const message = formData.get("messageAdmin")?.toString();

  if (!message || message.trim() === "") {
    return { success: false, message: "Message cannot be empty" };
  }

  try {
    await prisma.adminContact.create({
      data: {
        userId: user.id,
        userName: user.given_name || "Anonymous",
        userMail: user.email || "noemail@example.com",
        message: message,
      },
    });

    return { success: true, message: "Message sent successfully" };
  } catch (error) {
    console.error("Error sending message to admin:", error);
    return { success: false, message: "Failed to send message" };
  }
}
