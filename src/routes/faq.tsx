import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Pagination from "@/components/ui/pagination";
import { Github, Mail, X } from "lucide-react";

export const Route = createFileRoute("/faq")({
  component: FAQ,
});

function FAQ() {
  return (
    <section className="ml-20 relative h-full">
      <h1 className="text-4xl font-semibold">FAQ</h1>
      <div className="w-8/12 mx-auto">
        <Accordion type="single" collapsible className="space-y-5">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl">
              Meaning of buug?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-zinc-400">
              - buug means sheep in amharic(በግ) <br />- Sheep or domestic sheep
              (Ovis aries) are a domesticated, ruminant mammal typically kept as
              livestock.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl">
              What is buug?
            </AccordionTrigger>
            <AccordionContent className="text-lg text-zinc-400">
              - buug is a free application that revolutionizes task management,
              project planning, markdown writer
              <br />
              and progress visualization
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl">Is it free?</AccordionTrigger>
            <AccordionContent>Yes. It is free and opensource.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

     <div className='flex flex-col space-y-5 bottom-0 absolute'>
      
        <h1 className='text-xl'>Other ways to find help:</h1>
        <div className='flex space-x-5'>
           <a href="https://x.com/wesenseged_" target='_blank'><X size={40} className='hover:scale-105'/></a>
           <Mail size={40} className='hover:scale-105'/>
           <a href="https://github.com/wesenseged/buug" target="_blank"><Github size={40} className='hover:scale-105'/></a>
        </div>
      <Pagination link1="/guide/markdown" name1="Markdown" />
     </div>
    </section>
  );
}
