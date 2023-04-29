import { NavLink } from "react-router-dom";
import { Typography } from "@mui/material";

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
        <Typography variant="h6">Pizza</Typography>
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          isActive ? styles["active-link"] : styles.link
        }
      >
        <Typography variant="h6">Cart</Typography>
      </NavLink>
    </>
  );
};
export default Navigation;
