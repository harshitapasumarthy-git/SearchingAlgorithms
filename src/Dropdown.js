import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(3),
  },
}));

function Dropdown({dropdownValue,setDropDownValue,onChange}) {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const menuOptions =["Linear Search","Binary Search","Binary Search Tree","Red Black Tree"];

  const allmenuOptionsSelected = menuOptions.length > 0 && selected.length === menuOptions.length;

  const handleChange = (event) => {
    const value = event?.target?.value;
    if (value[value.length - 1] === "all") {
      setSelected(selected.length === menuOptions.length ? [] : menuOptions);
      return;
    }
    setSelected(value);
    if (typeof onChange === 'function') {
     onChange(value);
    }
 
  };

  return (
    
    <FormControl className={classes.formControl}>
      <InputLabel id="mutiple-select-label">Multiple Select</InputLabel>
      <Select
        labelId="mutiple-select-label"
        multiple
        value={selected}
        onChange={handleChange}
        renderValue={(selected) => selected.join(", ")}
      >
        <MenuItem
          value="all"
          classes={{
            root: allmenuOptionsSelected ? classes.selectedAll : ""
          }}
        >
          <ListItemIcon>
            <Checkbox
              classes={{ indeterminate: classes.indeterminateColor }}
              checked={allmenuOptionsSelected}
              indeterminate={
                selected.length > 0 && selected.length < menuOptions.length
              }
            />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.selectAllText }}
            primary="Select All"
          />
        </MenuItem>
        {menuOptions.map((option) => (
          <MenuItem key={option} value={option}>
            <ListItemIcon>
              <Checkbox checked={selected.indexOf(option) > -1} />
            </ListItemIcon>
            <ListItemText primary={option} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}


export default Dropdown;
