import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import menu from "../../../config/menu";
import ListItem from "@material-ui/core/ListItem";
import {Link} from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import isMobile from "is-mobile";

const useStyles = makeStyles(theme => ({
    drawer: {
        backgroundColor: theme.palette.primary.main
    },
    drawerItem: {
        color: theme.palette.primary.contrastText,
        opacity: 0.7
    },
    drawerItemSelected: {
        opacity: 1
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px",
        color: theme.palette.primary.contrastText
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    }
}))

export default function Drawer(props) {
    const classes = useStyles()
    const mobile = isMobile()
    const [openDrawer, setOpenDrawer] = useState(false)

    return <React.Fragment>
        <SwipeableDrawer
            disableBackdropTransition={!mobile}
            disableDiscovery={mobile}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            open={openDrawer}
            classes={{paper: classes.drawer}}
        >
            <div className={classes.toolbarMargin} />
            <List>
                {menu.map((option, i) => {
                    return <ListItem
                        key={i}
                        className={classes.drawerItem}
                        classes={{selected: classes.drawerItemSelected}}
                        onClick={() => {
                            setOpenDrawer(false)
                            props.setParentMenuIndex(i)
                        }}
                        divider
                        button
                        component={Link}
                        to={option.link}
                        selected={props.parentMenuIndex === i}
                    >
                        <ListItemText>{option.name}</ListItemText>
                    </ListItem>
                })}
            </List>
        </SwipeableDrawer>
        <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple >
            <MenuIcon className={classes.drawerIcon} />
        </IconButton>
    </React.Fragment>
}
