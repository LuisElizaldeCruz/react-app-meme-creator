import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';
import domtoimage from 'dom-to-image';

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("meme1");

  const onChangeLinea1 = e => setLinea1(e.target.value);
  const onChangeLinea2 = e => setLinea2(e.target.value);
  const onChangeImagen = e => setImagen(e.target.value);
  const onclickExportar = (e) => {
    var node = document.getElementById('meme');

    domtoimage.toJpeg(node)
      .then(function (dataUrl) {
        console.log(dataUrl);
        //window.open(dataUrl);
        var link = document.createElement('a');
        link.download = "meme.jpeg";
        link.href = dataUrl;
        link.click();
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

  }
  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="meme1">img de meme 1</option>
        <option value="meme2">img de meme 2</option>
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

      <button className="btn-exportar" onClick={onclickExportar}>Exportar</button>

      <div className="contenedor-imagen meme" id="meme">
        <p className="texto-superior" id='superior'>{linea1}</p><br />
        <p className="texto-inferior" id='inferior'>{linea2}</p>

        <img src={`/img/${imagen}.jpg`} alt="Meme 1" />
      </div>

    </div>
  );
}

export default App;
