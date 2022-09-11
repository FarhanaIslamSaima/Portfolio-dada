import React,{useEffect} from 'react';
import {Box,makeStyles} from '@material-ui/core'
import Navbar from './navbar/Navbar';
import Main from './body/Main';

import SeriesList from './body/Series/SeriesList';
import Header from './Header/Header';
import UploadSrs from './body/Series/UploadSrs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const useStyle=makeStyles({
    container:{
        display:"flex",
        marginTop:'100px'
    },
    leftContainer:{
        width:'20%'
    },
    rightContainer:{
        width:"80%"
    }

})


const Home = () => {
    const classes=useStyle()
   
    return (
        <>
        <Header/>
       <Box className={classes.container}>
     
        <Box className={classes.leftContainer}>
      <Navbar/>
     
        </Box>
        <Box className={classes.rightContainer}>
       
        <Routes>
           
          
            <Route exact path="/" element={<Main/>}></Route>
            <Route path="/srslist" element={<SeriesList/>}></Route>
            <Route path="/uploadsrs" element={<UploadSrs/>}></Route>
           
        

            
        </Routes>
       
       
        </Box>
       </Box>
       </>
    );
};

export default Home;