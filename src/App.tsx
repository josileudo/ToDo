import { Header } from './components/header';
import { NewTask } from './components/newTask';

import styles from './App.module.css';
import './global.css';
import { TaskProgress } from './components/taskProgress';

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <NewTask />
        <article>
          <TaskProgress />
          <div>
            <div>
              <input
                type="checkbox"
              >                
              </input>
              <span>lorem psum leor iasls orosla opror</span>
              <button>
                Delete
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
