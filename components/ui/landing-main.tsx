"use client";
import { useAuth } from "@clerk/nextjs"
import  Link from "next/link";
import TypewriterComponent from "typewriter-effect";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes"

export const Landingkomainelement = () => {
  const { isSignedIn } = useAuth();
  const { theme } = useTheme();

  return (
    <div className="text-white font-bold py-36 text-center space-y-5">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">
          <TypewriterComponent
            options={{
              strings: ["Trouvaille"],
              autoStart: true,
              loop: true,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </div>
        <h1 className={`${theme === 'dark'|| theme === 'system' ? 'text-white' : 'text-black'}`}>
  The best unified multimedia AI generation which generates
</h1>
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-purple-700">
          <TypewriterComponent
            options={{
              strings: [
                "TEXT GENERATION.",
                "AUDIO",
                "IMAGES",
                "VIDEO",
                "Explore the power of AI"
              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div className="text-sm md:text-xl font-bold text-zinc-700">
        Create contents using AI faster
      </div>
      <div>
        <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
          <Button variant="premium" className="md:text-lg p-4 md:p-6 rounded-full font-semibold">
            Start Now 
          </Button>
        </Link>
      </div>
    </div>
  );
};
