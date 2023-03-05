import style from './taskProgress.module.css';

export function TaskProgress() {
  return(
    <div className={style.taskProgress}>
      
      <div className={style.taskStatus}>
        <p className={style.taskCreated}>Tarefas criadas</p>
        <span>5</span>
      </div>

      <div className={style.taskStatus}>
        <p className={style.taskDone}>Concluídas</p>
        <span>2 de 5</span>
      </div>
    </div>
  )
}