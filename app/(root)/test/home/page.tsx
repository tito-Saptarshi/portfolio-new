


// export default function Home() {
//   return (
//     <div className="container mx-auto mx-2">
//       <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121212] relative overflow-hidden">
//         <SidebarProvider>
//           <AppSidebar />
//           <SidebarInset>
//             <DecorativeElementsHero />

import DecorativeElementsHero from "@/app/components/DecorativeElementsHero";
import { Hero } from "@/app/components/Hero";

//             <Hero />
//           </SidebarInset>
//         </SidebarProvider>
//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="container mx-auto mx-2">
      <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121212] relative overflow-hidden">
        <DecorativeElementsHero />
        <Hero />
      </div>
    </div>
  );
}
