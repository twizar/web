import {createTheme} from "@mui/material/styles";
import createPalette from "@mui/material/styles/createPalette";
import createTypography from "@mui/material/styles/createTypography";

const red = '#d32f2f',
      lightRed = '#ff5f52',
      darkRed = '#8e0000',

      blue = '#21263b',
      lightBlue = '#4147b6',
      darkBlue = '#161a24',

      white = '#fff'

const palette = createPalette({
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

export default createTheme(
    {
        palette: palette,
        typography: createTypography(palette,{
            tab: {
                fontSize: '1rem'
            }
        })
    }
)
