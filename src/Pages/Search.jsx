import React from 'react'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import PopularSearch from '../components/PopularSearch'

const Search = () => {
  return (
    <div>
        <Header />
        <SearchBar/>
        <h1 className='px-20 pt-[25px] font-bold text-2xl text-gray-700'>Popular Searches</h1>
        <PopularSearch />
    </div>
  )
}

export default Search