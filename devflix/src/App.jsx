import "./App.css";
import MovieCard from "./components/movieCard/MovieCard";
import Footer from "./components/footer/footer";
import { useEffect, useState } from "react";
import Logo from "./assets/devflix.png";
import Lupa from "./assets/search.svg"

const App = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  //Utilizando chave de API do arquivo .env
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("dexter");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&S=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  const handleKeypress = (e) => {
    e.key === "Enter" && searchMovies(search);
  };

  return (
    <div id="app">
      
      <img src={Logo} alt="" />

      <div className="search">
        <input
          onKeyDown={handleKeypress}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Pesquise por filmes"
        />

        <img 
        onClick={() => searchMovies(search)}
        src={Lupa} 
        alt="" />
      </div>

{movies?.length > 0 ?(
  <div className="container">
 {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
  </div>
) : (
  <h2 className="empty"> Filme Not Found</h2>
)
}
     

      <Footer devName={"Milani"} devLink={"https://github.com/jotaMilani"} />
    </div>
  );
};

export default App;
