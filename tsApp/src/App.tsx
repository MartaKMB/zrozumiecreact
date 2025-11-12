import { CV } from './CV';

function App() {
  const name = 'Marta';
  const currentJob = 'Lubimyczytać.pl';
  const jobHistory = ['DeGaSa', 'RSQ'];
  return <CV name={name} currentJob={currentJob} jobHistory={jobHistory} />;
}

export default App;
