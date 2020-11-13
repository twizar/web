import Container from "@mui/material/Container";
import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function RightColumn(props) {
    return <Container maxWidth="lg" >
        {props.content}
        <Box sx={{ width: '100%', maxWidth: 700 }}>
            <Typography variant="h4" component="div" gutterBottom>
                Coming Soon!
            </Typography>
            <Typography variant="body1" gutterBottom>
                The Twizar is being developed to be the platform for online sports gaming - <strong>FIFA, NHL, NBA, NFL</strong>.
            </Typography>
            <Typography variant="body1" gutterBottom>
                You will be able to <strong>participate in online tournaments and leagues</strong> and even <strong>create your ones</strong>,
                compete with other players in plenty of <strong>ratings</strong> and get <strong>achievements</strong>.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Since The Twizar is a startup we will be immensely grateful for any proposals, feedback, or help -
                please leave it in the form below in &laquo;Other&raquo; option.
            </Typography>
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdpJaCxlRVHHQYxn-f_JKZWAMdxTFRWtiftOAYfEXOYwsz63g/viewform?embedded=true"
                width="700" height="580" frameBorder="0" marginHeight="0" marginWidth="0">Loading…
            </iframe>
        </Box>
    </Container>
}

RightColumn.propTypes = {
    content: PropTypes.element.isRequired
};
