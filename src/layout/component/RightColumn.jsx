import Container from "@material-ui/core/Container";
import React from "react";

export default function RightColumn(props) {
    return <Container maxWidth="lg" >
        {props.content}
    </Container>
}
