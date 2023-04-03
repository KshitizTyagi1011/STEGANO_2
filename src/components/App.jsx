import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import UploadButton from './UploadButton';
import { encode, decode } from '../steganography';

export default function App() {

  const [option, setOption] = useState('home');

  function handleClick(event) {

    const { name } = event.currentTarget;
    if (name === 'home') {
      setOption('home');
      document.getElementById('encoded-image').style.display = 'none';
    } else if (name === 'encode') {
      setOption('encode');
    } else if (name === 'decode') {
      setOption('decode');
    }
  }

  return (
    <>
    <div className="bg-img"></div>
    <div className='content'>
      <h1 id="heading">STEGANO<span id="word"></span></h1>
      {option === 'home' && <button style={{margin: '1rem'}} name='encode' onClick={handleClick} variant="contained">Encode</button>}
      {option === 'home' && <button style={{margin: '1rem'}} name='decode' onClick={handleClick} variant="contained">Decode</button>}
      {option === 'encode' && <input variant="outlined" multiline type="text" id="secret" name="secret" placeholder="Enter secret message" />}
      {option !== 'home' && <UploadButton />}
      {option === 'encode' && <button style={{margin: '1rem'}} onClick={encode} variant="contained">Encode</button>}
      {option === 'decode' && <button style={{margin: '1rem'}} onClick={decode} variant="contained">Decode</button>}
      {option !== 'home' && <button style={{margin: '1rem'}} name='home' onClick={handleClick} variant="contained">Return</button>}
      <img id="encoded-image" alt='encoded output'></img>
      <canvas id="canvas"></canvas>
    </div>
 </>
  );
};
