import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
} from "./ui/card";

export const Offerings = () => (
  <div className="w-full pt-24 pb-32" id="Offerings">
    <div className="container mx-auto">
      <Card className="p-8 bg-background relative z-20">
        <div className="flex gap-2 flex-col items-start">
          <div>
            <Badge variant={"outline"}>Features</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Our <span className="text-blue-400">Offerings</span>
            </h2>
            <p className="text-lg max-w-xl lg:max-w-xl leading-relaxed tracking-tight text-muted-foreground">
              Ravian AI introduces a revolutionary approach to data science and
              analytics, democratizing advanced techniques and making them
              accessible to users of all skill levels.
            </p>
          </div>
          <div className="flex gap-10 pt-12 flex-col w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 items-start lg:grid-cols-3 gap-10">
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Easy to use</p>
                  <p className="text-muted-foreground text-sm">
                    Use Ravian AI without any coding knowledge.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Gen AI</p>
                  <p className="text-muted-foreground text-sm">
                    Create custom AI models with cutting-edge tech.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Collaboration</p>
                  <p className="text-muted-foreground text-sm">
                    Work together on data projects with your team.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 w-full items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Data Exploration</p>
                  <p className="text-muted-foreground text-sm">
                    See your data clearly with charts & graphs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>Customizable Solutions</p>
                  <p className="text-muted-foreground text-sm">
                    Build solutions tailored to your business needs.
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-6 items-start">
                <Check className="w-4 h-4 mt-2 text-primary" />
                <div className="flex flex-col gap-1">
                  <p>AI Prediction</p>
                  <p className="text-muted-foreground text-sm">
                    Make future predictions using AI algorithms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  </div>
);
