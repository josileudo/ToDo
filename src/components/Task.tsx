import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import { ContentPreview, TaskProps } from '../App';
import styles from './Task.module.css'

export function Task({ content }: TaskProps) {
  const [tasks, setTasks] = useState([content]);
  
  function handleCheckButton() {    
    setTasks(
      tasks.map(task => {
        task.state = !task.state
        return task
      })
    )
  }
  
  return(
    <ul className={ styles.task }>
      <li className={ styles.wrapper }>        
        <button 
          type="button"
          className={ content.state ? styles.buttonChecked : styles.button }
          onClick={handleCheckButton}
        >
          <span>{ content.state ? <Check size={ 18 }/> : ''}</span>
        </button>        
        <span 
          className={content.state ? styles.taskDone : styles.taskInProgress}
        >
          { content.text }
        </span>
        <button 
          className={styles.deleteTask}
          title="Task Delete"
        >
          <Trash size={ 24 }/>
        </button>
      </li>
    </ul>
  )
}