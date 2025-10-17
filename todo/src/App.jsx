import { useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { getSubheading } from './utils/getSubheading';

function App() {
  const [isFormShown, setIsFormShown] = useState(false);
  const [todos, setTodos] = useState([
    { name: 'zapłacić rachunki', done: false, id: 1 },
    { name: 'wyrzucić śmieci', done: true, id: 2 },
  ]);
  const subheading = getSubheading(todos.length);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{subheading}</h2>
        </div>
        {!isFormShown && (
          <button
            className={styles.button}
            onClick={() => setIsFormShown(true)}
          >
            +
          </button>
        )}
      </header>
      {isFormShown && (
        <Form
          onFormSubmit={(newTodo) => {
            setTodos((prevTodos) => [
              ...prevTodos,
              { name: newTodo, done: false, id: prevTodos.length + 1 },
            ]);
            setIsFormShown(false);
          }}
        />
      )}
      <ul>
        {todos.map(({ id, name, done }) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() =>
              setTodos((prevTodos) =>
                prevTodos.filter((todo) => todo.id !== id)
              )
            }
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
