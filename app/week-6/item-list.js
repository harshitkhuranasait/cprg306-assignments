"use client";

import React, { useState } from 'react';
import Item from './item'; 

function ItemList({ items }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = items.slice().sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-center gap-2 mb-4">
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition duration-500 ease-in-out transform ${sortBy === 'name' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'} hover:-translate-y-1 hover:scale-110`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium rounded-md transition duration-500 ease-in-out transform ${sortBy === 'category' ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-800'} hover:-translate-y-1 hover:scale-110`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
      </div>
      <div>
        {sortedItems.map(item => (
          <Item key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
