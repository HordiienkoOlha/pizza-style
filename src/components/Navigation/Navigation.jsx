import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <>
      <NavLink
        exact="true"
        to="/"
        className={({ isActive }) =>
          isActive ? styles["active-link"] : styles.link
        }
      >
        Pizza
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? styles["active-link"] : styles.link
        }
      >
        Cart
      </NavLink>
    </>
  );
};
export default Navigation;
