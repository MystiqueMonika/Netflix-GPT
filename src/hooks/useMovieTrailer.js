import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";

export const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, options);
        const json = await data.json();
        const trailer = json.results?.filter(item=> item.type==="Trailer")
        dispatch(addTrailerVideo(trailer.length>0 ? trailer[0]: json.results[0]));
    }

    useEffect(()=>{
        getMovieTrailer();
    },[])
}