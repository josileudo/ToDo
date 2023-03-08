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
          <span>{ checkButton ? <Check /> : ''}</span>
        </button>        
        <span>lorem psumdasd dasdas dasd asdas a dasdasda  leor iasls orosla opror kokok odansjnd jdpqp aspdj pa dapsjdp jaddj</span>
        <button>{ <Trash /> }</button>
      </li>
    </ul>
  )
}