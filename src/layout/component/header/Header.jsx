import {AppBar, IconButton, Toolbar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import React from "react";
import logo from "../../../assets/logo.svg"
import {makeStyles} from "@material-ui/core/styles";
import Menu from "./Menu";

const useStyles = makeStyles(theme => ({
    appBar: {
        zIndex: theme.zIndex.modal + 1
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "2.8em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        [theme.breakpoints.down("md")]: {
            height: "3em",
            width: "auto"
        },
        marginTop: "1em",
        marginBottom: "0.5em",
        width: "15em"
    },
    iconButton: {
        color: "inherit"
    }
}))

export default function Header(props) {
    const classes = useStyles()

    return <React.Fragment>
                <AppBar position="fixed" className={classes.appBar} >
                    <Toolbar>
                        <img className={classes.logo} alt="Logo" src={logo} />
                        <Menu
                            parentMenuIndex={props.parentMenuIndex}
                            setParentMenuIndex={props.setParentMenuIndex}
                            childMenuIndex={props.childMenuIndex}
                            setChildMenuIndex={props.setChildMenuIndex}
                        />
                        <IconButton className={classes.iconButton} >
                            <AccountCircle />
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <div className={classes.toolbarMargin} />
           </React.Fragment>

}
