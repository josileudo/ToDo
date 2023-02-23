import styles from './task.module.css';
import { PlusCircle } from 'phosphor-react';

export function Task() {
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