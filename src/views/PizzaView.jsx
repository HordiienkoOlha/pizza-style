import { Box, Container, Toolbar } from "@mui/material";
import getProducts from "../api/FakeApi";
import PizzaList from "../components/PizzaList/PizzaList";

const PizzaView = () => {
  const products = getProducts();
  console.log(products);
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

        <PizzaList products={products} />
      </Box>
    </Container>
  );
};

export default PizzaView;
