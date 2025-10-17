import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
  onMoveButtonClick,
  index,
  itemsLength,
}) {
  const [isEdited, setIsEdited] = useState(false);

  return (
    <li className={styles.item}>
      {isEdited ? (
        <input value={name} />
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
      {!done && <Button onClick={() => setIsEdited(prev => !prev)}>{isEdited ? "Zapisz" : "Edytuj"}</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
    </li>
  );
}
