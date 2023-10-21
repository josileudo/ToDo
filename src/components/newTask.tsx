import { ChangeEvent, useState } from 'react';
import styles from './newTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { TaskProps } from '../App';

interface NewTaskProps {
  onCreateNewTask: (task: string) => void;
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [task, setTask] = useState<string>('');

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateNewTask() {
    event?.preventDefault();

    onCreateNewTask(task);
    setTask('');
  }

  const isNewTaskEmpty = task.length === 0;

  return (
    <div className={styles.task}>
      <form onSubmit={handleCreateNewTask} className={styles.taskForm}>
        <input
          type="text"
          name="task"
          value={task}
          onChange={handleCreateNewTaskChange}
          placeholder="Adicione uma nova tarefa"
          required
        />
        <button disabled={isNewTaskEmpty} type="submit">
          Criar
          <PlusCircle size="16" />
        </button>
      </form>
    </div>
  );
}
