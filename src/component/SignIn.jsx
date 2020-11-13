import Button from "@mui/material/Button";
import React from "react";
import DialogForm from "./DialogForm";
import TextField from "@mui/material/TextField";
import Snackbar from "./Snackbar";
import {Auth} from "aws-amplify";
import PropTypes from "prop-types";

function SignInForm(props) {
    return (
        <React.Fragment>
            <TextField autoFocus margin="dense" id="email" label="E-mail" type="email" fullWidth onChange={event => props.setEmail(event.target.value)} />
            <TextField margin="dense" id="password" label="Password" type="password" fullWidth onChange={event => props.setPassword(event.target.value)} />
        </React.Fragment>
    )
}

export default function SignIn() {
    const [open, setOpen] = React.useState(false);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const [snackbar, setSnackbar] = React.useState({
        open: false
    });

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
                formComponent={<SignInForm setEmail={setEmail} setPassword={setPassword} />}
                handleClose={function () {setOpen(false)}}
                submitButtonText={"Sign in"}
                handleSubmit={
                    async function () {
                        try {
                            await Auth.signIn({
                                username: email,
                                password: password,
                            }).then((user) => {
                                setSnackbar({
                                    open: true,
                                    text: `Successfully signed in as ${user.attributes.email}`,
                                    severity: "success"
                                });
                                window.location.reload();
                            })
                        } catch (error) {
                            setSnackbar({
                                open: true,
                                text: error.message,
                                severity: "error"
                            })
                        }
                    }
                }
            />
            <Snackbar open={snackbar.open} severity={snackbar.severity} text={snackbar.text} setSnackbar={setSnackbar} />
        </React.Fragment>
    )
}

SignInForm.propTypes = {
    setEmail: PropTypes.func,
    setPassword: PropTypes.func
};
