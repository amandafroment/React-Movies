import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

export default function MovieCard({ movie, key, grabMovie }) {
  const cardStyling = {
    backgroundImage: `url(${movie.posterPath})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "400px",
    height: "400px",
    textAlign: "center",
  };

  const movieName = movie.title.replace(/\s/g, "").toLowerCase();
  const movieLink = `/movies/${movieName}`; // if i ever have to modify a link, it needs to be in a variable and then passed down into the tag
  console.log(movie.title, "movie title");

  return (
    <>
      <Link to={movieLink} onClick={() => grabMovie(movieName)}>
        <div className="MovieCard" style={cardStyling}>
          <div className="MovieTitleCard">
            <h1>{movie.title}</h1>
            <h2>{movie.releaseDate}</h2>
          </div>
        </div>
      </Link>
    </>
  );
}
