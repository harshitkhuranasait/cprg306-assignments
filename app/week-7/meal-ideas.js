"use client";

import React, { useState, useEffect } from 'react';

const MealIdeas = ({ ingredient }) => {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.error('Error fetching meal ideas:', error);
      return [];
    }
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Meal Ideas with {ingredient}</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal} className="mb-2">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-20 h-20 mr-2 rounded-full inline-block" />
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealIdeas;
