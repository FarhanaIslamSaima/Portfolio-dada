import React,{useEffect, useState} from 'react';
import {Box,makeStyles,Typography,TextField,TextareaAutosize} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RichEditor from './TextEditor';


const useStyle=makeStyles((theme)=>({
    header:{
        textAlign:"center"
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        display:'flex',
        flexDirection:'column',
        '&>*':{
            margin:'10px'
        }
      },
  container:{
    display:'flex',
    
    
    
  },
  editor: {
    border: '1px solid gray',
    minHeight: '6em'
  }
}))

  

const UploadSrs = () => {


    const classes=useStyle()
    const [age,setAge]=useState('')
    const handleChange = (event) => {
        setAge(event.target.value);
      };
    return (
        <>
            <Typography className={classes.header} variant={"h4"}>Upload Series</Typography>

            <Box className={classes.container}>

            <FormControl  variant={'outlined'}className={classes.formControl}noValidate autoComplete="off">
            <Select
      labelId="demo-simple-select-outlined-label"
      id="demo-simple-select-outlined"
      value={age}
      onChange={handleChange}
      label="Age"
        >

          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
            <TextField id="standard-basic" label="Your Series Title" />
  <input type="file"/>
  <TextField id="standard-basic" label="Your Image Title" />
  <InputLabel id="demo-simple-select-filled-label">Genre</InputLabel>
<RichEditor/>






</FormControl>

            



            </Box>
        </>
    );
};

export default UploadSrs;