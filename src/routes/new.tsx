import Pagination from "@/components/ui/pagination";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/new")({
  component: New,
});

export default function New() {
  return (
    <section
      id="New"
      className="overflow-scroll m-0 p-0 max-h-full pt-5 px-4 space-y-7"
    >
      <h1 className="text-4xl font-semibold">Version 1.x Release Notes</h1>

      <h2 className="text-3xl font-medium">Bug Fixes</h2>
      <ul className="list-disc ml-4 space-y-3">
        <li>
          Fixed an issue where unfinished tasks did not automatically change
          their state after 24 hours.
        </li>
      </ul>

      <h2 className="text-3xl font-medium">New Features</h2>
      <ul className="list-disc ml-4 space-y-3">
        <li>
          Added the ability to create tasks within their corresponding
          divisions, improving organization.
        </li>
        <li>
          Unfinished tasks will now move to a dedicated section instead of being
          removed automatically after 24 hours, allowing users to review all
          pending tasks.
        </li>
        <li>
          Introduced bottom-screen notifications to keep users informed without
          interrupting their workflow.
        </li>
        <li>
          Implemented a toggle between list and board views in the project
          management section, giving users more flexibility in task
          visualization.
        </li>
        <li>
          Added shortcuts for faster Markdown editing, increasing productivity
          for note-taking.
        </li>
        <li>
          Users can now toggle between full-screen and normal-screen modes when
          working in Markdown, allowing distraction-free writing.
        </li>
        <li>
          A single-click option allows users to remove both Markdown and
          progress sections from the sidebar if they are not needed.
        </li>
        <li>
          Added customization options for theme and font, offering more
          personalization.
        </li>
        <li>
          Introduced Amharic language support in addition to English, making the
          app more accessible for Amharic-speaking users.
        </li>
      </ul>

      <h2 className="text-3xl font-medium">Wishlist for Future Releases</h2>
      <ul className="list-disc ml-4 space-y-3">
        <li>Vim keymapping support for faster task navigation.</li>
        <li>
          Ability to create and remove tasks directly from within Markdown.
        </li>
        <li>
          Notes and project linking, so that each project can have related notes
          and tasks connected seamlessly.
        </li>
      </ul>
      <Pagination link1="/intro" name1="Introduction" link2="/installation" name2="Installation" />
    </section>
  );
}
