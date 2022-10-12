import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <nav className={styles.mainNavbar}>
      <h1>
        <Link className={styles.mainLogo} to="/">
          TestChimpanzee
        </Link>
      </h1>
      <div>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navLinks} to="/about">
              about us
            </Link>
          </li>
          <li>
            <Link className={styles.navLinks} to="/tests">
              all tests
            </Link>
          </li>
          <li>
            <Link className={styles.navLinks} to="/pricing">
              our pricing
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
