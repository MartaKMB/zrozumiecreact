import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
  onMoveButtonClick,
  onEditButtonClick,
  index,
  itemsLength,
}) {
  const [isEdited, setIsEdited] = useState(false);
  const [inputValue, setInputValue] = useState(name);

  function setNewTodoName() {
    if (isEdited) onEditButtonClick(inputValue);
    setIsEdited((prev) => !prev);
  }

  return (
    <li className={styles.item}>
      {isEdited ? (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      ) : (
        <span className={`${styles.name} ${done ? styles.done : ''}`}>
          {name}
        </span>
      )}
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button
        disabled={index === 0}
        onClick={() => onMoveButtonClick(-1, index)}
      >
        ↑
      </Button>
      <Button
        disabled={index + 1 === itemsLength}
        onClick={() => onMoveButtonClick(1, index)}
      >
        ↓
      </Button>
      {!done && (
        <Button onClick={setNewTodoName}>
          {isEdited ? 'Zapisz' : 'Edytuj'}
        </Button>
      )}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
}
