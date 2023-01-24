import React from 'react';

let productList = [{
  id: "1",
  name: "Patatas",
  isBought: false
},
{
  id: "2",
  name: "Leche",
  isBought: true
},
{
  id: "3",
  name: "Huevos",
  isBought: false
},
]

export default function ItemList() {
   
  
  return (
  <div>
    <h2>Lista de Compra</h2>
    <ul> {productList.map(item=> 
      <li key={item.id}>{item.name}</li>
      )}

    </ul>
    

  </div>);
}



