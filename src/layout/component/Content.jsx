import Container from "@mui/material/Container";
import React from "react";

export default function Content(prop) {
    return <Container maxWidth="lg" >
        {prop.content}
    </Container>
}
