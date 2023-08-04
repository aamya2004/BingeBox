import React, { useState } from 'react'
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieTooltip = ({id, item, isShown, setIsHover}) => {
  console.log(id, item, isShown)
  return (
    <div onMouseEnter={() => setIsHover(id)} onMouseLeave={() => setIsHover("")}>
      {/* <img  className='w-[110px] md:w-[23%] rounded-lg hover:border-[3px]
      border-gray-400  hover:scale-110 transition-all duration-110 ease-in
      cursor-pointer my-3'  src={IMAGE_BASE_URL + item.backdrop_path} /> */}
      <h1 className='text-white'>{item}</h1>
      {
        isShown ? <p>hovering</p> : <p>not hovering</p>
      }
    </div>
  )
}

export default MovieTooltip