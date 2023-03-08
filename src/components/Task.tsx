import { Check, CheckCircle, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Task.module.css'

export function Task() {
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
          lorem psumdasd dasdas dasd asdas a dasdasda  leor iasls orosla 
          opror kokok odansjnd jdpqp aspdj pa dapsjdp jaddj
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