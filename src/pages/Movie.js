import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useParams } from "react-router-dom";


function Movie() {
  const params = useParams()
  const id = params.id
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/movies/${id}`)
    .then(res => res.json())
    .then(data => setMovie(data))
  },[id])

  const genres = movie.genres ? movie.genres.map(r => { 
   return <span key={r}>{r}</span>  
  }
  ) : null;
 
 


 

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Movie info here! */}
        <h1>{movie.title}</h1>
        <p>{movie.time}</p>
        {genres}
      </main>
    </>
  );
};

export default Movie;
