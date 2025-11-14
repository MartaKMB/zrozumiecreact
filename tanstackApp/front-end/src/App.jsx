import { Header } from './components/Header';
import { List } from './components/List';
import { Form } from './components/Form';
import { Detail } from './components/Detail';
import './App.css';
import { useState } from 'react';

function App() {
  const [activPersonId, setActivePersonId] = useState(null);

  return (
    <div className='container'>
      <Header />
      <Form />
      <List onPersonSelect={setActivePersonId} />
      {activPersonId !== null && (
        <Detail
          onClose={() => setActivePersonId(null)}
          personId={activPersonId}
        />
      )}
    </div>
  );
}

export default App;
