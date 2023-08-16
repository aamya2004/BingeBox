import React from "react";
import MovieList from "./MovieList";

const GenreMovies = ({ id, item, isShown, setIsHover }) => {
  return (
    <div
      className="w-fit flex flex-col relative"
      onMouseEnter={() => setIsHover(id)}
      onMouseLeave={() => setIsHover("")}
    >
      {GenresList.genere.map(
        (item, index) =>
          index <= 4 && (
            <div className="p-8 px-8 md:px-16">
              <h2 className="text-[20px] text-white font-bold">{item.name}</h2>
              <MovieList genreId={item.id} index__={index} />
            </div>
          )
      )}
    </div>
  );
};

export default GenreMovies;
