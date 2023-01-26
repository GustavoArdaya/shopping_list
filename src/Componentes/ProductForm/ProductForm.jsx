import React, { useState } from 'react';

export default function ProductForm({ addItem }) {
  const [input, setInput] = useState('');

  const handlerChange = (value) => {
    console.log(value);
    setInput(value);
  };
  const handlerAdd = () => {
    addItem(input);
    setInput('');
  };
  return (
    <div>
      <input
        value={input}
        type='text'
        onChange={(e) => handlerChange(e.target.value)}
      ></input>
      <button onClick={() => handlerAdd()}>Añadir</button>
      {/* <button>Editar</button> */}
    </div>
  );
}
