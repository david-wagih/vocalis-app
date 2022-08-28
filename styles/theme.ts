import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    bg: "#FCF6F2",
    secondary: "#829878",
    primary: {
      50: "#4F6246",
      100: "#5c7252",
      200: "#6b8a6a",
      300: "#7b9b7b",
    },
    textColor: {
      10: "#000000",
      50: "#111E0F",
      100: "#1B2D1A",
      200: "#2C3F2A",
      300: "#3D543B",
    },
    quaternary: "#FFFFFF",
  },
  fonts: {
    body: "Darker Grotesque, sans-serif",
    heading: "Darker Grotesque, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        fontFamily: "Darker Grotesque",
        color: "white",
        backgroundColor: "bg",
      },
      html: {
        scrollBehavior: "smooth",
      },
      "&::-webkit-scrollbar": {
        width: "0.5em",
      },
      "&::-webkit-scrollbar-track": {
        borderRadius: "0px",
        background: "transparent",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "primary.50",
        borderRadius: "2px",
      },
    }),
  },
});

export default theme;
