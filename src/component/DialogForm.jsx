import Button from '@mui/material/Button';
import Dialog from "@mui/material/Dialog";
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import React from "react" ;

export default function DialogForm(prop) {
    return (
        <Dialog open={prop.open} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">{prop.title}</DialogTitle>
            <DialogContent>
                {prop.formComponent}
            </DialogContent>
            <DialogActions>
                <Button onClick={prop.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={prop.handleSubmit} color="primary">
                    {prop.submitButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
