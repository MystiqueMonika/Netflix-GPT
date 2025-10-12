import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlaying from "../hooks/useNowPlayingMovies.js";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies.js";
import { useSelector } from "react-redux";
import GPTSearch from "./GPTSearch.js";
const Browse = () => {
  const gptSearchToggleBtn = useSelector((store) => store.gpt.gptSearchToggle);
  useNowPlaying();
  usePopularPlayingMovies();
  return (
    <div>
      <Header />
      {gptSearchToggleBtn ? (
        <GPTSearch />
      ) : (
        <div>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
