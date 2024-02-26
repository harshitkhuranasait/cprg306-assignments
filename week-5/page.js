"use client";

import React from 'react';
import ItemList from './item-list';

 
const Page = () => {
  return (
    <main className="bg-red-100 p-5 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl  text-blue-900 mb-4">Shopping List</h1>
        <ul className="bg-blue-300  p-5">
          {ItemList((item, index) => (
            <li key={index} className="border-b py-2 ">
              <div className="text-grey-600">{item.name}</div>
              <div className="text-grey-600">Quantity : {item.quantity}</div>
              <div className="text-grey-600">Category : {item.category}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
 
export default Page;
 