import { Container, Toolbar } from "@mui/material";

import CartList from "@components/CartList/CartList";
import { StyledBox } from "@styles/styledComponent";

const CartView = () => {
  return (
    <Container>
      <StyledBox>
        <Toolbar />
        <CartList />
      </StyledBox>
    </Container>
  );
};

export default CartView;
