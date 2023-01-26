import React from 'react';
import styles from './Item.module.css';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin5Line } from 'react-icons/ri';

export default function Item({ item, deleteById, editById }) {
  return (
    <div className={styles.liContainer}>
      <li
        style={
          item.isBought
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'red' }
        }
        className={styles.item}
      >
        <div>{item.name}</div>
        <div className={styles.iconsContainer}>
          <GrEdit onClick={() => editById(item.id)} />
          <RiDeleteBin5Line onClick={() => deleteById(item.id)} />
          {/* <button onClick={() => editById(item.id)}>Editar</button> */}
          {/* <button onClick={() => deleteById(item.id)}>Eliminar</button> */}
        </div>
      </li>
    </div>
  );
}
// className={item.isBought ? 'verde' : 'rojo'}
