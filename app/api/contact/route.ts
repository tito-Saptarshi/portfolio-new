import { NextResponse } from "next/server";
import prisma from "@/app/lib/db";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const companyName = formData.get("company") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    await prisma.directContact.create({
      data: {
        name: `${firstName} ${lastName}`,
        email,
        companyName,
        message,
        subject,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Message received!",
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
