import { useEffect } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularPlayingMovies } from "../utils/movieSlice";

const usePopularPlayingMovies = () => {
  const dispatch = useDispatch();
  const getPopularPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'",
      options
    );
    const json = await data.json();
    dispatch(addPopularPlayingMovies(json.results));
  };
  useEffect(() => {
    getPopularPlaying();
  }, []);
};

export default usePopularPlayingMovies;
