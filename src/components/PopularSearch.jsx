import React, { useEffect, useRef, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import MovieTooltip from "./MovieTooltip";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const PopularSearch = ({popularSearch}) => {
  const [isHover , setIsHover] = useState(""); //id

  return (
  
     <div className="text-white flex flex-wrap justify-around  max-w-[90vw]">
     
  

      {popularSearch.map((item, index) => (
        <MovieTooltip key={item.id} id={index} item={item.original_title} isShown ={true} setIsHover={setIsHover} />
      ))}
      
    </div>
  )
};

export default PopularSearch;
