import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import MovieCard from "../components/MovieCard";

function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/movies")
    .then(res => res.json())
    .then(movies => setMovies(movies))
  })

  let movieList = movies.map(movie => {
    return <MovieCard key={movie.id} movie = {movie}>{movie.title}</MovieCard>
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Info goes here! */}
        <h1>Home Page</h1>
        {movieList}
      </main>
    </>
  );
};

export default Home;
