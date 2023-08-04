import React, { useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";
import Header from "./Header";
import SearchBar from "./SearchBar";
import axios from "axios";
const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "c437ac5a52a59f07425277737d98459e";
const SearchResults = () => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    displayResults();
  }, []);

  const displayResults = () => {
    axios
      .get(
        `${movieBaseUrl}/search/multi?query=${query}&include_adult=false&language=en-US&page=1&api_key=${api_key}`
      )
      .then((resp) => console.log(resp.data));
  };

  return (
    <>
      <Header />
      <SearchBar setQuery = {setQuery} />
    </>
  );
};

export default SearchResults;
