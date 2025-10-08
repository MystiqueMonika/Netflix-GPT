const MovieCard = ({path}) => {
    return(
        <div>
            <img style={{width: "150px", marginLeft: "4px"}} alt="logo" src={`https://image.tmdb.org/t/p/w500/${path}`}/>
        </div>
    )
}

export default MovieCard;