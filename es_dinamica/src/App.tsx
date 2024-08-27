import './App.css';
import React from 'react';
import logo from './logo.svg';

function App() {

  const len_numbers = 8;
  const [numbers, setNumbers] = React.useState<number[]>([]);

  const handleSort = () => {
    let new_numbers = [...numbers];
    new_numbers.sort((a, b) => a - b);
    setNumbers(new_numbers);
  }

  const renderNumbersInput = () => {
    let inputs = [];
    for (let i = 0; i < len_numbers; i++) {
      inputs.push(
        <div>
          <label>Número: </label>
          <input
            key={i}
            type="number"
            onChange={(e) => {
              let new_numbers = [...numbers];
              new_numbers[i] = parseInt(e.target.value);
              setNumbers(new_numbers);
            }}
            />
        </div>
      );
    }
    return inputs;
  }

  return (
    <div className="App" style={{maxWidth: "100%", overflow: "hidden"}}>
      <h1>Números</h1>
      <div style={{display:"flex", flexDirection: "column"}}>
        {renderNumbersInput()}
      </div>
      <button onClick={() => handleSort()} style={{marginTop: "10px"}}>Entrar</button>
      <hr/>
      <h1>
        Busque Número
      </h1>
      
    </div>
  );
}

export default App;
