import React, { useState } from 'react';
import Item from '../Item/Item';
import Navbar from '../Navbar/Navbar';
import ProductForm from '../ProductForm/ProductForm';
import styles from './itemList.module.css';
import { v4 as uuid } from 'uuid';


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
  const addItem = (value) => {
    console.log(value);
    const newItem = {
      name: value,
      id: uuid(),
      isBought: false,
    };
    setProducts([...products, newItem]);
    // console.log(newItem);
    // let newData = products;
    // newData.push(newItem);
    // console.log(newData);
    // setProducts(newData);
    // console.log(products);
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <Navbar />
        <ProductForm addItem={addItem} />
        <ul className={styles.itemContainer}>
          {products.map((item) => (
            <Item
              item={item}
              deleteById={deleteById}
              editById={editById}
              key={item.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
