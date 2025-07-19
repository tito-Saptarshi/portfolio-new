
// import { useState } from "react";
// import MDEditor from "@uiw/react-md-editor";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { FormItem, FormLabel, FormMessage, FormControl } from "@/components/ui/form";
// import { UploadDropzone } from "@/components/Uploadthing";

// import { useRouter } from "next/navigation";
// import { createProject } from "@/actions/actions";

// export default function ProjectUploadPage() {

//   const router = useRouter();

//   const [formState, setFormState] = useState({
//     name: "",
//     skills: "",
//     tools_used: "",
//     project_type: "",
//     project_link: "",
//     github_link: "",
//     other_link: "",
//     description: "",
//   });

//   const [pitch, setPitch] = useState("");
//   const [newImage, setNewImage] = useState<string>("");

//   async function handleSubmit() {
//     "use server";

//     const result = await createProject({}, formState, pitch, newImage);

//     if (result.status === "SUCCESS") {
     
//       router.push(`/`);
//     } else {
     
//     }
//   }

//   return (
//     <div className="container mx-auto py-10">
//       <Card className="w-full max-w-3xl mx-auto">
//         <CardHeader>
//           <CardTitle>Upload Your Project</CardTitle>
//         </CardHeader>
//         <CardContent>
//           <form action={handleSubmit} className="space-y-8">
//             {[
//               { name: "name", label: "Project Name", placeholder: "Enter project name" },
//               { name: "skills", label: "Skills", placeholder: "Enter skills used" },
//               { name: "tools_used", label: "Tools Used", placeholder: "React, Node.js..." },
//               { name: "project_type", label: "Project Type", placeholder: "Personal, Team..." },
//               { name: "project_link", label: "Project Link", placeholder: "https://project.com" },
//               { name: "github_link", label: "GitHub Link", placeholder: "https://github.com/..." },
//               { name: "other_link", label: "Other Link", placeholder: "https://..." },
//             ].map(({ name, label, placeholder }) => (
//               <FormItem key={name}>
//                 <FormLabel>{label}</FormLabel>
//                 <FormControl>
//                   <Input
//                     placeholder={placeholder}
//                     value={formState[name as keyof typeof formState]}
//                     onChange={(e) =>
//                       setFormState((prev) => ({
//                         ...prev,
//                         [name]: e.target.value,
//                       }))
//                     }
//                   />
//                 </FormControl>
//                 <FormMessage />
//               </FormItem>
//             ))}

//             <FormItem>
//               <FormLabel>Project Image</FormLabel>
//               <FormControl>
//                 <UploadDropzone
//                   className="ut-button:w-28 ut-allowed-content:hidden"
//                   endpoint="imageUploader"
//                   onClientUploadComplete={(res) => {
//                     setNewImage(res[0].url);
//                   }}
//                 />
//               </FormControl>
//               {newImage && (
//                 <div className="mt-4">
//                   <img
//                     src={newImage}
//                     alt="Uploaded project"
//                     className="max-w-full h-auto rounded-lg"
//                   />
//                 </div>
//               )}
//               <FormMessage />
//             </FormItem>

//             <FormItem data-color-mode="light">
//               <FormLabel>Project Description</FormLabel>
//               <FormControl>
//                 <MDEditor
//                   value={pitch}
//                   onChange={(value) => setPitch(value as string)}
//                   preview="edit"
//                   height={300}
//                   style={{ borderRadius: 20, overflow: "hidden" }}
//                   textareaProps={{
//                     placeholder: "Briefly describe your idea and what problem it solves",
//                   }}
//                   previewOptions={{
//                     disallowedElements: ["style"],
//                   }}
//                 />
//               </FormControl>
//               <FormMessage />
//             </FormItem>

//             <button
//               type="submit"
//               className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition"
//             >
//               Submit Project
//             </button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
