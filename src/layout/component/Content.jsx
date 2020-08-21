import Container from "@material-ui/core/Container";
import React from "react";

export default function Content(prop) {
    return <Container maxWidth="lg" >
        {prop.content}
    </Container>
}