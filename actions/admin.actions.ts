"use server";

import prisma from "@/app/lib/db";

export async function adminMessage(formData: FormData): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const companyName = formData.get("company") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    await prisma.directContact.create({
      data: {
        name: firstName + " " + lastName,
        email,
        companyName,
        message,
        subject,
      },
    });
    console.log("form success action");

    return {
      success: true,
      message: "Message received!",
    };
  } catch (error) {
    console.log("form success action");
    console.log("Server error: ", error);
    return {
      success: false,
      message: "Something went wrong.",
    };
  }
}
