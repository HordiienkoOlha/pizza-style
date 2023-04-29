import { Container, Toolbar } from "@mui/material";
import getProducts from "../api/FakeApi";
import PizzaList from "../components/PizzaList/PizzaList";
import { StyledBox } from "../styles/styledComponent";

const PizzaView = () => {
  const products = getProducts();
  console.log(products);
  return (
    <Container>
      <StyledBox>
        <Toolbar />

        <PizzaList products={products} />
      </StyledBox>
    </Container>
  );
};

export default PizzaView;
