import React from "react";
import useTheme from "@mui/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";
import Tabs from "./Tabs"
import Drawer from "./Drawer";
import PropTypes from "prop-types";

export default function Menu(props) {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))

    return matches
        ? <Drawer
            parentMenuIndex={props.parentMenuIndex}
            setParentMenuIndex={props.setParentMenuIndex}
        />
        : <Tabs
            parentMenuIndex={props.parentMenuIndex}
            setParentMenuIndex={props.setParentMenuIndex}
            childMenuIndex={props.childMenuIndex}
            setChildMenuIndex={props.setChildMenuIndex}
        />
}

Menu.propTypes = {
    parentMenuIndex: PropTypes.number,
    childMenuIndex: PropTypes.number,
    setParentMenuIndex: PropTypes.func,
    setChildMenuIndex: PropTypes.func,
};
