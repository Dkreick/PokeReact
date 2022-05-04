import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addPokemon } from './../../redux/actions/AddPokemonAction';
import './AddPokemon.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function AddPokemon(props) {
  const { handleSubmit, control } = useForm();
  const { onClose, selectedValue } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const onSubmit = (data) => {
    handleClose();
    dispatch(addPokemon(data));
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle>
        <IconButton onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
        Add your custom Pokemon
      </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className='add__pokemon__form__container'>
            <Controller
              name='name'
              control={control}
              defaultValue=''
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Name'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Name is required' }}
            />
            <Controller
              name='height'
              control={control}
              defaultValue=''
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Height (Cm)'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  type='number'
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Height is required' }}
            />
            <Controller
              name='weight'
              control={control}
              defaultValue=''
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <TextField
                  label='Weight (M)'
                  value={value}
                  onChange={onChange}
                  error={!!error}
                  type='number'
                  helperText={error ? error.message : null}
                />
              )}
              rules={{ required: 'Weight is required' }}
            />
          </Box>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type='submit'>Add Pokemon</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}
