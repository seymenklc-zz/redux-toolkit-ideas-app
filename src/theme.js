import { createTheme } from "@material-ui/core";
import { pink, purple } from "@material-ui/core/colors";

export const theme = createTheme({
    palette: {
        primary: purple,
        secondary: pink
    },
    typography: {
        fontFamily: 'Open Sans',
        fontWeightLight: 400,
        fontWeightReguler: 500,
        fontWeightMedium: 600,
        fontWeightBold: 700,
    }
});
