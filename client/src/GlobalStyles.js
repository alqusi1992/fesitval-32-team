import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
  return {};
});

export const GlobalStyle = createGlobalStyle`
* {
  color: black;
}
`;

export const theme = createTheme({
  palette: {
    primary: {
      main: "#000",
      contrastText: "#fff",
    },
    secondary: {
      main: "#fff",
      contrastText: "#000",
    },
  },
});
