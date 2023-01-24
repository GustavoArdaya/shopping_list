import React from "react";

export default function Item({ item, deleteById, editById }) {
  return (
    <div>
      <li>
        {item.name}
        <button onClick={() => editById(item.id)}>Editar</button>
        <button onClick={() => deleteById(item.id)}>Eliminar</button>
      </li>
    </div>
  );
}
