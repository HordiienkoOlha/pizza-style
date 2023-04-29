import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { AppBar, Box, Drawer, IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

import { getProducts } from "@redux/products/productsSelector";
import DrawerComponent from "@components/DrawerComponent";
import Logo from "@components/Logo";
import Navigation from "@components/Navigation/Navigation";
import {
  ReverseIconButton,
  StyledBadge,
  StyledBox,
} from "@styles/styledComponent";

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
              <Box
                sx={{
                  mr: 1,
                  marginInlineStart: "auto",
                }}
              >
                <Link to="/cart">
                  <ReverseIconButton
                    aria-label="cart"
                    onClick={handleDrawerToggle}
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
                      />
                    </StyledBadge>
                  </ReverseIconButton>
                </Link>
              </Box>
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
              keepMounted: true,
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
