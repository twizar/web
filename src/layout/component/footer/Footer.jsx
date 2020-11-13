import React from "react";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    footer: {
        ...theme.typography,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        zIndex: theme.zIndex.modal + 1,
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "1em",
        overflow: "hidden",
        boxShadow: "0px -2px 4px -1px rgba(0,0,0,0.2);"
    },
    link: {
        textDecoration: "none",
        color: theme.palette.primary.contrastText,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        },
        fontSize: '1rem',
    },
    activeLink: {
        opacity: 1,
    },
    linkChild: {
        fontSize: '0.7rem'
    }
}))

export default function Footer() {
    const classes = useStyles()

    return <footer className={classes.footer} >
    </footer>
}

Footer.propTypes = {
    parentMenuIndex: PropTypes.number,
    childMenuIndex: PropTypes.number,
    setParentMenuIndex: PropTypes.func,
    setChildMenuIndex: PropTypes.func,
};
