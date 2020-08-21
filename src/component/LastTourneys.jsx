import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function LastTourneys(props) {
    const classes = useStyles()
    return <Grid container direction={"column"} spacing={3} >
        {props.tourneys.map((tourney, i) => <Grid item key={i} >
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={require(`../assets/${tourney.image}`)}
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
