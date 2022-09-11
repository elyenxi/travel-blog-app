import React from 'react';
import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({ autoFocus, half, label, name, type, handleChange, handleShowPassword }) => (
  <Grid item xs={12} sm={half ? 6 : 12}>
    <TextField
      autoFocus={autoFocus}
      name={name}
      label={label}
      type={type}
      onChange={handleChange}
      variant='outlined'
      fullWidth
      required
      InputProps={
        name === 'password' && {
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={handleShowPassword}>
                {type === 'password' ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
      }
    />
  </Grid>
);

export default Input;
