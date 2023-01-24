import React, { useState } from 'react';
import styles from './itemList.module.css';

let productList = [
  {
    id: '1',
    name: 'Patatas',
    isBought: false,
  },
  {
    id: '2',
    name: 'Leche',
    isBought: true,
  },
  {
    id: '3',
    name: 'Huevos',
    isBought: false,
  },
];
let idToModify = '';

export default function ItemList() {
  const [products, setProducts] = useState(productList);

  const deleteById = (idItem) => {
    // console.log('funcionoooo!');
    let newData = products.filter((item) => item.id !== idItem);

    console.log(newData);
    setProducts(newData);
  };
  const editById = (idItem) => {
    idToModify = idItem;
    console.log(idToModify);
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <h2 className={styles.title}>Shopping List</h2>
        <ul className={styles.itemContainer}>
          {products.map((item) => (
            <li className={styles.product} key={item.id}>
              {item.name}
              <button onClick={() => editById(item.id)}>Editar</button>
              <button onClick={() => deleteById(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
