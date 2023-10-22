import { Task } from '@models';
import { useTaskStore } from '@store';

export const useShowTaskData = () => {
  const [markAsDone] = useTaskStore((state) => [state.updateTask]);

  function handleMarkDone(task: Task) {
    task.done = true;
    markAsDone(task);
  }

  function handleUnmarkDone(task: Task) {
    task.done = false;
    markAsDone(task);
  }

  return {
    handleMarkDone,
    handleUnmarkDone
  };
};
