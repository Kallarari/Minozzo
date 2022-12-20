import { styled as MUIstyled, Typography } from "@mui/material";
import styled from 'styled-components';

export const Title = MUIstyled(Typography)({
  marginRight: 2,
  display: "flex",
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "inherit",
  textDecoration: "none",
  ["media (max-width: 600px)"]: { display: "none" },
});
 
export const Container = styled.div`
    display: flex,
    
`;
