import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PopularSearch from '../components/PopularSearch'
import axios from 'axios';
import GlobalApi from '../Services/GlobalApi';
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "c437ac5a52a59f07425277737d98459e";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const Search = () => {

  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const displayResults = () => {
    setIsLoading(true);
        axios
      .get(
        `${movieBaseUrl}/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${api_key}`
      )
      .then((resp) => {
        setPopularSearch(resp.data.results)
      setIsLoading(false)
       } );
  };

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
    <div>
        <Header />
        <SearchBar setQuery = {setQuery} displayResults={displayResults} />
        <h1 className='px-20 pt-[25px] font-bold text-2xl text-gray-700'>Popular Searches</h1>
      <PopularSearch popularSearch={popularSearch}/>
        
    </div>
  )
}

export default Search