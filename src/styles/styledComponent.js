import styled from "@emotion/styled";
import { Button, Badge, Box, Typography } from "@mui/material";

export const ReverseButton = styled(Button)`
  &:hover {
    background-color: rgba(74, 20, 140, 0.69);
    color: #fff;
  }
`;

export const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const StyledBox = styled(Box)`
  @media (min-width: 320px) {
    max-width: 320px;
    padding: 0;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 2px;
`;

export const StyledTypography = styled(Typography)`
  @media (min-width: 768px) {
    font-size: 30px;
    padding: 200px 0 0 0;
  }
  display: flex;
  justify-content: center;
  padding: 80px 0 0 0;
  font-size: 20px;
  text-decoration: none;
`;
