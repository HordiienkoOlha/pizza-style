import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const NotFoundView = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          margin: "0 auto",
          "@media (min-width: 320px)": {
            maxWidth: "320px",
            p: 0,
          },
          "@media (min-width: 768px)": {
            maxWidth: "768px",
          },
          maxWidth: "1280px",
          width: "100%",
          p: 2,
        }}
      >
        <h2>Nothing to see here!</h2>
        <Link to="/">Go to the home page</Link>
      </Box>
    </Box>
  );
};

export default NotFoundView;
