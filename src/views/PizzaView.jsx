import { Box, Typography } from "@mui/material";

const PizzaView = () => {
  return (
    <>
      <Box
        sx={{
          // bgcolor: "primary.main",
          "@media (min-width: 320px)": {
            maxWidth: "320px",
            p: 0,
          },
          "@media (min-width: 768px)": {
            maxWidth: "768px",
            // p: 1,
          },
          maxWidth: "1280px",
          width: "100%",
          margin: "0 auto",
          p: 2,
        }}
      >
        <Typography>
          <h2>Pizza</h2>
        </Typography>
      </Box>
    </>
  );
};

export default PizzaView;
