import { styled, Typography } from "@mui/material";

export const Title = styled(Typography)({
  marginRight: 2,
  display: "flex",
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  ["media (max-width: 600px)"]: { display: "none" },
});
