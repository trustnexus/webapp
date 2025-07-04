import { create } from 'zustand';

interface AppStates {
  hovered: string;
  setHovered: (value: string) => void;
}

const useAppStore = create<AppStates>((set) => ({
  hovered: '',
  setHovered: (value: string) => set({ hovered: value }),
}));

export default useAppStore;
