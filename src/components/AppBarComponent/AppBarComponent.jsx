import { useState, useEffect } from "react";

import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

import DrawerComponent from "../DrawerComponent/DrawerComponent";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { Outlet } from "react-router-dom";
import styles from "./AppBarComponent.module.css";

const AppBarComponent = () => {
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [container, setContainer] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (window) {
      const newContainer =
        window !== undefined ? () => window.document.body : undefined;
      setContainer(newContainer);
      return;
    }
  }, []);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Box
            sx={{
              "@media (min-width: 320px)": {
                maxWidth: "320px",
                p: 0,
              },
              "@media (min-width: 768px)": {
                maxWidth: "768px",
              },
              maxWidth: "1280px",
              width: "100%",
              margin: "0 auto",
              p: 2,
            }}
          >
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { md: "none" } }}
              >
                <MenuIcon
                  sx={{
                    width: 32,
                    height: 32,
                  }}
                  className={styles.icon}
                />
              </IconButton>

              <Logo />

              <Box
                sx={{
                  px: 5,
                  display: { xs: "none", sm: "none", md: "block" },
                }}
              >
                <Navigation />
              </Box>
              {/* <Button sx={{ marginInlineStart: "auto" }}> */}

              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 1, display: { md: "none" }, marginInlineStart: "auto" }}
              >
                <LocalGroceryStoreOutlinedIcon
                  sx={{
                    width: 32,
                    height: 32,
                    marginInlineStart: "auto",
                  }}
                  className={styles.icon}
                />
              </IconButton>
              {/* </Button> */}
            </Toolbar>
          </Box>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "block", md: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
              <DrawerComponent />
            </Box>
          </Drawer>
        </Box>
      </Box>
      <Outlet />
    </>
  );
};

export default AppBarComponent;
