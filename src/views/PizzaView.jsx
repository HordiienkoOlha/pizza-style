import { Container, Toolbar } from "@mui/material";

import PizzaList from "@components/PizzaList/PizzaList";
import { StyledBox } from "@styles/styledComponent";

const PizzaView = () => {
  return (
    <section>
      <Container>
        <StyledBox>
          <Toolbar />
          <h1></h1>
          <PizzaList />
        </StyledBox>
      </Container>
    </section>
  );
};

export default PizzaView;
