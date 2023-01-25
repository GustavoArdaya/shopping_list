import React, { useState } from 'react';

export default function ProductForm() {
  const [input, setInput] = useState('');

  const handlerChange = (value) => {
    console.log(value);
    setInput(value);
  };

  return (
    <div>
      <form>
        <input
          value={input}
          type='text'
          onChange={(e) => handlerChange(e.target.value)}
        ></input>
        <button>Añadir</button>
        <button>Editar</button>
      </form>
    </div>
  );
}
