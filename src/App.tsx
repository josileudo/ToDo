import { Header } from './components/header';
import { NewTask } from './components/newTask';

import styles from './App.module.css';
import './global.css';
import { TaskProgress } from './components/taskProgress';
import { Task } from './components/Task';
import { useState } from 'react';

export interface ContentPreview {
  state: boolean;
  text: string;
}
export interface TaskProps {
  id: number;
  content: ContentPreview;
}

const taskMock: TaskProps[] = [
  {
    id: 1,
    content: {
      state: true,
      text: 'Criar componente de texto',
    },
  },
];

export function App() {
  const [task, setTask] = useState<TaskProps[]>(taskMock);
  const [newTask, setNewTask] = useState<TaskProps>();

  let totalTaskDone = 0;
  function createNewTask(taskProp: string) {
    const taskContent: TaskProps = {
      id: task.length + 1,
      content: { state: false, text: taskProp },
    };

    setTask([...task, taskContent]);
  }

  function handleCheckedTask(id: number) {
    const isDone = task.filter((t) => t.content.state === true);
    console.log(isDone.length);
    task.map((val) => {
      if (val.content.state) console.log(task.length);
    });

    console.log(id);
  }

  function checkTotalTaskDone() {
    // const isDone = task.filter((t) => t.content.state === true);
    // console.log(isDone.length);
    // task.map((val) => {
    //   if (val.content.state) console.log(task.length);
    // });
  }

  console.log(task);

  checkTotalTaskDone();

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTask onCreateNewTask={createNewTask} />
        <section>
          <TaskProgress totalTask={task.length} totalTaskDone={totalTaskDone} />
          <div className={styles.Tasks}>
            {task.map((task: TaskProps) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  onCheckedTask={handleCheckedTask}
                />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
