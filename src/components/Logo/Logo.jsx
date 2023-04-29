import { Typography } from "@mui/material";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";

const Logo = () => {
  return (
    <>
      <LocalPizzaOutlinedIcon
        sx={{
          width: 32,
          height: 32,
        }}
      />
      <Typography variant="h6" component="div" sx={{ ml: 1 }}>
        PIZZA STYLE
      </Typography>
    </>
  );
};

export default Logo;
