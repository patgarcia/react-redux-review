import logo from './logo.svg';
import './App.css';
import Counter, { SetCounter } from './components/counter';

function App() {
  return (
    <div className="App">
      <Counter />
      <SetCounter />
    </div>
  );
}

export default App;
