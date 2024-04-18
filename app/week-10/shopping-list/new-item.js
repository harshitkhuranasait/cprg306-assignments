"use client";
import { useState } from 'react';

function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const item = {
            id: Math.random().toString(36).substring(2, 9), 
            name,
            quantity,
            category
        };
        onAddItem(item); 
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md w-full space-y-4 bg-white rounded-lg shadow-2xl p-6">
            <div className="text-center">
                <input type="text" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>
            <div>
                <input type="number" id="quantity" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} min="1" max="99" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"/>
            </div>
            <div>
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
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
            <button type="submit" className="py-2 px-4 bg-orange-500 text-white font-semibold rounded hover:bg-orange-400 focus:outline-none focus:shadow-outline">Submit</button>
        </form>
    );
}

export default NewItem;



