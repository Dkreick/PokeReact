import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import LinearProgress from '@mui/material/LinearProgress';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Typography from '@mui/material/Typography';
import './Detail.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function PokemonDetail(props) {
  const handleClose = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Dialog
      open={props.open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogTitle className='detail__title'>
        <IconButton onClick={handleClose}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant='h5' component='div' align='center'>
          {props.data.name}
        </Typography>
      </DialogTitle>
      <DialogContent className='detail__content'>
        <Box className='detail__chips__container'>
          <Typography variant='h6' component='h6' align='left'>
            Types
          </Typography>
          {props.data.types
            ? props.data.types.map((type) => {
                return (
                  <Chip
                    label={type.type.name}
                    key={type.id}
                    className='detail__chip'
                  />
                );
              })
            : null}

          <img
            src={
              props.data.sprites
                ? props.data.sprites.other['official-artwork'].front_default
                : null
            }
            alt=''
            className='detail__image'
          />
        </Box>
        <Box>
          <Typography variant='h6' component='h6' align='left'>
            Basic stats
          </Typography>
          {props.data.stats
            ? props.data.stats.map((stat) => (
                <Box className='detail__stat__container'>
                  <Typography
                    variant='body'
                    component='p'
                    className='detail__stat__title'
                  >
                    {stat.stat.name}: {stat.base_stat}
                  </Typography>
                  <LinearProgress
                    variant='determinate'
                    value={stat.base_stat}
                  />
                </Box>
              ))
            : null}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
