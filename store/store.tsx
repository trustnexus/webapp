import { create } from "zustand";

interface AppStates {
  hovered: string;
  setHovered: (value: string) => void;
  menuOpen: boolean;
  setMenuOpen: (data: boolean) => void;
  showServices: boolean;
  setShowServices: (data: boolean) => void;
  showIndustries: boolean;
  setShowIndustries: (data: boolean) => void;
  showInsight: boolean;
  setShowInsight: (data: boolean) => void;
  showAbout: boolean;
  setShowAbout: (data: boolean) => void;
  showInvestors: boolean;
  setShowInvestors: (data: boolean) => void;
}

const useAppStore = create<AppStates>((set) => ({
  hovered: "",
  setHovered: (value: string) => set({ hovered: value }),
  menuOpen: false,
  setMenuOpen: (data: boolean) => set({ menuOpen: data }),
  showServices: false,
  setShowServices: (data: boolean) => set({ showServices: data }),
  showIndustries: false,
  setShowIndustries: (data: boolean) => set({ showIndustries: data }),
  showInsight: false,

  setShowInsight: (data: boolean) => set({ showInsight: data }),
  showAbout: false,

  setShowAbout: (data: boolean) => set({ showAbout: data }),
  showInvestors: false,

  setShowInvestors: (data: boolean) => set({ showInvestors: data }),
}));

export default useAppStore;
