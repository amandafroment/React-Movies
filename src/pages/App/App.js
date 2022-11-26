import "./App.css";
import { useState } from "react";
import MovieListPage from "../MoviesListPage/MovieListPage";
import LoginPage from "../LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import NavBar from "../../components/NavBar/NavBar";
import { movies } from "../../data";

export default function App() {
  const [user, setUser] = useState(null);

  const [movie, setMovie] = useState(null);

  const grabMovie = (movieTitle) => {
    setMovie(
      movies.find(
        (movie) => movie.title.replace(/\s/g, "").toLowerCase() === movieTitle
      )
    );
  };

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route
              path="/"
              element={<MovieListPage movies={movies} grabMovie={grabMovie} />}
            />
            <Route
              path="/movies/:movieName"
              element={<MovieDetailPage movie={movie} />}
            />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}
