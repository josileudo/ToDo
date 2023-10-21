import { Header } from './components/header';
import { NewTask } from './components/newTask';

import styles from './App.module.css';
import './global.css';
import { TaskProgress } from './components/taskProgress';
import { Task } from './components/Task';
import { useState } from 'react';

export interface ContentPreview {
  state: boolean;
  text: string
}
export interface TaskProps {
  id?: number;
  content: ContentPreview
}

const taskMock: TaskProps[] = [
  {
    id: 1,
    content: {
      state: false,
      text: 'Criar componente de texto'
    }
  },
  {
    id: 2,
    content: {
      state: false,
      text: 'Ler a bíblia'
    }
  },
  {
    id: 3,
    content: {
      state: false,
      text: 'Mandar mensagem para o João dev'
    }
  },
  {
    id: 4,
    content: {
      state: true,
      text: 'Salvar arquivo'
    }
  },
  {
    id: 5,
    content: {
      state: true,
      text: 'Enviar email para o cliente'
    }
  }
]

export function App() {
  const [task, setTask] = useState<TaskProps[]>(taskMock)
  const [newTask, setNewTask] = useState<TaskProps>()

  function createNewTask(taskProp: string) {
    const taskContent: TaskProps = {
      id: task.length + 1,
      content: {state: false, text: taskProp}
    }
    setTask([...task, taskContent])
  }

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <NewTask onCreateNewTask={createNewTask} />
        <section>
          <TaskProgress />
          <div className={ styles.Tasks }>
            {task.map((task: TaskProps) => {
             return (
              <Task key={task.id} content={task.content}/>
             )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
