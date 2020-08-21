import Button from "@material-ui/core/Button";
import React from "react";
import DialogForm from "./DialogForm";
import TextField from "@material-ui/core/TextField";

function SignInForm() {
    return (
        <React.Fragment>
            <TextField autoFocus margin="dense" id="email" label="E-mail" type="email" fullWidth />
            <TextField margin="dense" id="password" label="Password" type="password" fullWidth />
        </React.Fragment>
    )
}

export default function SignIn() {
    const [open, setOpen] = React.useState(false);
    return (
        <React.Fragment>
            <Button
                size={"large"}
                style={{width: '100%'}}
                variant={"contained"}
                color={"primary"}
                onClick={function () {setOpen(true)}}
            >
                Sign in
            </Button>
            <DialogForm
                open={open}
                title="Sign in"
                formComponent={<SignInForm />}
                handleClose={function () {setOpen(false)}}
                submitButtonText={"Sign in"}
            />
        </React.Fragment>
    )
}
