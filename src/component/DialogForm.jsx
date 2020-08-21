import Button from '@material-ui/core/Button';
import Dialog from "@material-ui/core/Dialog";
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
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
                <Button onClick={prop.handleClose} color="primary">
                    {prop.submitButtonText}
                </Button>
            </DialogActions>
        </Dialog>
    )
}
