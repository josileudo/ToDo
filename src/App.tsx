import { Header } from './components/header';
import { Task } from './components/task';

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <Task />
      </div>
    </div>
  )
}
