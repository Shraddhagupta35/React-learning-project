import React from "react";

const MoviesCard = ({ movie }) => {
  const { id, title, rating, genre, year, duration, image } = movie;

  return (
    <div className="w-[250px] mx-auto bg-slate-800 text-white rounded-xl overflow-hidden shadow-lg p-3 m-2">
      <div className="h-[280px] overflow-hidden rounded-lg mb-3">
        <img
          src={image}
          alt="movie poster"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="space-y-1">
        <h2 className="font-bold text-lg truncate">{title}</h2>
        <p className="text-sm text-yellow-400">⭐ {rating}</p>
        <p className="text-xs text-gray-300">🎭 {genre}</p>
        <p className="text-xs text-gray-300">📅 {year}</p>
        <p className="text-xs text-gray-300">⏱ {duration}</p>
      </div>
      <button className="mt-3 w-full bg-green-600 hover:bg-blue-700 text-white text-sm py-1.5 rounded-lg transition-colors">
        ❤️ Favorite
      </button>
    </div>
  );
};

export default MoviesCard;
