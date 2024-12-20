import { NavLink } from "react-router-dom";
import styles from "./AppNav.module.css";
export const AppNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to={"/app/cities"}>Cities</NavLink>
        </li>
        <li>
          <NavLink to={"countries"}>Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
};
