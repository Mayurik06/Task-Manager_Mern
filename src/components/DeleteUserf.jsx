import React from 'react'
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

function DeleteUser({isOpen,close,confirm}) {
  return (
    <div>
        <Dialog
        open={isOpen}
        onClose={close}
        aria-labelledby="delete-dialog-title"
        aria-describedby="delete-dialog-description"
      >
        <DialogTitle id="delete-dialog-title">Delete User</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-dialog-description">
          Are you sure you want to delete this user? This action cannot be undone. Please note that all tasks associated with this user will also be permanently deleted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close} color="primary">
            Cancel
          </Button>
          <Button onClick={confirm} color="danger">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DeleteUser
