import React from 'react'
import SearchResults from './SearchResults'
import { Link } from 'react-router-dom'


const SearchBar = ({setQuery, displayResults}) => {

    const handleKeyDown = (event) => {
        if(event.key === 'Enter'){
            displayResults();
        }
    }



  return (
    // <div className='flex items-center justify-center min-h-screen from-cyan-100 via-pink-200 to-yellow-200 bg-gradient-to-br'>
    <div className="flex items-center w-[90vw] mx-auto bg-gray-900 rounded-lg h-[48px]" x-data="{ search: '' }">
        <div className="w-full px-5 bg-gray-900">
            <input type="search" onKeyDown={handleKeyDown} onChange={(e) => {setQuery(e.target.value)}} className=" w-full text-white bg-gray-900  focus:outline-none "
                placeholder="Movies shows and more" x-model="search" />
        </div>
        <div>
            <button type="button" onClick={() => displayResults()}   className="flex items-center  justify-center w-12 h-12 text-white rounded-r-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </div>
    </div>
// </div>
  )
}

export default SearchBar