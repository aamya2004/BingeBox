import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieCard from "./MovieCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const MovieList = ({ genreId, index_ }) => {
  const [isHover, setIsHover] = useState(); //id

  const elementRef = useRef(null);
  //const screenWidth = window.innerWidth;
  const sliderRight = (element) => {
    element.scrollLeft += 500;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= 500;
  };

  const [movieLis, setMovieLis] = useState([]);
  useEffect(() => {
    getMovieByGenreId();
  }, []);

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      setMovieLis(resp.data.results);
      shuffleArray(resp.data.results);
      // console.log(resp.data.results);
    });
  };
  return (
    <div className="relative">
      <HiChevronLeft
        onClick={() => sliderLeft(elementRef.current)}
        className={`text-[50px] text-white
      p-2 z-10 cursor-pointer 
       hidden md:block absolute top-40
       `}
      />

      <div
        ref={elementRef}
        className="text-white flex overflow-x-auto w-full gap-8 scrollbar-hide scroll-smooth
    pt-5 px-3 pb-10 relative"
      >
        {movieLis.map((item, index__) => {
          if (isHover == index__) {
            return (
              <MovieCard
                key={item.id}
                id={index__}
                item={item}
                setIsHover={setIsHover}
                isShown={true}
              />
            );
          } else {
            return (
              <MovieCard
                key={item.id}
                id={index__}
                item={item}
                setIsHover={setIsHover}
                isShown={false}
              />
            );
          }
        })}
      </div>
      <HiChevronRight
        onClick={() => sliderRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-40
            absolute right-0 
            `}
      />
    </div>
  );
};

export default MovieList;
