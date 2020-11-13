import Button from "@mui/material/Button";
import React from "react";
import DialogForm from "./DialogForm";
import TextField from "@mui/material/TextField";
import Snackbar from "./Snackbar";
import {Auth} from "aws-amplify";
import PropTypes from "prop-types";

function SignUpForm(props) {
    return (
        <React.Fragment>
            <TextField autoFocus margin="dense" id="email" label="E-mail" type="email" fullWidth onChange={event => props.setEmail(event.target.value)} />
            <TextField margin="dense" id="password" label="Password" type="password" fullWidth onChange={event => props.setPassword(event.target.value)} />
        </React.Fragment>
    )
}

export default function SignUp() {
    const [open, setOpen] = React.useState(false);

    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);

    const [snackbar, setSnackbar] = React.useState({
        open: false,
        text: null,
        severity: null
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
                Sign up
            </Button>
            <DialogForm
                open={open}
                title="Sign up"
                formComponent={<SignUpForm setEmail={setEmail} setPassword={setPassword} />}
                handleClose={function () {setOpen(false)}}
                submitButtonText={"Sign up"}
                handleSubmit={
                    async function () {
                        try {
                            const { user } = await Auth.signUp({
                                username: email,
                                password: password,
                            });
                            console.log(user);
                        } catch (error) {

                            console.log(error);
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

SignUpForm.propTypes = {
    setEmail: PropTypes.func,
    setPassword: PropTypes.func
};
