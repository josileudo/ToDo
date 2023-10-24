import { Check, Trash } from 'phosphor-react';
import { useState } from 'react';
import { ContentPreview, TaskProps } from '../App';
import styles from './Task.module.css';

interface TaskComponentProps {
  task: TaskProps;
  onCheckedTask: (id: number) => void;
}

export function Task({ task, onCheckedTask }: TaskComponentProps) {
  const [tasks, setTasks] = useState(task);

  function handleCheckButton() {
    onCheckedTask(tasks.id);
  }

  return (
    <ul className={styles.task}>
      <li className={styles.wrapper}>
        <button
          type="button"
          className={task.content.state ? styles.buttonChecked : styles.button}
          onClick={handleCheckButton}
        >
          <span>{task.content.state ? <Check size={18} /> : ''}</span>
        </button>
        <span
          className={
            task.content.state ? styles.taskDone : styles.taskInProgress
          }
        >
          {task.content.text}
        </span>
        <button className={styles.deleteTask} title="Task Delete">
          <Trash size={24} />
        </button>
      </li>
    </ul>
  );
}
