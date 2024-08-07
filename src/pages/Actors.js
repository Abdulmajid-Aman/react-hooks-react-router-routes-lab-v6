import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/actors")
    .then(res => res.json())
    .then(actors => setActors(actors))
  })

  const list = actors.map(actor => {
    return (
      <article key={actor.id}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map((m, index) => {
            return <li key={index}>{m}</li>
          })}
        </ul>
      </article>
    )
  })

  return (
    <>
      <header>
        {/* What component should go here? */}
        <NavBar />
      </header>
      <main>
        {/* Actor info here! */}
        <h1>Actors Page</h1>
         {list}
      </main>
    </>
  );
};

export default Actors;
