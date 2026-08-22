import React from 'react';
import recipeData from './data/recipe.js';
import RecipeCard from './components/RecipeCard';

const App = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 p-6 bg-red-100">
      {recipeData.map((food) => (
        <RecipeCard key={food.id} food={food} />
      ))}
    </div>
  );
};

export default App;
