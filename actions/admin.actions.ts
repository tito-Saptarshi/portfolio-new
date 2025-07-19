"use server";

import prisma from "@/app/lib/db";

export async function adminMessage(prevState: any, formData: FormData) {
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
      message: "Message received!",
      status: true,
    };
  } catch (error) {
    console.log("form success action");
    console.log("Server error: ", error);
    return {
      message: "Something went wrong.",
      status: false,
    };
  }
}
