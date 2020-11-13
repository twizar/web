import {AppBar, IconButton, Toolbar} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import logo from "../../assets/logo.svg"
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
    toolBarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em"
    },
    logo: {
        marginTop: "1em",
        width: "15em"
    }
}))

export default function Header() {
    const classes = useStyles()

    return <React.Fragment>
                <AppBar position="fixed" >
                    <Toolbar>
                        <img className={classes.logo} alt="Logo" src={logo} />
                        <IconButton style={{marginLeft: 'auto'}} color="inherit" >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolBarMargin} />
           </React.Fragment>
}
