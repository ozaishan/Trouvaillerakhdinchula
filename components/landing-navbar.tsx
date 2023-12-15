"use client";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes"; // Import useTheme

const font = Montserrat({
  weight: "600",
  subsets: ["latin"]
});

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth();
  const { theme } = useTheme(); // Use useTheme to get the current theme

  return (
    <nav className="p-4  flex items-center justify-between">

      <Link href="/" className="flex items-center">
        <div className="relative h-8 w-8 mr-4">
          <Image fill alt="Logo " src="/logo.png" />
        </div>
        <h1 className={cn("text-2xl font-bold", {
          'text-white': theme === 'dark',
          'text-blue-800': theme !== 'dark',
        }, font.className)}>
          Trouvaille
        </h1>
      </Link>

      <div className="flex items-center gap-x-2">
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="outline" className="rounded-full">
            Get Started
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};
