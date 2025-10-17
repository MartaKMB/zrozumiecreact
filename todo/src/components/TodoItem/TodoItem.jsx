import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
  onMoveButtonClick,
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ''}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
      <Button onClick={(index) => onMoveButtonClick(-1, index)}>^</Button>
      <Button onClick={(index) => onMoveButtonClick(1, index)}>v</Button>
    </li>
  );
}
