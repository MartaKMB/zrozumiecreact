import { useState, useReducer } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form/Form';
import { TodoItem } from './components/TodoItem/TodoItem';
import { getSubheading } from './utils/getSubheading';

function todosReducer(state, action) {
  console.log("reducer!", action.type);
  if (action.type === "delete") return state.filter((todo) => todo.id !== action.id);
  if (action.type === "finish") return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return { ...todo, done: true };
      });
  if (action.type === "add") return [...state,
      {
        name: action.newTodo,
        done: false,
        id: Math.random(),
      },]
}

function App() {
  const [isFormShown, setIsFormShown] = useState(false);

  const [todos, dispatch] = useReducer(todosReducer, [
    { name: 'zapłacić rachunki', done: false, id: 1 },
    { name: 'wyrzucić śmieci', done: true, id: 2 },
  ]);

  const subheading = getSubheading(todos.length);

  function addItem(newTodo) {
    dispatch({type: "add", newTodo});
    setIsFormShown(false);
  }

  function deleteItem(id) {
    dispatch({type: "delete", id});
  }

  function finishItem(id) {
    dispatch({type: "finish", id});
  }

  function moveItem(direction, index) {
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= todos.length) return; // poza zakresem

    // setTodos((prevTodos) => {
    //   const newItems = [...prevTodos];
    //   const [movedItem] = newItems.splice(index, 1);
    //   newItems.splice(newIndex, 0, movedItem);
    //   return newItems;
    // });
  }

  function editItem(id, newName) {
    // setTodos((prevTodos) =>
    //   prevTodos.map((todo) => {
    //     if (todo.id !== id) return todo;
    //     return { ...todo, name: newName };
    //   })
    // );
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
            index={index}
            itemsLength={todos.length}
            onDeleteButtonClick={() => deleteItem(id)}
            onDoneButtonClick={() => finishItem(id)}
            onMoveButtonClick={(direction, index) => moveItem(direction, index)}
            onEditButtonClick={(newName) => editItem(id, newName)}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
