import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlaying from "../hooks/useNowPlayingMovies.js";
import usePopularPlayingMovies from "../hooks/usePopularPlayingMovies.js";

const Browse = () =>{ 
    useNowPlaying();
    usePopularPlayingMovies();
    return(
        <div>
           <Header/>
           <MainContainer/>
           <SecondaryContainer/>
        </div>
    )

}

export default Browse;