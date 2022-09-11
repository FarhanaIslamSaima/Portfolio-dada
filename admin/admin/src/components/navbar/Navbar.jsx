import React from 'react';
import {Typography,Box,makeStyles} from '@material-ui/core'
import NavList from './NavList';
const useStyle=makeStyles({
    container:{

    },
    head:{
        fontWeight:'bold',
        padding:'15px'
    }

})

const Navbar = () => {
    const classes=useStyle()
    return (
       <Box className={classes.container}>
      
        <NavList/>

       </Box>
    );
};

export default Navbar;