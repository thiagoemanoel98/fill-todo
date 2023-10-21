import { useTaskStore } from '@store';

export function useHomeData() {
  const [tasks, tasksFiltered] = useTaskStore((state) => [
    state.tasks,
    state.tasksFiltered
  ]);

  function isExpired() {}

  return { tasks, tasksFiltered };
}
