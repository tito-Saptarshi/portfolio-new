"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import { createProject } from "@/actions/actions";

export default function SimpleProjectForm() {
  const [pitch, setPitch] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await createProject(formData, pitch);

    console.log(
      "server action -> createProject -> message : ",
      response?.message
    );
    console.log(
      "server action -> createProject -> status : ",
      response?.status
    );
    console.log("server action -> createProject -> response : ", response);

    if (response?.status === "green") {
      router.push("/");
    } else {
      console.log("server action failed. check logs -> createProject");
    }
  };

  return (
    <div className="container mx-auto py-10">
      <Card className="w-full max-w-3xl mx-auto">
        <CardHeader>
          <CardTitle>Create Project</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={async (event) => {
              await handleSubmit(event as React.FormEvent);
            }}
            className="space-y-6"
          >
            <div className="flex flex-col space-y-2">
              <Label>Project Name</Label>
              <Input name="name" placeholder="Enter project name" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Tools Used</Label>
              <Input name="tools_used" placeholder="React, Node.js, etc." />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Project Type</Label>
              <Input name="project_type" placeholder="Personal, Client, etc." />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Project Link</Label>
              <Input name="project_link" placeholder="https://example.com" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>GitHub Link</Label>
              <Input
                name="github_link"
                placeholder="https://github.com/yourrepo"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Other Link</Label>
              <Input name="other_link" placeholder="Any additional link" />
            </div>

            <div className="flex flex-col space-y-2">
              <Label>Project Image</Label>
              <Input
                name="project_image"
                // value={formData.project_image}

                placeholder="Any additional link"
              />
            </div>

            <div data-color-mode="light" className="flex flex-col space-y-2">
              <label htmlFor="pitch">Pitch</label>
              <MDEditor
                value={pitch}
                onChange={(value) => setPitch(value as string)}
                id="pitch"
                preview="edit"
                height={300}
                style={{ borderRadius: 20, overflow: "hidden" }}
                textareaProps={{
                  placeholder:
                    "Briefly describe your idea and what problem it solves",
                }}
                previewOptions={{
                  disallowedElements: ["style"],
                }}
              />
            </div>
            <div className="flex justify-center mt-4">
              <Button variant="outline" type="submit">
                Submit Project
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
