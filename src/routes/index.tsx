import { createFileRoute } from "@tanstack/react-router";
import Pagination from "@/components/ui/pagination";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export const Route = createFileRoute("/")({
  component: Started,
});

export default function Started() {
  return (
    <section className="overflow-scroll m-0 p-0 max-h-full pt-5 px-4">
      <div className="space-y-8">
        <h1 className="text-4xl font-serif font-bold">🚀 Getting Started</h1>
        <h1 className="text-7xl font-semibold font-sans">buug</h1>
        <p className="text-zinc-600 dark:text-zinc-400 font-sans text-lg font-thin">
          buug is a free web app that revolutionizes task management, project
          planning, markdown writer and progress visualization
        </p>
        <img src="b2.png" alt="hero" className="w-8/12  m-4 rounded-sm" />
        <div className="space-y-8">
          <h1 className="text-4xl font-semibold mb-5 font-serif">
            ✨ Features
          </h1>
          <ul className="text-zinc-800 list-disc dark:text-zinc-300 space-y-3  ml-5">
            <li> 🔥 Users can create, edit, and delete tasks.</li>
            <li>
              💦 Users can create and manage projects using drag-and-drop
              functionality.
            </li>
            <li>
              ✏️ A rich-text editor that allows users to write notes in Markdown
              format.
            </li>
            <li>
              📊 Displays the user’s progress on tasks and projects for each day
              of the week.
            </li>
            <li>
              🥳 Full application localization with support for Amharic and
              English.
            </li>
          </ul>
          <h1 className="text-4xl font-serif font-semibold py-5">
            🎨 Customization Options
          </h1>
          <ul className="text-zinc-800 list-outside list-disc dark:text-zinc-300 space-y-3 ml-5">
            <li>
              🔵 Sidebar Customization: Users can adjust the color and font of
              the sidebar.
            </li>
            <li>
              Theme Settings: ☀️ Light and 🌙 dark theme options for user
              preference.
            </li>
            <li>
              Font Settings: Users can choose from multiple font styles to
              personalize their experience.
            </li>
          </ul>
      <div className="prose mt-10 text-primary ">
<Markdown remarkPlugins={[[remarkGfm, {singleTilde: false}]]}>
    {`

# Documentation

Visit the Buug documentation for detailed guides and examples, including a markdown cheat sheet:

- [Landing Page](https://buuug.netlify.app/)
- [Documentation](https://buug-doc.netlify.app/)

      `}
  </Markdown>
  </div>

        </div>
      </div>
      <Pagination link2="/intro" name2="Introduction" />
    </section>
  );
}
