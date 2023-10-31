import { useState } from "react";
import styles from "./SearchComponent.module.css";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const apiURL = `https://api.themoviedb.org/3/search/movie?api_key=ab2ea070f9aa3c1aa576539e31964dd5&language=en-US&query=${searchTerm}&page=1&include_adult=false`;

  const handleSearch = async () => {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        throw new Error("There's some error in getting a response");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const baseURL = "https://image.tmdb.org/t/p/w440_and_h660_face";

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for movie, tv shoes, and person"
        className={styles.inputField}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button className={styles.searchButton} onClick={handleSearch}>
        Search
      </button>
      {searchResults.length > 0 && (
        <div className={styles.results}>
          {searchResults.map((result) => (
            <div key={result.id} className={styles.resultItem}>
              <img
                src={`${baseURL}${result.poster_path}`}
                alt={result.title}
                className={styles.resultImage}
                width="20"
                height="150"
              />
              <li>{result.title}</li>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
