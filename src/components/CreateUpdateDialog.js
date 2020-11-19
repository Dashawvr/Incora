import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function CreateUpdateDialog({open, body, title, setBody, setTitle,  handleClose, helper, variant}) {

  return (
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{variant==='edit'?'Edit':'Create'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            type="text"
            value={title}
            fullWidth
            onChange={setTitle}
          />
          <TextField
            margin="dense"
            id="body"
            label="Body"
            type="text"
            value={body}
            fullWidth
            onChange={setBody}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {
            helper()
            handleClose()
          }} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
  );
}