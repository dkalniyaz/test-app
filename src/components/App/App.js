import './App.css';
import Hello from '../Hello/Hello';
import Counter from '../Counter/Counter';

function App() {

  const namesArr = ['Alexandr', 'Sergey', 'Maria']
  const infoObj = {'title': 'Developer', 'age' : 33}

  return (
    <div className="App">
      <h1>Application </h1>
      <Hello names={namesArr} info={infoObj}/>
      <Counter />
    </div>
  );
}

export default App;
