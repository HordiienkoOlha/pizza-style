import { NavLink } from "react-router-dom";
import {
  Box,
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
      <Box sx={{ p: 2 }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton>
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
            <ListItemButton>
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
      </Box>
    </>
  );
};

export default DrawerComponent;
