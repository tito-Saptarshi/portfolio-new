"use server"

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
