"use client";

import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import itemsData from './item.json';
import { useUserAuth } from "../_utils/auth-context";
const Page = () => {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedItemName = itemName.replace(/🥛|🍞|🥚|🍌|🥦|🍗|🍝|🍝|🧻|🍽️|🧼/g, '').split(",")[0];
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-red-100 p-5 min-h-screen flex justify-between">
      {!user ? <div className=' text-5xl font-bold w-screen h-full'>No Cheating. You Have to Login To View this Page.</div> : 
      <>
      <div className="max-w-2xl">
        <h1 className="text-2xl text-blue-900 mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
      </>
}
    </main>
  );
};

export default Page;
