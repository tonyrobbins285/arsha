import { create } from "zustand";

type MobileNavStore = {
  isOpen: boolean;
  setIsOpen: () => void;
  open: () => void;
  close: () => void;
};
type FullpageImageStore = {
  isOpen: boolean;
  setIsOpen: () => void;
  open: () => void;
  data: { src: string; category: string }[] | null;
  setData: (portfolioData: FullpageImageStore["data"]) => void;
  close: () => void;
};

type OverlayStore = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const useMobileNavStore = create<MobileNavStore>((set) => ({
  isOpen: false,
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const useFullpageImageStore = create<FullpageImageStore>((set) => ({
  isOpen: false,
  data: null,
  setData: (portfolioData: FullpageImageStore["data"]) =>
    set({ data: portfolioData && [...portfolioData] }),
  setIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));

export const useOverlayStore = create<OverlayStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
