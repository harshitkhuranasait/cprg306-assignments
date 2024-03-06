"use client";
import { useState } from 'react';

function NewItem({ onAddItem }) { // Destructure onAddItem prop
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        // Generate a random ID for the item. In a real app, consider using a more robust method for ID generation.
        const id = Math.random().toString(36).substring(2, 9);
        const item = { id, name, quantity, category };
        onAddItem(item); // Call onAddItem instead of showing an alert
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto w-full space-y-6 bg- rounded-lg shadow-xl p-8">
            <div className="text-center">
                <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} 
                required className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"/>
            </div>
            <div>
                 <input type="number" id="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required 
               className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50"/>
            </div>
            <div>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} 
                    className="mt-1 block w-full rounded-md border-gray-200 shadow-sm focus:border-orange-300 focus:ring focus:ring-orange-200 focus:ring-opacity-50">
                    <option value="">Select Category</option>
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button type="submit" 
               className="w-full py-2 px-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 focus:outline-none focus:shadow-outline shadow">
                Submit </button>
        </form>
    );
}

export default NewItem;
