import './App.css';
import React from 'react';

function App() {

  const len_numbers = 8;
  const [numbers, setNumbers] = React.useState<number[]>([]);

  const [targetIndex, setTargetIndex] = React.useState<string | undefined>();
  const [targetValue, setTargetValue] = React.useState<number>();

  const handleSort = () => {
    let new_numbers = [...numbers];
    new_numbers.sort((a, b) => a - b);
    setNumbers(new_numbers);
  }

  const handleTarget = (event: any) => {
    event.preventDefault();

    if (targetIndex === undefined) {
      return;
    }

    const target: number = Number(targetIndex);

    console.log(numbers);

    setTargetValue(numbers[target]);
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

  const renderSortedNumbers = () => {
    let spans = [];
    for (let i = 0; i < len_numbers; i++) {
      spans.push(
        <span> {numbers[i]} </span>
      );
    }
    return spans;
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
        Números Ordenados
      </h1>
      <div style={{display: "flex", justifyContent:"center", alignItems:"center", gap:5 }}>
        {renderSortedNumbers()}
      </div>
      <hr/>
      <h1>
        Busque Número pelo Index
      </h1>
      <form onSubmit={(event) => handleTarget(event)}>
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", gap:50}}>
          <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", gap:5}}>
            <label>Insira o Index desejado</label>
            <input onChange={(event) => setTargetIndex(event.target.value)}/>
            <button type='submit'>Entrar</button>
          </div>  
          <div>
            <label>Número:</label>
            <div>
              <span>
                {targetValue}
              </span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
