import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
import { useLocation } from "react-router-dom";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "c437ac5a52a59f07425277737d98459e";


const IndividualMovie = () => {
  const { id } = useParams();
  const location = useLocation();
  const item = location.state;
  console.log(location);
  console.log(id);
  console.log(item.MID);
  

  const [trailerKey, setTrailerKey] = useState("");

  // const [query,setQuery] = useState(item.MID);

  useEffect(() => {
    displayTrailer();
  }, []);

  const displayTrailer = () => {
    axios
      .get(
        `${movieBaseUrl}/movie/${item.MID}/videos?language=en-US&api_key=${api_key}`
      )
      .then((resp) => {
        console.log(resp.data.results);
        const videos = resp.data.results;
        const trailer = videos.find((video) => video.type === "Trailer");
        if (trailer) {
          setTrailerKey(trailer.key);
        }
      });
  };

  if (trailerKey) {
    const trailerUrl = `https://www.youtube.com/embed/${trailerKey}?autoplay=1&controls=0&modestbranding=1`;

    return (
      <>
        <div className=" bg-black">
          {/* <div className="flex-1 mr-8 ml-8">
            <h2 className="text-6xl text-white font-semibold mb-4">
              {item.name}
            </h2>
            <p className="text-gray-700 text-lg">{item.over}</p>
          </div> */}
          <div className="flex-1 mr-8 mt-8">
            <div className="fade-overlay" />
            <iframe
              src={trailerUrl}
              title="Movie Trailer"
              allowFullScreen
              className="w-screen h-96"
              allow="autoplay"
            />
            <h1 className="text-white text-4xl font-bold p-3">{item.name}</h1>
          </div>
            <button className="bg-white p-2 w-32 rounded-lg mx-3 font-bold text-lg hover:border-2 hover:border-yellow-600 hover:h-15">Play</button>

        </div>
      </>
    );
  }
};

export default IndividualMovie;
