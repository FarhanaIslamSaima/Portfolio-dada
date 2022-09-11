import React from 'react';
import {AppBar,Toolbar,makeStyles,Box} from '@material-ui/core'
const useStyle=makeStyles({
    header:{
        background:'black'
    }

})

const Header = () => {
    const classes=useStyle()
    return (
    <AppBar className={classes.header}>
        <Toolbar>
            <Box className={classes.container}>
                

            </Box>

        </Toolbar>
    </AppBar>
    );
};

export default Header;