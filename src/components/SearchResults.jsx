import React, { useEffect, useState } from 'react'
import GlobalApi from "../Services/GlobalApi";
import Header from './Header';
import SearchBar from './SearchBar';

const SearchResults = () => {
    const [query,setQuery] = useGlobalContext();

    useEffect(() => {
      displayResults(`s=${query}`);
    }, [])
    
    const displayResults = () =>{
        GlobalApi.getMultipleMovies.then((resp)=>
         console.log(resp.data)
        )
    }

  return (
    <>
     <Header />
     <SearchBar />
    </>
  )
}

export default SearchResults