import React from "react";
import { useState, useEffect } from "react";
import { FaC, FaHeart } from "react-icons/fa6";
import { HiOutlineHeart } from "react-icons/hi";
import IndividualMovie from "../Pages/IndividualMovie";
import { useSelector } from "react-redux";
import {
  Link,
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { selectUser } from "../Store/slice";
import { db } from "../firebase-config";
import {
  collection,
  updateDoc,
  doc,
  getDoc
} from "@firebase/firestore";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const MovieCard = ({ key, id, item, setIsHover, isShown }) => {
  const [isClicked, setIsClicked] = useState(false);
  const user = useSelector(selectUser);
  const usersReference = collection(db, "users");
  // console.log(item.id);
  const MovieData = {
    posterPath: item.backdrop_path,
    name: item.original_title,
    MID: item.id,
    over: item.overview,
  };

  // const [favourites, setfavourites] = useState(null);
  const addFavourites = async (item) => {
    const docRef = doc(usersReference, user.email);
  
    try {
      // Fetch the existing data
      const docSnapshot = await getDoc(docRef);
      const existingData = docSnapshot.data();
  
      // Check if 'Fav' field exists, initialize as an empty array if not
      const favArray = existingData && existingData.Fav ? existingData.Fav : [];
  
      // Add the new item to the 'Fav' array
      favArray.push(item);
  
      // Update the document with the modified 'Fav' array
      await updateDoc(docRef, {
        Fav: favArray,
      });
  
      console.log("Favorite added successfully");
    } catch (error) {
      console.error("Error adding favorite: ", error);
    }
  };
  
  // console.log(favourites)

  const handleHeartClick = (item, id) => {
    if (user) {
      setIsClicked(true);
      // setfavourites(MovieData);
      addFavourites(item);
    } else {
      // console.log("not reached")
      setIsClicked(false);
    }
    // console.log(favourites)
  };

  return (
    <>
      {isShown == true ? (
        <div
          className="min-w-[250px] relative flex flex-col  items-center z-0 rounded-lg"
          onMouseEnter={() => setIsHover(id)}
          onMouseLeave={() => setIsHover()}
        >
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium reprehenderit inventore perferendis exercitationem voluptatum sit. Corporis voluptate voluptatem amet dolore aliquid tempora, aspernatur reprehenderit omnis est natus dignissimos aperiam perspiciatis. */}
          <img
            src={IMAGE_BASE_URL + item.poster_path}
            className="w-[200px] rounded-lg  transition-all duration-110 ease-in
            cursor-pointer "
          />
          <div
            className="z-10 bg-black top-[-10px] absolute w-[300px] h-[350px] 
            transition-all duration-200 ease-in rounded-lg cursor-pointer border-[3px]
            border-gray-400"
          >
            <div className="w-[296px] h-[150px] rounded-lg bg-black ">
              <img
                className="rounded-lg"
                src={IMAGE_BASE_URL + item.backdrop_path}
              />
            </div>
            <h2 className="text-white px-4 pt-6 pb-3 font-bold">
              {item.original_title}
            </h2>
            <Link to={`/movie/${id}`} state={MovieData}>
              <button
                type="button"
                className="py-2.5 px-20 mr-4 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Watch Now
              </button>
            </Link>

            {isClicked ? (
              <>
                <FaHeart
                  className="text-red-600 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none bg-gray-600 absolute top-[13rem] left-60 w-[48px] h-[42px] rounded-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                ></FaHeart>
              </>
            ) : (
              <HiOutlineHeart
                onClick={() => handleHeartClick(item, id)}
                className="text-white background-transparent font-bold uppercase px-3 py-1 text-xs outline-none bg-gray-600 absolute top-[13rem] left-60 w-[48px] h-[42px] rounded-lg focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              ></HiOutlineHeart>
            )}

            <p className="text-gray-400 px-2  text-xs line-clamp-3">
              {item.overview}
            </p>
          </div>
        </div>
      ) : (
        <div
          className="min-w-[250px] flex flex-col hover:border-2 border-yellow-600 items-center"
          onMouseEnter={() => setIsHover(id)}
          onMouseLeave={() => setIsHover()}
        >
          <img
            src={IMAGE_BASE_URL + item.poster_path}
            className="w-[200px] rounded-lg  transition-all duration-110 ease-in
            cursor-pointer "
          />
        </div>
      )}
    </>
  );
};

export default MovieCard;
