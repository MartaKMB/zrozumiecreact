import { useQuery } from '@tanstack/react-query';
import './List.css';
import { peopleQueryOptions } from '../queries/peopleQueryOptions';

export const List = ({ onPersonSelect }) => {
  const { data: people, isPending, isError } = useQuery(peopleQueryOptions);

  if (isPending) {
    return <div>Ładowanie...</div>;
  }

  if (isError) {
    return <div>Błąd pobierania</div>;
  }

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id} onClick={() => onPersonSelect(person.id)}>
          {person.name}
        </li>
      ))}
    </ul>
  );
};
