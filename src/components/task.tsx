import styles from './task.module.css'

export function Task() {
  return (
    <div className={ styles.task }>
      <form className={ styles.taskForm }>
        <input
          type='text'
          placeholder="Adicione uma nova tarefa"
        />
        <button>
          Criar
        </button>
      </form>      
    </div>
  )
}