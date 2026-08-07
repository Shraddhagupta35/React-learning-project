
import React from "react";
import movies from "./data/movies.js";
import MovieCard from "./components/MoviesCard";

const App = () => {
  

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-900">
      {movies.map((movie) => {
        return <MovieCard key={movie.id} movie={movie} />;
      })}
    </div>
  );
};

export default App;
