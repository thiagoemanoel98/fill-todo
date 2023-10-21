import { Task } from '@models';
import { create } from 'zustand';

type TaskStore = {
  tasks: Task[];
  tasksFiltered: Task[];
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
};

export const useTaskStore = create<TaskStore>((set) => {
  return {
    tasks: [],
    tasksFiltered: [],
    addTask: (task: Task) => {
      set((state) => ({ tasks: [...state.tasks, task] }));
    },
    removeTask: (task: Task) => {
      set((state) => ({
        tasks: state.tasks.filter((item) => item.id !== task.id)
      }));
    }
  };
});
