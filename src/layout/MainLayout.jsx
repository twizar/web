import Header from "./component/header/Header.jsx";
import Footer from "./component/footer/Footer";
import React, {useState, useEffect} from "react";
import LeftColumn from "./component/LeftColumn.jsx";
import RightColumn from "./component/RightColumn.jsx";
import {PATH_ABOUT, PATH_FEEDBACK, PATH_PLAYERS_STATS, PATH_STATS, PATH_TOURNEY_STATS} from "../config/config";
import PropTypes from 'prop-types';
import Hidden from "@mui/material/Hidden";
import Grid from "@mui/material/Grid";



const MainLayout = (props) => {
    const [parentMenuIndex, setParentMenuIndex] = useState(0)
    const [childMenuIndex, setChildMenuIndex] = useState(0)

    useEffect(() => {
        const parentMenuPathMap = {
            [PATH_ABOUT]: 0,
            [PATH_FEEDBACK]: 1,
            [PATH_STATS]: 2,
            [PATH_PLAYERS_STATS]: 2,
            [PATH_TOURNEY_STATS]: 2
        }
        const childMenuPathMap = {
            [PATH_PLAYERS_STATS]: 0,
            [PATH_TOURNEY_STATS]: 1
        }
        const parentMenuIndex = parentMenuPathMap[window.location.pathname]
        const childMenuIndex = childMenuPathMap[window.location.pathname]

        setParentMenuIndex(parentMenuIndex !== undefined ? parentMenuIndex : 0)
        setChildMenuIndex(childMenuIndex !== undefined ? childMenuIndex : 0)
    }, [setParentMenuIndex, setChildMenuIndex])

    return  <React.Fragment>
        <Header
            parentMenuIndex={parentMenuIndex}
            setParentMenuIndex={setParentMenuIndex}
            childMenuIndex={childMenuIndex}
            setChildMenuIndex={setChildMenuIndex}
            user={props.user}
        />

        <Grid container justify="space-around" spacing={3} >
            <Grid item md={7} xs={12} >
                <LeftColumn content={props.content} />
            </Grid>
            <Hidden mdDown >
                <Grid item md={5} >
                    <RightColumn content={<React.Fragment />} />
                </Grid>
            </Hidden>
        </Grid>

        <Hidden mdDown >
            <Footer
                parentMenuIndex={parentMenuIndex}
                setParentMenuIndex={setParentMenuIndex}
                childMenuIndex={childMenuIndex}
                setChildMenuIndex={setChildMenuIndex}
            />
        </Hidden>
    </React.Fragment>
}

MainLayout.propTypes = {
    content: PropTypes.element.isRequired,
    user: PropTypes.object
};

export default MainLayout;
