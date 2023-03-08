import { Header } from './components/header';
import { NewTask } from './components/newTask';

import styles from './App.module.css';
import './global.css';
import { TaskProgress } from './components/taskProgress';
import { Task } from './components/Task';

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <NewTask />
        <article>
          <TaskProgress />
          <div className={ styles.Tasks }>
            <Task />
            <Task />
            <Task />
          </div>
        </article>
      </div>
    </div>
  )
}
