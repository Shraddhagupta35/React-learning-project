import React from 'react';

const RecipeCard = ({ food }) => {
  const { image, name, cuisine, time, difficulty, rating, calories } = food;

  return (
    <div className="w-[300px] bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
      {/* Image */}
      <div className="relative">
        <img src={image} alt={name} className="w-full h-56 object-cover" />

        {/* Favorite Icon */}
        <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md cursor-pointer hover:scale-110 transition">
          ❤️
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">🥘 {name}</h2>

        {/* Cuisine */}
        <p className="text-gray-500 mb-3">🌍 {cuisine}</p>

        {/* Rating */}
        <p
          className={`font-semibold mb-3 ${
            rating >= 4.8
              ? 'text-green-600'
              : rating >= 4.5
              ? 'text-yellow-500'
              : 'text-red-500'
          }`}
        >
          ⭐ {rating}
        </p>

        {/* Time & Calories */}
        <div className="flex justify-between text-gray-600 text-sm mb-3">
          <span>⏱ {time}</span>
          <span>🔥 {calories} kcal</span>
        </div>

        {/* Difficulty Badge */}
        <span
          className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-5 ${
            difficulty === 'Easy'
              ? 'bg-green-100 text-green-700'
              : difficulty === 'Medium'
              ? 'bg-yellow-100 text-yellow-700'
              : 'bg-red-100 text-red-700'
          }`}
        >
          📊 {difficulty}
        </span>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-medium transition">
            ❤️ Favorite
          </button>

          <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition">
            🍴 View Recipe
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
