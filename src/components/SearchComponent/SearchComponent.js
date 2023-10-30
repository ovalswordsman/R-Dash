import styles from "./SearchComponent.module.css"

const SearchComponent = () => {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for movie, tv shoes, and person"
        className={styles.inputField}
      ></input>
      <button className={styles.searchButton}>Search</button>
    </div>
  );
};

export default SearchComponent;
