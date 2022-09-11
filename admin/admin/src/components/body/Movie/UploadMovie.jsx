import React from 'react';
import {Box,makeStyles,Typography} from '@material-ui/core'
const useStyle=makeStyles({
    header:{
        textAlign:"center"
    }

})

const UploadMovie = () => {
    const classes=useStyle()
    return (
      <Typography className={classes.header} variant={"h2"}>Upload Movie </Typography>
    );
};

export default UploadMovie;