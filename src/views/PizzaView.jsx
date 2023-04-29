import { Container, Toolbar } from "@mui/material";

import PizzaList from "../components/PizzaList/PizzaList";
import { StyledBox } from "../styles/styledComponent";

const PizzaView = () => {
  return (
    <Container>
      <StyledBox>
        <Toolbar />
        <PizzaList />
      </StyledBox>
    </Container>
  );
};

export default PizzaView;
