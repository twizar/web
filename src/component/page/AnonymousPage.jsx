import Grid from "@material-ui/core/Grid";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import React from "react";

export default function AnonymousPage() {
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            style={{ height: '70vh' }}
        >
            <Grid item md={6} >
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} >
                        <SignUp />
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <SignIn />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
