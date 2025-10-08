import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];

  const { title, overview, id } = mainMovie;
  return (
    <div
      style={{
        gradient: "black",
        backgroundImage: "linear-gradient(to top, gray, black)",
        display: "flex",
        width: "-webkit-fill-available",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "72px",
      }}
    >
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
