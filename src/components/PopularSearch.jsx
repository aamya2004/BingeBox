import { useState } from "react";
import MovieTooltip from "./MovieTooltip";

const PopularSearch = ({ popularSearch }) => {
  const [isHover, setIsHover] = useState(); //id

  return (

    <div className="text-white flex justify-center w-full max-w-[100vw]">
      <div className="flex max-w-[90vw] justify-around flex-wrap">
        {
          popularSearch.map((item, index) => {
            if (isHover === index) {
              return <MovieTooltip key={item.id} id={index} item={item} isShown={true} setIsHover={setIsHover} />;
            } else {
              return <MovieTooltip key={item.id} id={index} item={item} isShown={false} setIsHover={setIsHover} />;
            }
          })
        }
      </div>
    </div>
  )
};

export default PopularSearch;