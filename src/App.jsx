import { ThemeProvider, styled } from "@mui/material/styles";
import LocalPizzaOutlinedIcon from '@mui/icons-material/LocalPizzaOutlined';
import RemoveCircleOutlineTwoToneIcon from '@mui/icons-material/RemoveCircleOutlineTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

import theme from "./theme/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>
       Pizza Style
      </h1>
      <LocalPizzaOutlinedIcon sx={{
                width: 48,
                height: 48,
                color: "black",
              }} />
      <RemoveCircleOutlineTwoToneIcon />
      <AddCircleOutlineTwoToneIcon/>
      
    </ThemeProvider>
  );
}

export default App;
