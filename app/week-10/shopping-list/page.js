"use client";

import React, { useState,useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service.js';
import NewItem from './new-item';
import ItemList from './item-list';
import MealIdeas from './meal-ideas';
import { useUserAuth } from "../_utils/auth-context";
const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useUserAuth();
  useEffect(() => {
  {user != null && 
        <>
        </>
    const loadItems = async () => {
      
        try {
          const result = await getItems(user.uid);
          result.map((item) => {
            setItems((prev) => [...prev, item.data])});
        } 
        catch (error) {
          console.error('Error loading items:', error);
        }
      }



    loadItems();
  };
  }, [user]);

  const handleAddItem = async (newItem) => {
    {user && 
      <>
      </>
    try {
      const newItemWithId = await addItem( user.uid,newItem);
      setItems([...items, newItem]);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  }
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
