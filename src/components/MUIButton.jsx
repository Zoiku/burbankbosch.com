import { styled } from "@mui/material/styles";
import { LoadingButton } from "@mui/lab";

export const Button1 = styled(LoadingButton)({
  boxShadow: "none",
  textTransform: "none",
  background: "var(--primary-nav-text)",
  transition: "all 0.2s ease",
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

export const Button2 = styled(LoadingButton)({
  boxShadow: "none",
  textTransform: "none",
  transition: "all 0.2s ease",
  color: "var(--primary-nav-text)",
  borderColor: "var(--primary-nav-text)",
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
    color: "var(--primary-nav-text)",
    borderColor: "var(--primary-nav-text)",
  },
  "&:active": {
    boxShadow: "none",
    color: "var(--primary-nav-text)",
    borderColor: "var(--primary-nav-text)",
  },
  "&:focus": {},
});

export const Button3 = styled(LoadingButton)({
  boxShadow: "none",
  textTransform: "none",
  background: "var(--primary-nav-text)",
  transition: "all 0.2s ease",
  color: "#fff",
  padding: "10px 25px",
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
