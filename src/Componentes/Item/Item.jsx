import React from 'react';
import styles from './Item.module.css';
import { BsPencilFill } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function Item({ item, deleteById, editById }) {
  return (
    <div className={styles.liContainer}>
      <li
        style={
          item.isBought
            ? { backgroundColor: '#7CAE7A' }
            : { backgroundColor: '#FEFCFB', color: 'black'}
        }
        className={styles.item}
      >
        <div>{item.name}</div>
        <div className={styles.iconsContainer}>
          <BsPencilFill onClick={() => editById(item.id)} />
          <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
          {/* <button onClick={() => editById(item.id)}>Editar</button> */}
          {/* <button onClick={() => deleteById(item.id)}>Eliminar</button> */}
        </div>
      </li>
    </div>
  );
}
// className={item.isBought ? 'verde' : 'rojo'}
