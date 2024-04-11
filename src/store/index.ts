import { create } from "zustand";

type MobileNavStore = {
  isOpen: boolean;
  setIsOpen: () => void;
  open: () => void;
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

export const useOverlayStore = create<OverlayStore>((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
