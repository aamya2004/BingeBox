import React from 'react'
import Header from './components/Header'
import Slider from './components/Slider'
import ProductionHouse from './components/ProductionHouse'
import GenreMovieList from './components/GenreMovieList'
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home'
import Search from './Pages/Search'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/Search" element = {<Search />} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App