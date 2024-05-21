import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import AboutImg from "../app/assets/aboutImg.webp";

export const About = () => (
  <div className="w-full pt-24 pb-32" id="about">
    <div className="container mx-auto">
      <div className="flex flex-col-reverse lg:flex-row gap-10 lg:items-center">
        <div className="bg-muted rounded-md w-full aspect-video h-full flex-1">
          <Image src={AboutImg} alt="About Image" />
        </div>
        <div className="flex gap-4 pl-0 lg:pl-20 flex-col  flex-1">
          <div>
            <Badge variant={"outline"}>Platform</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
              About Us
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              RAVIAN is a company that uses AI to transform data analysis. They
              offer a powerful platform that helps businesses use their data to
              make better decisions. RAVIAN is a leader in AI-driven analytics
              and can help your business unlock the potential of your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
