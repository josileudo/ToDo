import styles from './newTask.module.css';
import { PlusCircle } from 'phosphor-react';

export function NewTask() {
  return (
    <div className={ styles.task }>
      <form className={ styles.taskForm }>
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