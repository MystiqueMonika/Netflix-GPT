import { useSelector } from "react-redux";
import { useMovieTrailer } from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  const movieTrailer = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);

  return (
    <div style={{aspectRatio: "video"}}>
      <iframe
        width="560"
        height="440"
        src={`https://www.youtube.com/embed/${movieTrailer?.key}?&autoplay=1&mute=1&si=yuQUso_W8M8a1iQn`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
