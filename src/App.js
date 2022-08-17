import { useState } from 'react';
import './App.css';

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = e => setLinea1(e.target.value);
  const onChangeLinea2 = e => setLinea2(e.target.value);
  const onChangeImagen = e => setImagen(e.target.value);

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="meme1">img de meme 2</option>
        <option value="meme2">img de meme 1</option>
        <option value="meme3">img de meme 3</option>
        <option value="meme4">img de meme 4</option>
        <option value="meme5">img de meme 5</option>
        <option value="meme6">img de meme 6</option>
      </select>
      <br />

      <input
        onChange={onChangeLinea1}
        type="text"
        placeholder="linea 1">
      </input><br />

      <input
        onChange={onChangeLinea2}
        type="text"
        placeholder="linea 2">
      </input><br />

      <button>Exportar</button>

      <div>
        <span>{linea1}</span><br />
        <span>{linea2}</span>
        <img
          src=''
        />
      </div>
    </div>
  );
}

export default App;
