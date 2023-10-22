import { create } from 'zustand';

type NewTaskStore = {
  date: Date;
  time: Date;
  showDatePicker: boolean;
  showTimePicker: boolean;
  changeDate: (date: Date) => void;
  changeTime: (time: Date) => void;
  setShowDatePicker: (value: boolean) => void;
  setShowTimePicker: (value: boolean) => void;
};

export const useNewTaskStore = create<NewTaskStore>((set) => {
  return {
    date: new Date(),
    time: new Date(new Date().getTime() + 2 * 60 * 60 * 1000),
    showDatePicker: false,
    showTimePicker: false,
    changeDate: (date: Date) => {
      set(() => ({
        date: date
      }));
    },
    changeTime: (time: Date) => {
      set(() => ({
        time: time
      }));
    },
    setShowDatePicker: (value: boolean) => {
      set(() => ({
        showDatePicker: value
      }));
    },
    setShowTimePicker: (value: boolean) => {
      set(() => ({
        showTimePicker: value
      }));
    }
  };
});
