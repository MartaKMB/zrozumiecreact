import { useState, useReducer } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { getSubheading } from './utils/getSubheading';
import { todosReducer } from './reducer/todosReducer';

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, dispatch] = useReducer(todosReducer, [
    { name: 'zapłacić rachunki', done: false, id: 1 },
    { name: 'wyrzucić śmieci', done: true, id: 2 },
  ]);

  function handleSubmitForm(newTodo) {
    dispatch({type: "add", newTodo});
    setIsFormShown(false);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div>
          <h1>Do zrobienia</h1>
          <h2>{getSubheading(todos.length)}</h2>
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
      {isFormShown && <Form onFormSubmit={(newTodo) => handleSubmitForm(newTodo)} />}
      <ul>
        {todos.map(({ id, name, done }, index) => (
          <TodoItem
            key={id}
            name={name}
            done={done}
            index={index}
            itemsLength={todos.length}
            onDeleteButtonClick={() => dispatch({type: "delete", id})}
            onDoneButtonClick={() => dispatch({type: "finish", id})}
            onMoveButtonClick={(direction, index) => dispatch({type: "move", direction, index})}
            onEditButtonClick={(newName) => dispatch({type: "edit", id, newName})}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
