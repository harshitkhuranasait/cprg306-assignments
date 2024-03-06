import React from 'react';
 
const Item = ({ name, quantity, category }) => {
  return (<li className="border p-2  my-2">
      <div className="text-lg ">Name: {name}</div>
      <div className="text-grey">Quantity: {quantity}</div>
      <div className="text-grey">Category: {category}</div></li>
    );};
 
export default Item;