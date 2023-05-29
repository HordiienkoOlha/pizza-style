import { Container, Toolbar } from "@mui/material";

import CartList from "@components/CartList/CartList";
import { StyledBox } from "@styles/styledComponent";

const CartView = () => {
  return (
    <section>
      <Container>
        <StyledBox>
          <Toolbar />
          <CartList />
        </StyledBox>
      </Container>
    </section>
  );
};

export default CartView;
