import { useState } from "react";
import { HiOutlineHeart } from "react-icons/hi";
/* eslint-disable react/prop-types */

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieTooltip = ({ id, item, isShown, setIsHover }) => {
  return (
    <div
      className="w-fit flex flex-col relative"
      onMouseEnter={() => setIsHover(id)}
      onMouseLeave={() => setIsHover("")}
    >
      <img
        className="w-[20rem] rounded-lg hover:border-[3px]
      border-gray-400  hover:scale-110 transition-all duration-110 ease-in
      cursor-pointer my-3 z-0"
        src={IMAGE_BASE_URL + item.backdrop_path}
      />
      {isShown ? (
        <div
          className="w-[20rem] h-[30rem] bg-black absolute top-[-50px] transition-all duration-200 ease-in rounded-lg z-10 cursor-pointer border-[3px]
        border-gray-400"
        >
          <div className="w-[19.7rem] h-[12rem] rounded-lg bg-black ">
            <img
              className="w-[19.7rem] h-[12rem] rounded-lg"
              src={IMAGE_BASE_URL + item.backdrop_path}
            />
          </div>
          <h2 className="text-white p-2 font-bold">{item.original_title}</h2>
          <button
            type="button"
            className="py-2.5 px-20 mr-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Watch Now
          </button>
          <HiOutlineHeart
            className="text-white background-transparent font-bold uppercase px-3 py-1 text-xs outline-none bg-gray-600 absolute top-[14.6rem] left-60 w-[58px] h-[40px] rounded-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
          ></HiOutlineHeart>
          <p className="text-gray-500 px-2 text-xs">{item.release_date}</p>
          <p className="text-gray-400 px-2 py-2 text-xs">{item.overview}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieTooltip;
