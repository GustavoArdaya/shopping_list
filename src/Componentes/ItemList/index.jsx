import React, { useState } from 'react';

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

export default function ItemList() {
  const [products, setProducts] = useState(productList);

  const deleteById = (idItem) => {
    // console.log('funcionoooo!');
    let newData = products.filter((item) => item.id !== idItem);

    console.log(newData);
    setProducts(newData);
  };

  return (
    <div>
      <h2>Lista de Compra</h2>
      <ul>
        {productList.map((item) => (
          <li key={item.id}>
            {item.name}
            <button onClick={() => deleteById(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
