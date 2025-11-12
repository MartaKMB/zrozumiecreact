import { useState } from 'react';

interface CVProps {
  name: string;
  currentJob: string;
  jobHistory: string[];
  children?: React.ReactNode;
}

export function CV({ name, currentJob, jobHistory }: CVProps) {
  const [showJobHistory, setShowJobHistory] = useState<boolean>(true);
  const jsxFragment: React.ReactNode = <p>Obecna praca: {currentJob}</p>;
  
  return (
    <>
      <h1>{name}</h1>
      {jsxFragment}

      <select
        onChange={(e) => {
          const shouldShowHistory = e.currentTarget.value === 'show';
          setShowJobHistory(shouldShowHistory);
        }}
      >
        <option value='show'>Pokaż historię zatrudnienia</option>
        <option value='hide'>Ukryj historię zatrudnienia</option>
      </select>

      {showJobHistory && (
        <>
          <h2>Historia zatrudnienia</h2>
          {jobHistory.map((job, index) => {
            return <p key={index}>{job}</p>;
          })}
        </>
      )}
    </>
  );
}
