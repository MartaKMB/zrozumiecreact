import { useQuery } from '@tanstack/react-query';
import './Detail.css';

export function Detail({ onClose, personId }) {
  const { data, isPending } = useQuery({
    queryFn: () =>
      fetch(`http://localhost:3000/people/${personId}`).then((res) =>
        res.json()
      ),
    queryKey: ['person', personId],
    staleTime: 60000,
  });

  return (
    <div className='detail'>
      <button onClick={onClose} type='button'>
        X
      </button>
      <h2>Informacje:</h2>
      {isPending ? (
        <div>Ładowanie...</div>
      ) : (
        <>
          <h3>{data.name}</h3>
          <h3>Wiek {data.age}</h3>
          <h3>{data.email}</h3>
        </>
      )}
    </div>
  );
}
