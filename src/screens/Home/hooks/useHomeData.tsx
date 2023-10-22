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

  // posso dividir mais ainda -> pegar partes do dia/mes/ano
  function checkIfTaskExpired(task: Task): boolean {
    const dataParts = task.todoDate.split('/');
    const horarioParts = task.todoTime.split(':');

    const day = parseInt(dataParts[0], 10);
    const month = parseInt(dataParts[1], 10) - 1;
    const year = parseInt(dataParts[2], 10);
    const hour = parseInt(horarioParts[0], 10);
    const minute = parseInt(horarioParts[1], 10);
    const second = parseInt(horarioParts[2], 10);

    const dateTime = new Date(year, month, day, hour, minute, second);
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
