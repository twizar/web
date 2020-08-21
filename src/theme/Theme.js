import {createMuiTheme} from "@material-ui/core";
import createPalette from "@material-ui/core/styles/createPalette";

const red = '#d32f2f',
      lightRed = '#ff5f52',
      darkRed = '#8e0000',

      blue = '#21263b',
      lightBlue = '#4147b6',
      darkBlue = '#161a24',

      white = '#fff'

export default createMuiTheme(
    {
        palette: createPalette({
            primary: {
                main: red,
                light: lightRed,
                dark: darkRed,
                contrastText: white
            },
            secondary: {
                main: blue,
                light: lightBlue,
                dark: darkBlue,
                contrastText: white
            },
        })
    }
)