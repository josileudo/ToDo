import style from './taskProgress.module.css';

interface TaskProgressProps {
  totalTask: number;
  totalTaskDone: number;
}

export function TaskProgress({ totalTask, totalTaskDone }: TaskProgressProps) {
  return (
    <div className={style.taskProgress}>
      <div className={style.taskStatus}>
        <p className={style.taskCreated}>Tarefas criadas</p>
        <span>{totalTask}</span>
      </div>

      <div className={style.taskStatus}>
        <p className={style.taskDone}>Concluídas</p>
        <span>
          {totalTaskDone} de {totalTask}
        </span>
      </div>
    </div>
  );
}
