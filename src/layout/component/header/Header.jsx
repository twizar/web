import {AppBar, IconButton, Toolbar} from "@mui/material";
// import Avatar from '@mui/material/Avatar';
import AccountMenu from './AccountMenu';
import Typography from '@mui/material/Typography';
import AccountCircle from "@mui/icons-material/AccountCircle";
import React from "react";
import logo from "../../../assets/logo.svg"
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";

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
                <Typography sx={{ flexGrow: 1 }}>

                </Typography>
                {(() => props.user ?
                        <AccountMenu user={props.user} /> :
                        <IconButton color={"inherit"} >
                            <AccountCircle />
                        </IconButton>
                )()}
            </Toolbar>
        </AppBar>
        <div className={classes.toolbarMargin} />
    </React.Fragment>
}

Header.propTypes = {
    parentMenuIndex: PropTypes.number,
    childMenuIndex: PropTypes.number,
    setParentMenuIndex: PropTypes.func,
    setChildMenuIndex: PropTypes.func,
    user: PropTypes.object,
};
