import Pagination from "@/components/ui/pagination";
import { createFileRoute } from "@tanstack/react-router";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute("/guide/")({
  component: Guide,
});

export default function Guide() {
  return (
    <section className="overflow-scroll h-full space-y-4 px-4">
      <h1 className="text-5xl font-semibold">📖 Guides</h1>
      <img src="dia.png" alt="" className="w-11/12 h-auto rounded-xl" />
      <div className="prose mt-10 text-primary ">
<Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
    {`
# Usage

Buug is divided into four main sections:

1. **Daily Tasks**: Add and manage tasks for your daily activities.
2. **Project Manager**: Create projects and associate tasks and notes with them. Projects act as parents, and tasks/notes are their children.
3. **Note-Taking**: Use markdown to write detailed notes and documentation.
4. **Progress Visualization**: View charts that showcase your progress over time.
      `}
  </Markdown>
  </div>

      <Pagination link1="/installation" name1="Installation" link2="/guide/markdown" name2="Markdown"/>
    </section>
  );
}
