import { createFileRoute } from "@tanstack/react-router";
import Pagination from "@/components/ui/pagination";

export const Route = createFileRoute("/intro")({
  component: Introduction,
});

interface Notes {
  title?: string;
  subTitle?: string;
  desc?: string;
}

export default function Introduction() {

  const notes: Notes[] = [
    {
      title: "1. Todo",
      subTitle: "🔥 Task management (Create, Edit, Delete Tasks)",
      desc: "buug provides an intuitive task management system that allows users to seamlessly create and remove tasks. This feature is designed to help users stay organized and on top of their daily responsibilities. Whether it’s personal tasks or work-related activities, users can easily manage their to-do lists and update them in real time.",
    },
    {
      title: "2. Project",
      subTitle: "💦 Drag-and-Drop Project Management",
      desc: "The drag-and-drop project management feature is a key aspect of buug that simplifies how users organize their projects. With this functionality, users can create new projects, assign tasks, and rearrange them according to priority or status by simply dragging and dropping. This visual approach makes it easy to track progress, shift priorities, and maintain an organized workflow.",
    },
    {
      title: "3. Markdown",
      subTitle: "✏️ Markdown Rich-Text Editor",
      desc: "The Markdown-powered rich-text editor in buug gives users a powerful tool for note-taking. Users can write, format, and structure their notes efficiently using Markdown syntax, which supports headings, bullet points, links, images, and more. This feature is particularly useful for users who prefer a minimalistic writing environment with fast formatting, as well as those who want more control over the appearance of their notes.",
    },
    {
      title: "4. Progress",
      subTitle: "📊 Daily Progress Tracking",
      desc: "One of the most unique features of buug is the ability to track progress on tasks and projects daily. The progress tracker visually displays a user’s productivity for each day of the week, allowing them to review completed tasks, track performance, and set new goals. This helps users monitor their workflow and stay motivated by seeing tangible results of their work.",
    },
  ];
  return (
    <section
      id="Introduction"
      className="overflow-scroll space-y-6 m-0 p-0 max-h-full pt-5 px-4"
    >
      <h1 className="text-4xl font-serif font-bold">🏝️ Introduction</h1>
      {notes.map((note, index) => {
        return (
          <div key={index} className="space-y-10 ">
            <h1 className="text-6xl font-bold mt-20">{note.title}</h1>
            <h1 className="text-2xl">{note.subTitle}</h1>
            <p className="text-lg text-zinc-600 xl:w-8/12 md:w-10/12 dark:text-zinc-400 ml-10">
              {note.desc}
            </p>

            <div className=" mt-20 rounded-2xl w-9/12 pt-2 pr-2 bg-zinc-200 dark:bg-zinc-700">
              <img
                src={`b${index + 1}.png`}
                alt=""
                className="rounded-tr-2xl w-full content-center"
              />
            </div>
            <div className="border-b border-b-zinc-300 dark:border-b-zinc-700" />
          </div>
        );
      })}

      <Pagination link1="/" name1="Getting Started" link2="/new" name2="What's new?"/>
    </section>
  );
}
