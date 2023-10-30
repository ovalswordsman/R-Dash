import { useEffect, useState } from "react";
import styles from "./homepage.module.css";
import Card, { Movie } from "../Card/Card";
import IndiaIcon from "../../assests/india.png";
import SearchComponent from "../SearchComponent/SearchComponent";
interface MovieRes {
  results: Movie[];
}

function Home() {
  const [isRed, setIsRed] = useState(true);
  const [movieData, setMovieData] = useState<Movie[]>([]);
  const [visibleMovies, setVisibleMovies] = useState<Movie[]>([]);
  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

  const handleButtonClick = () => {
    setIsRed(!isRed);
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/all/day?api_key=ab2ea070f9aa3c1aa576539e31964dd5"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: MovieRes) => {
        // Do something with the data
        setMovieData(data.results);
        // console.log(movieData)
        // Initially, display the first 5 movies
        setVisibleMovies(data.results.slice(0, 5));
        console.log(visibleMovies);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error);
      });
  }, []);

  const navigateToNextMovies = () => {
    const nextIndex = currentMovieIndex + 1;
    if (nextIndex < movieData.length) {
      setCurrentMovieIndex(nextIndex);
      // const movie_media = movieData.filter((movie) => movie.media_type === "movie");F

      setVisibleMovies(movieData.slice(nextIndex, nextIndex + 5));
    }
  };

  const navigateToPreviousMovies = () => {
    const prevIndex = currentMovieIndex - 1;
    if (prevIndex >= 0) {
      setCurrentMovieIndex(prevIndex);
      setVisibleMovies(movieData.slice(prevIndex, prevIndex + 5));
    }
  };

  return (
    <div>
      <section className={styles.main_container1}>
        <div className={styles.heading}>Welcome to the weekend watch</div>
        <div className={styles.subHeading}>
          Millions of Movies, TV Shoes and many more
        </div>
        <SearchComponent />
        {/* <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for movie, tv shoes, and person"
            className={styles.inputField}

          ></input>
          <button className={styles.searchButton}>Search</button>
        </div> */}
      </section>
      <section className={styles.main_container2}>
        <div className={styles.subcontainer1}>
          <div className={styles.popular}>What's Popular</div>
          <div className={styles.togglebtn}>
            <button
              className={`${styles.subButton} ${
                isRed ? styles.redButton : styles.whiteButton
              }`}
              onClick={handleButtonClick}
            >
              Streaming
            </button>
            <button
              className={`${styles.subButton} ${
                isRed ? styles.whiteButton : styles.redButton
              }`}
              onClick={handleButtonClick}
            >
              On TV
            </button>
          </div>
        </div>
        <div className={styles.subcontainer2}>
          <div
            className={styles.leftBtn}
            onClick={navigateToPreviousMovies}
          ></div>
          {visibleMovies.length > 0 && (
            <div className={styles.cardContainer}>
              {visibleMovies.map((movie) => (
                <Card movie={movie} />
              ))}
            </div>
          )}
          <div className={styles.rightBtn} onClick={navigateToNextMovies}></div>
        </div>
      </section>
      <section className={styles.main_container3}>
        <div className={styles.left_div}>
          <div className={styles.icon}></div>
          <div className={styles.address}>
            24, Vaishnavi Centre, Raja Park, 51, Dhanana, Panipat, Haryana,
            Pincode-154419
          </div>
        </div>
        <div className={styles.right_div}>
          <div className={styles.line}>
            <h2>THE BASICS</h2>
            <span>About Weekend watch</span>
            <span>Contact Us</span>
            <span>Support</span>
            <span>API</span>
          </div>
          <div className={styles.line}>
            <h2>GET INVOLVED</h2>
            <span>Contribution Guidelines</span>
            <span>Add New Movie</span>
            <span>Add New TV Show</span>
          </div>
          <div className={styles.line}>
            <h2>COMMUNITY</h2>
            <span>Guidelines</span>
            <span>Discussions</span>
            <span>Leaderboard</span>
            <span>Tweeter</span>
          </div>
          <div className={styles.line}>
            <h2>LEGAL</h2>
            <span>Terms of use</span>
            <span>API Terms of use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.copyright}>
          {" "}
          © 2022 STAR. All Rights Reserved. Weekend watch's all related Movies
          and TV Shoes are part of copyright.
        </div>

        <div className={styles.india}>
          <div>
            <img className={styles.indiaIcon} src={IndiaIcon} alt="" />
          </div>
          India
        </div>
      </section>
    </div>
  );
}

export default Home;
