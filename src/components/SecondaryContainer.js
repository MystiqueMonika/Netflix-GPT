import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondayContainer = () => {
    const movie = useSelector(store => store.movies);
    return(
        <div style={{}}>
            <MovieList title="Now Playing Movie" movie={movie?.nowPlayingMovies}/>
            <MovieList title="Popular Movie" movie={movie?.popularPlayingMovies}/>
        </div>
    )
}

export default SecondayContainer;