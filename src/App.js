import logo from './logo.svg';
import './App.css';
import Counter, { SetCounter } from './components/counter';

function App() {
  return (
    <div>
      <Counter />
      <SetCounter />
    </div>
  );
}

export default App;
