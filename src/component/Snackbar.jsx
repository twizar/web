import React from "react";
import Alert from "@mui/material/Alert";
import MuiSnackbar from "@mui/material/Snackbar";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    snackbar: {
        [theme.breakpoints.up("md")]: {
            paddingBottom: "4em"
        },
    },
}))


export default function Snackbar(props) {
    const classes = useStyles()
    const handleClose = () => props.setSnackbar({
        open: false,
        text: props.text,
        severity: props.severity
    })

    return (
        <MuiSnackbar open={props.open} autoHideDuration={6000} className={classes.snackbar} onClose={handleClose} >
            <Alert severity={props.severity} elevation={6} variant="filled" onClose={handleClose} >
                {props.text}
            </Alert>
        </MuiSnackbar>
    )
}

Snackbar.propTypes = {
    setSnackbar: PropTypes.func,
    text: PropTypes.string,
    severity: PropTypes.string,
    open: PropTypes.bool,
};
