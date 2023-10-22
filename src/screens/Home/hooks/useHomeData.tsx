import { Task, TaskStatus } from '@models';
import { useTaskStore } from '@store';
import { convertDatetimeStringToDate } from '@utils';

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

  // posso dividir mais ainda -> pegar partes do dia/mes/ano
  function checkIfTaskExpired(task: Task): boolean {
    const dateTime = convertDatetimeStringToDate(task.todoDate, task.todoTime);
    const currentDatetime = new Date();

    if (isNaN(dateTime.getTime())) {
      console.log('Data ou horário inválidos');
      return true;
    }

    if (dateTime < currentDatetime) {
      return true;
    } else {
      return false;
    }
  }

  return { tasks, tasksFiltered, getStatusOfTask };
}
