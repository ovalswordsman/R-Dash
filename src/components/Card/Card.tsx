import styles from "./card.module.css"; // Import the CSS module

export interface Movie {
  poster_path: string;
  title: string;
  release_date: Date;
  // Add more properties as needed
}

interface CardProps {
  movie: Movie;
}

function Card({ movie }: CardProps) {
  // Format the release date as a string
  const formattedReleaseDate = new Date(movie.release_date).toDateString();
  const baseURL = " https://image.tmdb.org/t/p/w440_and_h660_face";
  const posterImageUrl = `${baseURL}${movie.poster_path}`;
  return (
    <div className={styles.card}>
      {/* Use styles.card from the CSS module */}
      <img
        src={posterImageUrl}
        alt={movie.title}
        className={styles.poster}
      />{" "}
      <h3 className={styles.name}>{movie.title}</h3>{" "}
      <p className={styles.releaseDate}>{formattedReleaseDate}</p>{" "}
    </div>
  );
}

export default Card;
