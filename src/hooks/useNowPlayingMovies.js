import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlaying = () => {
    const dispatch = useDispatch();

    const getNowPlaying = async() => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    }

    useEffect(()=>{
        getNowPlaying(); 
    },[])
}

export default useNowPlaying;