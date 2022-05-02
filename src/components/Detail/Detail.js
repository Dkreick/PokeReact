import React from 'react';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PokemonDetail(props) {
  const handleClose = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle> <IconButton onClick={handleClose}><ArrowBackIcon /></IconButton>{props.data.name}</DialogTitle>
      <DialogContent>
        {props.data.types
          ? props.data.types.map((type) => {
            return (
              <Chip label={type.type.name} key={type.id} />
            );
          })
          : null}
        <img
          src={
            props.data.sprites
              ? props.data.sprites.other["official-artwork"].front_default
              : null
          }
          alt=""
        />
      </DialogContent>
    </Dialog>
  );
}
