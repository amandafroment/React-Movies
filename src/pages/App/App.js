import "./App.css";
import { useState } from "react";
import MovieListPage from "../MoviesListPage/MovieListPage";
import LoginPage from "../LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import ActorListPage from "../ActorListPage/ActorListPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} />
          <Routes>
            <Route path="/" element={<MovieListPage />} />
            <Route path="/movies/:movieName" element={<MovieDetailPage />} />
            <Route path="/actors" element={<ActorListPage />} />
          </Routes>
        </>
      ) : (
        <LoginPage setUser={setUser} />
      )}
    </main>
  );
}
