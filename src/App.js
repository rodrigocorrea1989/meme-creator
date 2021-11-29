import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';

function App() {

const [linea1,setLinea1] = useState('');
const [linea2,setLinea2] = useState('');
const [imagen,setImagen] = useState('fire');

const onChangeLinea1= function(valor){
  
    setLinea1(valor.target.value);

}

const onChangeLinea2= function(valor){
  
  setLinea2(valor.target.value);

}

const onChangeImagen= function(valor){
  
  setImagen(valor.target.value);

}

const onClickExportar= function(valor){
  
  html2canvas(document.querySelector("#meme")).then(canvas => {
    var img = canvas.toDataURL("image/png");
    var link = document.createElement('a');
    link.download = 'meme.png';
    link.href = img;
    link.click();
  });

}

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">philosoraptor</option>
        <option value="smart">smart guy</option>
      </select><br/>

  
      <input type="text" onChange={onChangeLinea1} placeholder="linea 1" /><br/>
      <input type="text" onChange={onChangeLinea2} placeholder="linea 2" /><br/>
      <button onClick={onClickExportar}>EXPORTAR</button>

      <div className="meme" id="meme">
        <span className="palabra1">{linea1}</span><br/>
        <span className="palabra2">{linea2}</span>
        <img src={"img/"+imagen+".jpg "}/> 
        

      </div>


    </div>
  );
}

export default App;
