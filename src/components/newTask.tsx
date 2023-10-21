import { useState } from 'react';
import styles from './newTask.module.css';
import { PlusCircle } from 'phosphor-react';
import { TaskProps } from '../App';

interface NewTaskProps {
  onCreateNewTask: ((task: TaskProps) => void)
}

export function NewTask({ onCreateNewTask }: NewTaskProps) {
  const [task, setTask] = useState<string>('')

  function handleCreateNewTask() {
    event?.preventDefault()
    const test: TaskProps = {
      id: 6,
      content: {
        state: false,
        text: 'Criar componente de texto'
      }
    }
    
    onCreateNewTask(test)
    console.log('hello')
  }

  return (
    <div className={ styles.task }>
      <form onSubmit={handleCreateNewTask} className={ styles.taskForm }>
        <input
          type='text'
          placeholder="Adicione uma nova tarefa"
        />
        <button
          type='submit'
        >
          Criar
          <PlusCircle size='16' />
        </button>
      </form>      
    </div>
  )
}