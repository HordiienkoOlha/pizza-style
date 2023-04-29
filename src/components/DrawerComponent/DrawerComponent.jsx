import { NavLink } from "react-router-dom";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";

import styles from "./DrawerComponent.module.css";

const DrawerComponent = () => {
  return (
    <>
      <Typography variant="h6" sx={{ my: 2 }}>
        PIZZA STYLE
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              exact="true"
              to="/"
              className={({ isActive }) =>
                isActive ? styles["active-link"] : styles.link
              }
            >
              <Typography variant="h6">Pizza</Typography>
            </NavLink>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? styles["active-link"] : styles.link
              }
            >
              <Typography variant="h6">Cart</Typography>
            </NavLink>
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );
};

export default DrawerComponent;
