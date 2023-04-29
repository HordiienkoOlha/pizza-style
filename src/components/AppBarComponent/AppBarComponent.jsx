import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

import { getProducts } from "../../redux/products/productsSelector";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo";
import { StyledBadge, StyledBox } from "../../styles/styledComponent";
import styles from "./AppBarComponent.module.css";

const AppBarComponent = () => {
  const drawerWidth = 240;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [container, setContainer] = useState(false);

  const productsCart = useSelector(getProducts);
  const quantityCartProduct = productsCart.length;

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
        <AppBar component="nav">
          <StyledBox>
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

              <IconButton
                aria-label="cart"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 1,
                  marginInlineStart: "auto",
                }}
              >
                <StyledBadge
                  badgeContent={quantityCartProduct}
                  color="secondary"
                >
                  <LocalGroceryStoreOutlinedIcon
                    sx={{
                      width: 32,
                      height: 32,
                      marginInlineStart: "auto",
                    }}
                    className={styles.icon}
                  />
                </StyledBadge>
              </IconButton>
            </Toolbar>
          </StyledBox>
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
        <Outlet />
      </Box>
    </>
  );
};

export default AppBarComponent;
