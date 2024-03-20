
import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="border-2 border-gray-800 m-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 focus:bg-gray-200"
      onClick={() => onSelect(name)}
      style={{
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
        transition: 'background-color 0.3s ease', 
      }}
    >
      <div className="font-bold text-lg text-black">{name}</div> 
      <div className="text-gray-800">{quantity} pcs</div>
      <div className="text-sm text-gray-600">{category}</div> 
    </li>
  );
}

export default Item;
