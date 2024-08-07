import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/directors")
    .then(res => res.json())
    .then(directors => setDirectors(directors))
  },[])

  let list = directors.map(director => {
    return (
      <article key={director.id}>
        <h2>{director.name}</h2>
        <ul>
          {director.movies.map((m, index) => {
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
        {/* Director info here! */}
        <h1>Directors Page</h1>
        {list}
      </main>
    </>
  );
};

export default Directors;
