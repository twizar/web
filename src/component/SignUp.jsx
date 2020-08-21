import Button from "@material-ui/core/Button";
import React, {useState} from "react";
import DialogForm from "./DialogForm";
import TextField from "@material-ui/core/TextField";

function SignUpForm() {
    const [errors, setErrors] = useState([])
    return (
        <React.Fragment>
            <TextField
                autoFocus
                margin="dense"
                id="email"
                label="E-mail"
                type="email"
                fullWidth
                error={errors.length > 0}
                helperText={errors.map((err, i) => <span key={i} >{err}</span>)}
                onBlur={
                    e => fetch('http://localhost:9779/validate/', {
                        method: "POST",
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({value: e.target.value})
                    })
                        .then(response => response.json())
                        .then(validation => setErrors(validation.errors))
                }
            />
            <TextField margin="dense" id="password" label="Password" type="password" fullWidth />
        </React.Fragment>
    )
}

export default function SignUp() {
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
                Sign up
            </Button>
            <DialogForm
                open={open}
                title="Sign up"
                formComponent={<SignUpForm />}
                handleClose={function () {setOpen(false)}}
                submitButtonText={"Sign up"}
            />
        </React.Fragment>
    )
}
