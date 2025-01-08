import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import {  useEffect } from "react";
import useDocStore from "../store/docStore";
import { Moon, Sun } from "lucide-react";

interface Tab {
  main: string;
  path: string;
}

export const Route = createRootRoute({
  notFoundComponent: () => {
    return (
      <div className="flex flex-col items-start mt-20 w-96 mx-auto justify-center text-6xl">
        <h1 className="text-9xl font-bold">404</h1>
        <p>Not found!</p>
      </div>
    );
  },

  component: RootComponent,
});

function RootComponent() {
  const store = useDocStore();

  const tabs: Tab[] = [
    {
      main: "Getting Started",
      path: "/",
    },
    {
      main: "Introduction",
      path: "/intro",
    },
    {
      main: "What's new?",
      path: "/new",
    },
    {
      main: "Installation",
      path: "/installation",
    },

    {
      main: "Guides",
      path: "/guide",
    },
    {
      main: "Markdown",
      path: "/guide/markdown",
    },

    {
      main: "FAQ",
      path: "/faq",
    },
  ];

  useEffect(() => {
    const selectedTab = sessionStorage.getItem("tab");
      if (selectedTab) {
    store.setSelectedTab(selectedTab);
  } else {
    // If not, set the tab based on the current route
    const currentPath = window.location.pathname;
    const currentTab = tabs.find(tab => tab.path === currentPath)?.main;
    store.setSelectedTab(currentTab || "Getting Started");
  }
  }, []);

  useEffect(() => {
    if (store.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [store.isDarkMode]);


  return (
    <section className="h-screen fixed w-full bg-gradient-to-r from-white via-zinc-50 to-fuchsia-100 dark:bg-gradient-to-r dark:from-[#151617] dark:via-zinc-950 dark:to-fuchsia-950 bg-white text-black dark:bg-black dark:text-white">
      <nav className="flex fixed w-full top-0 justify-between border-b border-b-zinc-300 bg-white dark:bg-[#0b0c0c] dark:border-b-zinc-700 p-4 shadow-lg items-center">
        <div className="flex mt-2 ml-2 items-center">
          <div className="bg-gray-100 rounded-full inline-flex ">
            <img src="sheep.png" alt="" className="w-10" />
          </div>
          <div className="lg:flex hidden flex-col ml-3 justify-start">
            <h1 className="font-semibold text-xl text-left">buug</h1>
            <p className="text-sm font-normal text-gray-400">
              All in one Productivity app
            </p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <button
            type="button"
            className="items-center"
            onClick={() => {
              store.setIsDarkMode();
            }}
          >
            {store.isDarkMode ? (
              <Moon size={26} color="white" />
            ) : (
              <Sun size={26} color="gray" />
            )}
          </button>
          <a
          href="https://buug.vercel.app"
            className="bg-purple-300 dark:bg-purple-800 text-primary px-3 py-2 rounded-lg w-40 text-center "
          >
             Try now 
          </a>
        </div>
      </nav>

      <main className="flex h-screen pt-32">
        <section className="md:w-[20rem] hidden md:px-4 border-r border-r-zinc-300 dark:border-r-zinc-500 md:flex flex-col space-y-3">
              <div
                className="flex flex-col items-start justify-start space-y-4"
              >
                    {tabs.map((tab, index) => {
            return (
              <div
                key={index}
                className="flex items-start justify-start space-x-4 space-y-8"
              >
                <Link
                  to={tab.path}
                  onClick={() => {
                    store.setSelectedTab(tab.main);
                    sessionStorage.setItem("tab", tab.main);
                  }}
                  className={
                    tab.main == store.selectedTab
                      ? "[&:active]bg-red-500 flex space-x-2 w-72 items-center justify-start bg-secondary text-primary dark:bg-zinc-800  px-3 py-2 rounded-lg"
                      : "flex space-x-2 items-center w-72 justify-start px-3 py-2 rounded-lg"
                  }
                >
                  <div>{tab.main}</div>
                </Link>
              </div>
            );
          })}

              </div>

        </section>
        <section className="w-full md:w-11/12">
          <Outlet />
        </section>
      </main>
    </section>
  );
}
