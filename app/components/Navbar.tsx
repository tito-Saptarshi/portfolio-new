import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { LogInIcon } from "lucide-react";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="mx-auto mx-2 pb-2">
      <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5">
        <div className="container flex h-16 items-center justify-between px-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-lg flex items-center justify-center font-bold text-xl ">
              JD
            </div>
            <span className="hidden font-bold text-xl sm:inline-block">
              Portfolio
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium">
            <Link
              href="#home"
              className="relative transition-colors hover:text-black/80 dark:hover:text-white/80 text-black dark:text-white group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link
              href="/all-projects"
              className="relative transition-colors hover:text-black/80 dark:hover:text-white/80 text-black/60 dark:text-white/60 group"
            >
              Projects
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link
              href="#extra"
              className="relative transition-colors hover:text-black/80 dark:hover:text-white/80 text-black/60 dark:text-white/60 group"
            >
              Extra
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
            <Link
              href="#others"
              className="relative transition-colors hover:text-black/80 dark:hover:text-white/80 text-black/60 dark:text-white/60 group"
            >
              Others
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <Button
              variant="outline"
              className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              Contact Me
            </Button>

            <SignedOut>
              <SignInButton>
                <Button
                  variant="default"
                  className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
                >
                  <span className="hidden md:block">Sign In</span>{" "}
                  <span>
                    <LogInIcon />
                  </span>
                </Button>
              </SignInButton>
            </SignedOut>
             <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </header>
    </div>
  );
};
