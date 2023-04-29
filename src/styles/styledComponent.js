import styled from "@emotion/styled";
import { Button, Badge } from "@mui/material";

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
