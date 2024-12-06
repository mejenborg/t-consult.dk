import { extendTheme } from "@mui/joy";

const primary500 = "#ff0000";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          500: primary500,
        },
      },
    },
    dark: {},
  },
  components: {
    JoyListItemButton: {
      styleOverrides: {
        root: {
          ":first-of-type": {
            background: "none",
            ":hover": {
              background: "none",
            },
          },
          ":hover": {
            background: "none",
          },
        },
      },
    },
  },
  typography: {
    "body-md": {
      // letterSpacing: "-0.02em",
      wordSpacing: "0.02em",
      lineHeight: 1.7,
      fontWeight: 400,
      color: "#686868",
    },
    h1: {
      fontSize: "4rem",
      letterSpacing: "0.005em",
      fontWeight: 900,
      lineHeight: 1.4,
      marginBottom: 300,
      color: "#FFF",
      textShadow: "0 1px 2px rgba(0,0,0,.5)",
    },
    h2: {
      fontSize: "2.8rem",
      letterSpacing: "0.001em",
      fontWeight: 500,
      marginBottom: 40,
      position: "relative",
      width: "fit-content",
      ":before": {
        content: '""',
        width: 75,
        height: 5,
        backgroundColor: primary500,
        position: "absolute",
        bottom: -20,
      },
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 700,
      letterSpacing: "0.001em",
    },
    h4: {
      fontSize: "1.6rem",
      fontWeight: 500,
      // letterSpacing: "0.0001em",
    },
    //@ts-expect-error: 'h5' does not exist in type 'Partial<TypographySystemOptions>' - But still works though...
    h5: {
      fontSize: "1.3rem",
      fontWeight: 500,
      letterSpacing: "0.01em",
      wordSpacing: "0.1em",
      width: "fit-content",
    },
  },
});
