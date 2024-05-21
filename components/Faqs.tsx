import { Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FaqsItems = [
    {
      question: "What is Ravian AI?",
      answer: "Ravian AI is a data science platform that helps you analyze your data and uncover valuable insights.",
    },
    {
      question: "Who can use Ravian AI?",
      answer: "Ravian AI is designed for users of all skill levels, from data scientists to beginners. The platform offers user-friendly tools to empower everyone to unlock the power of their data.",
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, Ravian AI offers a free trial. find try ravian button and click on it to get started.", 
    },
    {
      question: "What kind of data can I use with Ravian AI?",
      answer: "Ravian AI can handle various data formats, including spreadsheets, CSV files, databases, and even cloud storage.",
    },
    {
      question: "Do I need to know how to code to use Ravian AI?",
      answer: "No coding knowledge is required! Ravian AI provides a user-friendly interface with drag-and-drop functionalities for easy data analysis.",
    }
  ];

export const FAQs = () => (
  <div className="w-full py-32" id="faqs">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Ravian AI <span className="text-blue-400">FAQs 
              </span>
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground text-left">
              Get answers to your questions about Ravian AI&apos;s features, capabilities, and benefits.
              </p>
            </div>
            <Link href={"mailto:care@ravian.ai"}>
              <Button className="gap-4" variant="outline">
                Any questions? Reach out <Mail className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
            {FaqsItems.map((item, index) => (
            <AccordionItem value={index + "x"} key={index}>
              <AccordionTrigger>
              {item.question}
              </AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
      </div>
    </div>
  </div>
);