import styles from "./navbar.module.css";
import SearchIcon from "../../assests/icons8-search-64.png";
const Navbar = () => {
  return (
    <nav className={styles.main_nav}>
      <div className={styles.icon}></div>
      <ul className={styles.left}>
        <li className={styles.list_item}>
          <a href="/">Home</a>
        </li>
        <li className={styles.list_item}>
          <a href="/movies">Movies</a>
        </li>
        <li className={styles.list_item}>
          <a href="/tv-shows">TV Shows</a>
        </li>
        <li className={styles.list_item}>
          <a href="/people">People</a>
        </li>
        <li className={styles.list_item}>
          <a href="/more">More</a>
        </li>
      </ul>
      <ul className={styles.right}>
        <li className={styles.list_item}>
          <a href="/login">Login</a>
        </li>
        <li className={styles.list_item}>
          <a href="/join-us">Join Us</a>
        </li>
        <li>
          <img className={styles.searchIcon} src={SearchIcon} alt="" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
