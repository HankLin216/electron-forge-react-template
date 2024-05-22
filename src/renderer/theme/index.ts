import { createTheme } from "@mui/material/styles";

const DefaultTheme = createTheme({
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          //   minHeight: "48px",
          //   "@media (min-width:600px)": {
          //     minHeight: "48px",
          //   },
        },
      },
    },
  },
});

export default DefaultTheme;
