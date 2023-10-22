import { Task, TaskStatus } from '@models';
import { useHomeStore, useTaskStore } from '@store';
import { convertDatetimeStringToDate } from '@utils';

export function useHomeData() {
  const [showDoneIsEnable, toggleSwitchShowDone] = useHomeStore((state) => [
    state.showDoneIsEnable,
    state.toggleSwitchShowDone
  ]);

  const [tasks, tasksNotDone] = useTaskStore((state) => [
    state.tasks,
    state.getTasksNotDone
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

  return {
    tasks,
    tasksNotDone,
    showDoneIsEnable,
    toggleSwitchShowDone,
    getStatusOfTask
  };
}
