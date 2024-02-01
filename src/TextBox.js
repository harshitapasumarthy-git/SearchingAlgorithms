import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function TextBox({textBoxValue,setTextBoxValue}) {
  const classes = useStyles();
  

  const handleChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="my-textbox"
        label="Enter input size"
        value={textBoxValue}
        onChange={handleChange}
      />
    </form>
  );
}

export default TextBox;
