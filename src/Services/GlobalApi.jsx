import axios from "axios";
import { HiAnnotation } from "react-icons/hi";

const movieBaseUrl = "https://api.themoviedb.org/3"
const api_key = 'c437ac5a52a59f07425277737d98459e'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=c437ac5a52a59f07425277737d98459e';
const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key="+api_key);
const getMovieByGenreId =(genreId) => axios.get(movieByGenreBaseURL+"&with_genres="+genreId);
const getPopularSearches = axios.get(movieBaseUrl+"/trending/movie/day?api_key="+api_key);

// const getMultipleMovies = axios.get(movieBaseUrl+"/search/multi?query=" + query + "&include_adult=false&language=en-US&page=1&api_key="+api_key);
export default{
    getTrendingVideos,
    getMovieByGenreId,
    getPopularSearches,
    // getMultipleMovies,
}

