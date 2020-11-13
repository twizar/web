import Container from "@mui/material/Container";
import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

export default function LeftColumn(props) {
    return <Container maxWidth="lg" >
        <Box sx={{ width: '100%', maxWidth: 700 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Generate FIFA Tourney
            </Typography>
            <Typography variant="body1" component="div" gutterBottom>
                Clubs will be elected by rating order and will be scheduled in groups randomly,
                but you can assign a particular club to the player forcefully
            </Typography>
            <Divider variant="middle" sx={{ m: 2 }} />
        </Box>
        {props.content}
    </Container>
}

LeftColumn.propTypes = {
    content: PropTypes.element.isRequired
};
