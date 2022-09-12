import React,{useEffect, useState} from 'react';
import {Box,makeStyles,Typography,TextField,TextareaAutosize,Button} from '@material-ui/core'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import RichEditor from './TextEditor';
import {createPost,uploadFile} from '../../Service/api.js'




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
 
  
  const initial={
    title:'',
    text:'',
     picture:''

  }
  const [post,setPost]=useState(initial)
  const [file,setFile]=useState('')
  const [imageUrl,setImageUrl]=useState('')

  const handlePost=(e)=>{
     setPost({...post,[e.target.name]:e.target.value})
  }
  console.log(post)
  
const handleClick=async(e)=>{
await createPost(post)
}
useEffect(()=>{
  console.log(file)
  const getImage=async()=>{
    if(file){
      const data=new FormData()
      data.append("name",file.name)
      data.append("file",file)
     await uploadFile(data)
    }
  }
  getImage()

},[file])


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
      
            <TextField id="standard-basic" name='title' onChange={(e)=>handlePost(e)} label="Your Series Title" />
  <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
  <TextField id="standard-basic" label="Your Image Title" />
 
  <RichEditor name="text" onChange={(e)=>handlePost(e)}/>


<Button onClick={(e)=>handleClick(e)}>Post</Button>



</FormControl>


            



            </Box>
        </>
    );
};

export default UploadSrs;