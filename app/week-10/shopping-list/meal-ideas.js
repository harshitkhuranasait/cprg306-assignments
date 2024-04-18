"use client";

import React, { useState, useEffect } from 'react';


const fetchMealIdeas = async (ingredient) => {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.meals; 
};


const MealIdeas = ({ ingredient }) => {
  
  const [meals, setMeals] = useState([]);

  
  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas || []); 
  };

  
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Meal Ideas {ingredient && `With ${ingredient}`}</h2>
      <ul>
        {meals.length != 0 ?         <>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20 mr-2 rounded-full inline-block" />
            <span>{meal.strMeal}</span>
          </li>
        ))}
        </>: <p>No meals found</p>}

      </ul>
    </div>
  );
};

export default MealIdeas;
