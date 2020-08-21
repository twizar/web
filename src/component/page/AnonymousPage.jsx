import Layout from "../../layout/Main";
import Grid from "@material-ui/core/Grid";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import React from "react";

export default function AnonymousPage() {
    return (
        <Layout content={
            <Grid
                container
                spacing={3}
                alignItems="center"
                justify="center"
                style={{ height: '70vh' }}
            >
                <Grid item xs={3}>
                    <SignUp />
                </Grid>
                <Grid item xs={3}>
                    <SignIn />
                </Grid>
            </Grid>
        }/>
    );
}
