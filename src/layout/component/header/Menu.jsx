import React from "react";
import useTheme from "@material-ui/core/styles/useTheme";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Tabs from "./Tabs"
import Drawer from "./Drawer";

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
