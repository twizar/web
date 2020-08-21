import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import menu from "../../../config/menu";
import {Link} from "react-router-dom";

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
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    return <footer className={classes.footer} >
        <Grid container justify={"center"} spacing={2} >
            {menu.map((item, i) =>
                <Grid item key={i} >
                    {(() => {
                        if (item.children) {
                            return <Grid container direction={"column"} >
                                <Grid key={i} item component={Link} to={item.link} onClick={() => props.setParentMenuIndex(i)} >
                                    {item.name}
                                </Grid>
                                {item.children.map((child, j) =>
                                    <Grid
                                        key={j}
                                        item
                                        component={Link}
                                        to={child.link}
                                        onClick={() => {
                                            props.setParentMenuIndex(i)
                                            props.setChildMenuIndex(j)
                                        }}
                                    >
                                        {child.name}
                                    </Grid>
                                )}
                            </Grid>
                        } else {
                            return <Grid item component={Link} to={item.link} onClick={() => props.setParentMenuIndex(i)} >
                                {item.name}
                            </Grid>
                        }
                    })()}
                </Grid>
            )}
        </Grid>
    </footer>
}
