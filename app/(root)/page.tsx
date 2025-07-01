
import DecorativeElementsHero from "../components/DecorativeElementsHero";
import { Hero } from "../components/Hero";


// export default function Home() {
//   return (
//     <div className="container mx-auto mx-2">
//       <div className="min-h-screen bg-[#f8f9fa] dark:bg-[#121212] relative overflow-hidden">
//         <SidebarProvider>
//           <AppSidebar />
//           <SidebarInset>
//             <DecorativeElementsHero />

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
