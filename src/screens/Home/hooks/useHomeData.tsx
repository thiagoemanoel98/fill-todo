import { Task, TaskStatus } from '@models';
import { useTaskStore } from '@store';

export function useHomeData() {
  const [tasks, tasksFiltered] = useTaskStore((state) => [
    state.tasks,
    state.tasksFiltered
  ]);

  function getStatusOfTask(task: Task): TaskStatus {
    if (task.done) {
      return 'done';
    }
    let hasExpired = checkIfTaskExpired(task);

    if (hasExpired) {
      return 'expired';
    }

    return 'todo';
  }

  function checkIfTaskExpired(task: Task): boolean {
    const currentDate = new Date();

    const currentDateWithoutTime = new Date().setHours(0, 0, 0, 0);
    const todoDateWithoutTime = task.todoDate.setHours(0, 0, 0, 0);

    if (todoDateWithoutTime < currentDateWithoutTime) {
      console.log('ovoc retorar 1');
      return true;
    } else if (task.todoTime < currentDate) {
      console.log('ovoc retorar 2');

      return true;
    }
    return false;
  }

  return { tasks, tasksFiltered, getStatusOfTask };
}
