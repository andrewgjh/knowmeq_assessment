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
              About Us
            </Link>
          </li>
          <li>
            <Link className={styles.navLinks} to="/tests">
              All Tests
            </Link>
          </li>
          <li>
            <Link className={styles.navLinks} to="/pricing">
              Our Pricing
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
