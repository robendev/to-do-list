import { useTaskContext } from './context/TaskContext';

function App() {
  const { tasks } = useTaskContext();
  return <div className="container mx-auto p-4">Container</div>;
}

export default App;
