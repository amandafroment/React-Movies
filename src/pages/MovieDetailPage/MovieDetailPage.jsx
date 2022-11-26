import React from "react";

export default function MovieDetailPage({ movie }) {
  const castArray = movie.cast.join(" , ");

  return (
    <>
      <h1>Movie Detail Page</h1>
      <h3>{movie.title}</h3>
      <h4>{movie.releaseDate}</h4>
      <p>Cast Members: {castArray}</p>
      <img src={movie.posterPath}></img>
    </>
  );
}
