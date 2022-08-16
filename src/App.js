import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <select>
        <option value="meme1">img de meme 2</option>
        <option value="meme2">img de meme 1</option>
        <option value="meme3">img de meme 3</option>
        <option value="meme4">img de meme 4</option>
        <option value="meme5">img de meme 5</option>
        <option value="meme6">img de meme 6</option>
      </select>
      <br/>

      <input type="text" placeholder="linea 1"></input><br />
      <input type="text" placeholder="linea 2"></input><br/>
      <button>Exportar</button>
      <div>
        <spa>Linea 1</spa>
        <spa>Linea 2</spa>
      </div>
    </div>
  );
}

export default App;
