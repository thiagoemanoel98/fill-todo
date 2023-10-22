import { create } from 'zustand';

type HomeStore = {
  showDoneIsEnable: boolean;
  toggleSwitchShowDone: () => void;
};

export const useHomeStore = create<HomeStore>((set) => {
  return {
    showDoneIsEnable: false,
    toggleSwitchShowDone: () => {
      set((state) => ({
        showDoneIsEnable: !state.showDoneIsEnable
      }));
    }
  };
});
