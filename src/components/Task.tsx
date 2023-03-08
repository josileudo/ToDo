import { Check, Trash } from 'phosphor-react'
import { useState } from 'react'
import { TaskProps } from '../App';
import styles from './Task.module.css'

export function Task(content: TaskProps) {
  const [checkButton, setCheckButton] = useState(false);

  function handleCheckButton() {
    setCheckButton(!checkButton);
  }

  return(
    <ul className={ styles.task }>
      <li className={ styles.wrapper }>        
        <button 
          type="button"
          className={ checkButton ? styles.buttonChecked : styles.button }
          onClick={handleCheckButton}
        >
          <span>{ checkButton ? <Check size={ 18 }/> : ''}</span>
        </button>        
        <span 
          className={checkButton ? styles.taskDone : styles.taskInProgress}
        >
          {content.content.text}
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