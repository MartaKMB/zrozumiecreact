import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { getSubheading } from './utils/getSubheading';

function App() {
  const todos = [
    { name: 'zapłacić rachunki', done: false, id: 1 },
    { name: 'wyrzucić śmieci', done: true, id: 2 },
  ];
  const subheading = getSubheading(todos.length);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{subheading}</h2>
        </div>
        <button className={styles.button}>+</button>
      </header>
      <Form />
      <ul>
        {todos.map(({id, name, done}) => (
          <TodoItem key={id} name={name} done={done} />
        ))}
      </ul>
    </div>
  );
}

export default App;
