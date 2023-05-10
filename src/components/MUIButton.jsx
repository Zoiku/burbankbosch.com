import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

export const Button1 = styled(LoadingButton)({
  boxShadow: "none",
  textTransform: "none",
  background: "var(--primary-nav-text)",
  transition: "all 0.2s ease",
  padding: "10px",
  color: "#fff",
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  "&:hover": {
    boxShadow: "none",
    background: "var(--primary-nav-text)",
    color: "#fff",
  },
  "&:active": {
    boxShadow: "none",
  },
  "&:focus": {},
});
