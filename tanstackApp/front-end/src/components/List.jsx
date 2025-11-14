import { useQuery } from '@tanstack/react-query';
import './List.css';
import { peopleQueryOptions } from '../queries/peopleQueryOptions';

export const List = () => {
  const { data: people } = useQuery(peopleQueryOptions);

  console.log(people);

  return (
    <ul>
      {people?.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};
