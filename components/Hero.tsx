import { MoveRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export const Hero = () => (
  <>
    <div className="justify-center hidden sm:flex">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute z-0 opacity-5 text-muted-foreground"
        viewBox="0 0 1422 800"
      >
        <g
          shapeRendering="crispEdges"
          strokeLinejoin="round"
          fill="none"
          strokeWidth="2"
          stroke="currentColor"
        >
          <polygon points="1422,100 1244.25,0 1422,0"></polygon>
          <polygon points="1244.25,100 1244.25,0 1066.5,100"></polygon>
          <polygon points="1066.5,200 1066.5,100 1244.25,200"></polygon>
          <polygon points="1244.25,100 1244.25,200 1422,100"></polygon>
          <polygon points="1066.5,0 1066.5,100 888.75,100"></polygon>
          <polygon points="711,0 888.75,0 888.75,100"></polygon>
          <polygon points="711,200 711,100 888.75,100"></polygon>
          <polygon points="888.75,100 888.75,200 1066.5,100"></polygon>
          <polygon points="888.75,200 888.75,300 1066.5,300"></polygon>
          <polygon points="888.75,300 711,300 711,200"></polygon>
          <polygon points="888.75,400 711,400 711,300"></polygon>
          <polygon points="888.75,300 1066.5,300 888.75,400"></polygon>
          <polygon points="1422,200 1244.25,200 1422,300"></polygon>
          <polygon points="1244.25,200 1244.25,300 1066.5,200"></polygon>
          <polygon points="1066.5,400 1066.5,300 1244.25,300"></polygon>
          <polygon points="1422,400 1244.25,400 1244.25,300"></polygon>
          <polygon points="355.5,200 711,200 711,0"></polygon>
          <polygon points="355.5,100 177.75,0 177.75,100"></polygon>
          <polygon points="177.75,100 177.75,0 0,0"></polygon>
          <polygon points="177.75,200 0,200 177.75,100"></polygon>
          <polygon points="355.5,200 355.5,100 177.75,200"></polygon>
          <polygon points="177.75,200 177.75,300 355.5,300"></polygon>
          <polygon points="177.75,300 0,200 0,300"></polygon>
          <polygon points="0,400 0,300 177.75,400"></polygon>
          <polygon points="177.75,300 355.5,300 177.75,400"></polygon>
          <polygon points="711,250 711,200 622.125,200"></polygon>
          <polygon points="622.125,200 533.25,250 622.125,250"></polygon>
          <polygon points="533.25,300 622.125,250 622.125,300"></polygon>
          <polygon points="711,250 711,300 622.125,300"></polygon>
          <polygon points="533.25,250 444.375,250 444.375,200"></polygon>
          <polygon points="355.5,200 444.375,250 355.5,250"></polygon>
          <polygon points="444.375,250 444.375,300 355.5,250"></polygon>
          <polygon points="444.375,250 444.375,300 533.25,300"></polygon>
          <polygon points="533.25,350 533.25,300 444.375,350"></polygon>
          <polygon points="444.375,300 444.375,350 355.5,300"></polygon>
          <polygon points="355.5,400 444.375,400 355.5,350"></polygon>
          <polygon points="533.25,400 533.25,350 444.375,350"></polygon>
          <polygon points="533.25,300 533.25,400 711,300"></polygon>
          <polygon points="622.125,400 711,450 711,400"></polygon>
          <polygon points="622.125,400 622.125,450 533.25,450"></polygon>
          <polygon points="622.125,500 533.25,500 533.25,450"></polygon>
          <polygon points="711,500 711,450 622.125,500"></polygon>
          <polygon points="355.5,400 533.25,500 533.25,400"></polygon>
          <polygon points="444.375,550 444.375,500 533.25,550"></polygon>
          <polygon points="444.375,500 444.375,550 355.5,500"></polygon>
          <polygon points="444.375,550 444.375,600 355.5,600"></polygon>
          <polygon points="533.25,550 444.375,600 533.25,600"></polygon>
          <polygon points="711,500 711,600 533.25,600"></polygon>
          <polygon points="355.5,500 355.5,400 177.75,400"></polygon>
          <polygon points="177.75,400 177.75,500 0,500"></polygon>
          <polygon points="177.75,600 177.75,500 0,600"></polygon>
          <polygon points="355.5,600 177.75,600 177.75,500"></polygon>
          <polygon points="355.5,700 355.5,600 177.75,700"></polygon>
          <polygon points="177.75,600 0,600 177.75,700"></polygon>
          <polygon points="177.75,800 0,800 0,700"></polygon>
          <polygon points="355.5,800 177.75,800 355.5,700"></polygon>
          <polygon points="711,700 533.25,600 711,600"></polygon>
          <polygon points="533.25,600 533.25,700 355.5,600"></polygon>
          <polygon points="355.5,800 533.25,800 355.5,700"></polygon>
          <polygon points="533.25,800 533.25,700 711,700"></polygon>
          <polygon points="1422,500 1422,400 1244.25,400"></polygon>
          <polygon points="1244.25,400 1244.25,500 1066.5,400"></polygon>
          <polygon points="1244.25,600 1244.25,500 1066.5,600"></polygon>
          <polygon points="1244.25,500 1422,600 1422,500"></polygon>
          <polygon points="1066.5,450 1066.5,400 977.625,450"></polygon>
          <polygon points="977.625,450 977.625,400 888.75,400"></polygon>
          <polygon points="888.75,500 888.75,450 977.625,450"></polygon>
          <polygon points="1066.5,500 1066.5,450 977.625,500"></polygon>
          <polygon points="888.75,400 711,500 711,400"></polygon>
          <polygon points="888.75,600 711,500 711,600"></polygon>
          <polygon points="1066.5,500 1066.5,600 888.75,500"></polygon>
          <polygon points="888.75,700 1066.5,700 1066.5,600"></polygon>
          <polygon points="888.75,700 888.75,600 711,700"></polygon>
          <polygon points="711,700 888.75,700 888.75,800"></polygon>
          <polygon points="888.75,700 1066.5,800 888.75,800"></polygon>
          <polygon points="1422,800 1422,600 1066.5,600"></polygon>
        </g>
        <g
          fill="hsl(220, 62%, 45%)"
          strokeWidth="3"
          stroke="hsl(220, 43%, 13%)"
        ></g>
      </svg>
    </div>

    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-52 items-center justify-center flex-col">
          <div className="flex gap-4 flex-col items-center">
            <h1 className="text-4xl md:text-7xl text-center font-semibold z-20">
              Turn Data into <span className="text-blue-400">Decisions 
              
              </span>
              
            </h1>
            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center  z-20">
              Advanced Data Analytics and Machine Learning Capabilities Offered
              by Ravian AI
            </p>
          </div>
          <div className="flex flex-row gap-3 z-10">
            <Link href={"/"}>
            <Button size="lg" className="gap-4 cursor-pointer">
              Try ravian
              <MoveRight className="w-4 h-4" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);
