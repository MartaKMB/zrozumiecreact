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

  function addItem(newTodo) {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        name: newTodo,
        done: false,
        id: Math.random(),
      },
    ]);
    setIsFormShown(false);
  }

  function deleteItem(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function finishItem(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) return todo;
        return { ...todo, done: true };
      })
    );
  }

  function moveItem(direction, index) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= todos.length) return; // poza zakresem

    setTodos((prevTodos) => {
      const newItems = [...prevTodos];
      const [movedItem] = newItems.splice(index, 1);
      newItems.splice(newIndex, 0, movedItem);
      return newItems;
    });
  }

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
      {isFormShown && <Form onFormSubmit={(newTodo) => addItem(newTodo)} />}
      <ul>
        {todos.map(({ id, name, done }, index) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
            onMoveButtonClick={(direction) => moveItem(direction, index)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
