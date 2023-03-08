import { Header } from './components/header';
import { NewTask } from './components/newTask';

import styles from './App.module.css';
import './global.css';
import { TaskProgress } from './components/taskProgress';
import { Task } from './components/Task';

interface ContentPreview {
  state: boolean;
  text: string
}
export interface TaskProps {
  id?: number;
  content: ContentPreview
}

const task: TaskProps[] = [
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
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <NewTask />
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
