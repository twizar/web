import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import logo from "../../assets/logo.svg"
import { makeStyles } from "@material-ui/core/styles";

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