import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddPokemon(props) {
  const handleClose = (event) => {
    props.onChange(event.target.value);
  }

  const handleSubmit = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle> <IconButton onClick={handleClose}><ArrowBackIcon /></IconButton>Add your custom Pokemon</DialogTitle>
      <DialogContent>
        <TextField
          margin="dense"
          id="name"
          label="Name"
          type='text'
          fullWidth
        />
        <TextField
          margin="dense"
          id="height"
          label="Height (Cm)"
          type='number'
          fullWidth
        />
        <TextField
          margin="dense"
          id="weight"
          label="Weight (Kg)"
          type='number'
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Add</Button>
      </DialogActions>
    </Dialog>
  );
}
