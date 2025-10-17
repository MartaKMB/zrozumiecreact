import { Button } from '../Button/Button';
import styles from './TodoItem.module.css';

export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
  onMoveButtonClick,
  index,
  itemsLength
}) {
  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ''}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usuń</Button>
      <Button disabled={index === 0} onClick={() => onMoveButtonClick(-1, index)}>↑</Button>
      <Button disabled={index + 1 === itemsLength} onClick={() => onMoveButtonClick(1, index)}>↓</Button>
    </li>
  );
}
