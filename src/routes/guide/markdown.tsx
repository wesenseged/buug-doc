import { createFileRoute } from "@tanstack/react-router";
import { BsDot } from "react-icons/bs";
import { FaMarkdown } from "react-icons/fa";
import Pagination from "@/components/ui/pagination";

export const Route = createFileRoute("/guide/markdown")({
  component: Markdown,
});

export default function Markdown() {
  return (
    <section className="px-4 pt-5 overflow-scroll h-full">
      <h1 className="text-5xl font-semibold">✏️ Markdown</h1>
      <p className="text-lg text-zinc-400 mt-3">
        Markdown is a simple way to format text that looks great on any device.
      </p>
      <div className="grid grid-rows-3 gap-10 xl:w-full w-1/12 items-start xl:mx-auto mt-7">
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <h1 className=" text-2xl font-bold ">Option 1</h1>
          <h1 className=" text-2xl font-bold ">Option 2</h1>
          <h1 className=" text-2xl font-bold ">Result</h1>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p className="">*Italic*</p>

          <p className="">_Italic_</p>
          <p className="">
            <i>Italic</i>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p className="">**Bold**</p>
          <p className="">__Bold__</p>
          <p className="">
            <b>Bold</b>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p className=""># Heading 1</p>
          <p className="">
            ==== <br />
            Heading 1
          </p>
          <h1 className="text-4xl">Heading 1</h1>
        </div>

        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p className="">##### Heading 2</p>
          <p className="">
            ------ <br /> Heading 2
          </p>
          <h1 className="text-3xl">Heading 2</h1>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>[Link] (http://a.com)</p>
          <p>
            [Link][1]
            <br />
            . <br />
            . <br />
            . <br />
            [1]: http://a.com
          </p>
          <p className="text-blue-300">
            <a href="#">Link</a>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>![Image] (http://url/a.png)</p>
          <p>
            ![Link][1]
            <br />
            . <br />
            . <br />
            . <br />
            [1]: http://url/a.png
          </p>
          <p>
            <FaMarkdown size={26} />
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p> Blockquote</p>
          <p></p>
          <p>Blockquote</p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>
            * List <br />
            * List <br />* List
          </p>

          <p>
            - List <br />
            - List <br />- List
          </p>

          <p>
            <span className="flex items-center">
              <BsDot />
              List
            </span>
            <span className="flex items-center">
              <BsDot />
              List
            </span>
            <span className="flex items-center">
              <BsDot />
              List
            </span>
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>
            1. One <br />
            2. Two <br />
            3. Three <br />
          </p>
          <p>
            1) One <br />
            2) Two <br />
            3) Three <br />
          </p>
          <p className="text-lg">
            1.One <br />
            2.Two <br />
            3.Three <br />
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>
            Horizontal rule:
            <br /> ---
          </p>
          <p>
            Horizontal rule:
            <br /> ***
          </p>
          <p>
            Horizontal rule:
            <br /> <div className="w-40 bg-zinc-200 dark:bg-zinc-800 p-1" />
          </p>
        </div>

        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>`Inline code` with bracticks</p>
          <p></p>
          <p className="flex items-center">
            <div className=" bg-zinc-300 dark:bg-gray-900 mr-1 rounded-lg p-1">
              Inline code
            </div>
            with bacticks
          </p>
        </div>
        <div className="grid grid-cols-3 gap-96 border-b border-b-zinc-300 dark:border-b-zinc-500 p-3 hover:bg-zinc-100 hover:dark:bg-zinc-800">
          <p>
            ``` # code block <br /> print 'hello world'
            <br /> print 'welcome'
            <br />
            ```
          </p>
          <p>
            ....# code block <br />
            ....print 'hello world'
            <br /> ....print 'welcome'
            <br />
          </p>
          <p className="flex items-center">
            <div className=" bg-zinc-300 dark:bg-gray-900 mr-1 rounded-lg p-2">
              # code block
              <br /> print 'hello world'
              <br />
              print 'welcome'
            </div>
          </p>
        </div>
      </div>

      <Pagination link1="/guide" name1="Guide" link2="/faq" name2="FAQ"/>
    </section>
  );
}
