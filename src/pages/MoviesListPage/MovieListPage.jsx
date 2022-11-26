import React from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MovieListPage.css";

export default function MovieListPage({ movies, grabMovie }) {
  return (
    <>
      <div className="MovieListPage">
        {movies.map((movie, idx) => (
          <div>
            <MovieCard movie={movie} key={idx} grabMovie={grabMovie} />
          </div>
        ))}
      </div>
    </>
  );
}
