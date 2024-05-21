import { Bot, Building2, FileBarChart2 } from "lucide-react";
import { Badge } from "./ui/badge";

export default function Vision() {
  return (
    <>
      <div className="container py-24 lg:py-12" id="vision">
        <div>
          {/* Grid */}
          <div className="grid lg:grid-cols-2 gap-28">
            <div className="space-y-6 lg:space-y-10 lg:order-1 order-2">
              {/* Icon Block */}
              <div className="flex">
                <FileBarChart2 className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  Democratizing Data Analytics
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  This captures the vision of making advanced data analytics accessible to all organizations.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Bot className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  AI for Deeper Insights
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  This highlights the focus on using AI to go beyond solving problems and gain a deeper understanding of data.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Building2 className="flex-shrink-0 mt-2 h-6 w-6" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base sm:text-lg font-semibold">
                  Empowering Businesses Through Data
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                  This emphasizes the overall goal of using data to empower businesses for better decision-making and innovation.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
            <div className="flex flex-col gap-2 lg:order-2 order-1">
              <div>
                <Badge variant="outline">vision</Badge>
              </div>
              <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular">
              Our <span className="text-blue-400">Vision</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
                At RAVIAN AI, our vision is to redefine the frontiers of data science by integrating artificial intelligence with human ingenuity.
              </p>
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
    </>
  );
}
