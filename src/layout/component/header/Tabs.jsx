import menu from "../../../config/menu";
import Tab from "@mui/material/Tab";
import {Link} from "react-router-dom";
import MUIMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React, { useState } from "react";
import {makeStyles, useTheme} from "@mui/styles";
import MUITabs from "@mui/material/Tabs";
import PropTypes from "prop-types";

const useStyles = makeStyles(theme => ({
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    menu: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    menuItemSelected: {
        opacity: 1
    },
}))

export default function Tabs(props) {
    const classes = useStyles()
    const theme = useTheme()
    const [childMenuAnchor, setChildMenuAnchor] = useState(null)
    const [expandMenu, setExpandMenu] = useState(false)
    const handleChangeParentMenuItem = (e, newValue) => {
        props.setParentMenuIndex(newValue)
        props.setChildMenuIndex(null)
    }
    const handleMouseOverOnMenuItem = (e) => {
        setChildMenuAnchor(e.currentTarget);
        setExpandMenu(true)
    }
    const handleCloseChildMenu = () => {
        setChildMenuAnchor(undefined);
        setExpandMenu(false)
    }
    const handleChildMenuItemCLick = (i) => {
        setChildMenuAnchor(undefined)
        setExpandMenu(false)
        props.setChildMenuIndex(i)
    }

    return <React.Fragment>
        <MUITabs className={classes.tabContainer} value={props.parentMenuIndex} onChange={handleChangeParentMenuItem} indicatorColor="primary" >
            {menu.map((option, i) => <Tab
                    key={i}
                    className={classes.tab}
                    to={option.link}
                    label={option.name}
                    component={Link}
                    aria-owns={option["aria-owns"] ? option["aria-owns"](childMenuAnchor) : undefined }
                    aria-haspopup={option["aria-haspopup"] ? option["aria-haspopup"](childMenuAnchor) : undefined }
                    onMouseOver={option.onMouseOver ? (e) => option.onMouseOver(e, handleMouseOverOnMenuItem) : undefined}
                />
            )}
        </MUITabs>
        {menu.map((option, i) => option.children ? <MUIMenu
            key={i}
            id={option.name}
            anchorEl={childMenuAnchor}
            open={expandMenu}
            onClose={handleCloseChildMenu}
            MenuListProps={{onMouseLeave: handleCloseChildMenu}}
            classes={{paper: classes.menu }}
            elevation={0}
            keepMounted
            style={{zIndex: theme.zIndex.modal + 1}}
        >
            {option.children.map((option, j) =>
                <MenuItem
                    key={j}
                    classes={{root: classes.menuItem, selected: classes.menuItemSelected }}
                    onClick={() => {
                        handleChildMenuItemCLick(j)
                        handleCloseChildMenu();
                        props.setParentMenuIndex(i);
                    }}
                    selected={j === props.childMenuIndex}
                    component={Link}
                    to={option.link}
                >
                    {option.name}
                </MenuItem>
            )}
        </MUIMenu> : null)}
    </React.Fragment>
}

Tabs.propTypes = {
    parentMenuIndex: PropTypes.number,
    childMenuIndex: PropTypes.number,
    setParentMenuIndex: PropTypes.func,
    setChildMenuIndex: PropTypes.func,
};
