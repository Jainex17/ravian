import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => (
  <div className="relative overflow-hidden"> 
    {/* Gradients */}
    <div
      aria-hidden="true"
      className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 "
    >
      <div className="bg-gradient-to-r from-background/50 to-background blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
      <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-primary-foreground via-primary-foreground to-background" />
    </div>
    {/* End Gradients */}

    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-52 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl md:text-7xl text-center font-semibold z-20 animate-fade-in-up">
              Turn Data into <span className="text-blue-400">Decisions</span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center  z-20">
              Advanced Data Analytics and Machine Learning Capabilities Offered
              by Ravian AI
            </p>
          </div>
          <div className="flex flex-row gap-3 z-10">
            <Link href={"http://20.106.224.149:8501/"} target="_blank">
              <Button size="lg" className="gap-4 cursor-pointer transform hover:scale-100 scale-95 transition duration-300 ease-in-out">
                Try ravian
                <MoveRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
