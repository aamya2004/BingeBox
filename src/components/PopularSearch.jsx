import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const PopularSearch = () => {

  const [popularSearch ,setPopularSearch] = useState([]);

  useEffect(() => {
    getPopularSearches();
  }, []);

  const getPopularSearches = () => {
    GlobalApi.getPopularSearches.then((resp) => {
      console.log(resp.data.results);
      setPopularSearch(resp.data.results);
    });
  };

  return (
  
     <div className="text-white flex flex-wrap justify-around  max-w-[90vw]
">
     {popularSearch.map((item) =>(
      <img  className='w-[110px] md:w-[23%] rounded-lg hover:border-[3px]
      border-gray-400  hover:scale-110 transition-all duration-110 ease-in
      cursor-pointer my-3'  src={IMAGE_BASE_URL + item.backdrop_path} />
     ))}
    </div>
  )
};

export default PopularSearch;
