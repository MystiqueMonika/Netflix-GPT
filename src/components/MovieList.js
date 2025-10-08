import MovieCard from "./MovieCard";

const MovieList = ({ title, movie }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div
        style={{
          display: "flex",
          overflowX: "scroll"
        }}
      >
        {movie?.map((item) => {
          return <MovieCard key={item?.id} path={item?.poster_path} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
