import { create } from "zustand";

interface DocStore {
  isDarkMode: boolean;
  setIsDarkMode: () => void;
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const useDocStore = create<DocStore>()((set) => ({
  // Toggle Light or Dark theme
  isDarkMode: true,
  setIsDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),

  // Select tab from sidebar
  selectedTab: "Getting Started",
  setSelectedTab: (tab) => {
    set({ selectedTab: tab });
  },
}));

export default useDocStore;
