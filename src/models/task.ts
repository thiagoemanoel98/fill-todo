export type TaskStatus = 'todo' | 'done' | 'expired';

export interface Task {
  id: string;
  text: string;
  done: boolean;
  todoDate: string;
  todoTime: string;
}
