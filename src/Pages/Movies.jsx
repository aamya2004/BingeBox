import React from 'react'
import Header from '../components/Header'
import GenreMovieList from '../components/GenreMovieList'
import GenreButtons from './GenreButtons'

const Movies = () => {
  return (
    <>
        <Header />
        <GenreButtons />
        <GenreMovieList />
    </>
  )
}

export default Movies