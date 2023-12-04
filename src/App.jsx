import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home";
import Search from "./Pages/Search";
import SearchResults from "./components/SearchResults";
import WatchList from "./Pages/WatchList";
import IndividualMovie from "./Pages/IndividualMovie";
import Movies from "./Pages/Movies";
import Series from "./Pages/Series";
// import store from "./Store/configureStore";
// import { Provider } from "react-redux";
const App = () => {
  return (
    <BrowserRouter>
      {/* <Provider store={store}> */}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Search" element={<Search />} />
        <Route path="/SearchResults" element={<SearchResults />} />
        <Route path="/WatchList" element={<WatchList />} />
        <Route path="/IndividualMovie" element={<IndividualMovie />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Series" element={<Series />} />
        <Route path="/movie/:id" element={<IndividualMovie />} />
      </Routes>
      {/* </Provider> */}
    </BrowserRouter>
  );
};

export default App;
