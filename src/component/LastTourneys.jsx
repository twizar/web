import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardActionArea from '@mui/material/CardActionArea';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {makeStyles} from "@mui/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const LastTourneys = (props) => {
    const classes = useStyles()
    return <Grid container direction={"column"} spacing={3} >
        {props.tourneys.map((tourney, i) => <Grid item key={i} >
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        /*eslint-env node*/
                        //image={require(`../assets/${tourney.image}`)}
                        title={tourney.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" >
                            {tourney.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Open
                    </Button>
                </CardActions>
            </Card>
        </Grid>)}
    </Grid>
}

LastTourneys.propTypes = {
    tourneys: PropTypes.array
};

export default LastTourneys;
