import { Task } from '@models';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

type TaskStore = {
  tasks: Task[];
  getTasksNotDone: () => Task[];
  addTask: (task: Task) => void;
  updateTask: (task: Task) => void;
  removeTask: (task: Task) => void;
};

const KEY_STORAGE = 'tasks-storage';

export const useTaskStore = create<TaskStore>()(
  persist(
    (set, get) => ({
      tasks: [],
      getTasksNotDone: () => {
        return get().tasks.filter((item) => item.done === false);
      },
      addTask: (task: Task) => {
        set((state) => ({ tasks: [...state.tasks, task] }));
      },
      removeTask: (task: Task) => {
        set((state) => ({
          tasks: state.tasks.filter((item) => item.id !== task.id)
        }));
      },
      updateTask: (task: Task) =>
        set((state) => ({
          tasks: state.tasks.map((item) =>
            item.id === task.id ? { ...item, ...task } : item
          )
        }))
    }),
    {
      name: KEY_STORAGE,
      storage: createJSONStorage(() => AsyncStorage)
    }
  )
);
