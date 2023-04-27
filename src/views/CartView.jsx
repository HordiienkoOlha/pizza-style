import { Outlet } from "react-router-dom";
import { Box, Toolbar, Typography } from "@mui/material";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import RemoveCircleOutlineTwoToneIcon from "@mui/icons-material/RemoveCircleOutlineTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

const CartView = () => {
  return (
    <>
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
        <Toolbar />
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          unde fugit veniam eius, perspiciatis sunt?
          <h2>CartView</h2>
          <LocalPizzaOutlinedIcon
            sx={{
              width: 48,
              height: 48,
              color: "black",
            }}
          />
          <RemoveCircleOutlineTwoToneIcon />
          <AddCircleOutlineTwoToneIcon />
          <LocalGroceryStoreOutlinedIcon
            sx={{
              width: 48,
              height: 48,
              color: "black",
            }}
          />
          <Outlet />
        </Typography>
      </Box>
    </>
  );
};

export default CartView;
