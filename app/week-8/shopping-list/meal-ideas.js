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
      <h2>Meal Ideas</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>
            {meal.strMeal}
            <img src={meal.strMealThumb} alt={meal.strMeal} style={{ width: '100px', height: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
