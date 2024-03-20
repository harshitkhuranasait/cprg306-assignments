"use client";
import React, { useState } from 'react';
import Item from './item.js';

function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const getSortedItems = (items, sortBy) => {
    return [...items].sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      }
      return 0;
    });
  };

  const sortedItems = getSortedItems(items, sortBy);

  return (
    <div>
      <div className="mb-4">
        <button className={`${sortBy === 'name' ? 'bg-blue-200' : 'bg-white'} text-gray-800 font-medium py-2 px-4 rounded border border-gray-400 hover:bg-blue-300`}
           onClick={() => setSortBy('name')}>Sort by Name
        </button>
        <button className={`${sortBy === 'category' ? 'bg-blue-200' : 'bg-white'} text-gray-800 font-medium py-2 px-4 rounded border border-gray-400 hover:bg-blue-300 `}
           onClick={() => setSortBy('category')}>Sort by Category
        </button>
      </div>

      <ul>
        {sortedItems.map(item => (
          
          <Item key={item.id} onSelect={() => onItemSelect(item)} {...item} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
