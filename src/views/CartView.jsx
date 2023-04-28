import { Box, Container, Toolbar } from "@mui/material";
import CartList from "../components/CartList/CartList";

const CartView = () => {
  return (
    <Container>
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
      <CartList />
    </Box>
    </Container>
  );
};

export default CartView;
