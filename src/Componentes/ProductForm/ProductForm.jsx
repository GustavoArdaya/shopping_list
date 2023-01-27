import React, { useState } from 'react';
import styles from './productForm.module.css';

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
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          value={input}
          type='text'
          onChange={(e) => handlerChange(e.target.value)}
          placeholder='Añade producto'
        ></input>
        <button className={styles.addButton} onClick={() => handlerAdd()}>
          Añadir
        </button>
        {/* <button>Editar</button> */}
      </div>
    </div>
  );
}
