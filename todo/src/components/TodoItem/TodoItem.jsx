export function TodoItem({ name, done }) {
  return (
    <li>
      <span>{name}</span>
      {!done && <button>Zrobione</button>}
      <button>Usuń</button>
    </li>
  );
}
