
import React,{useState} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import {Typography} from'@material-ui/core'
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';


import {Link} from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const NavList = () => {
  const [openMvi,setOpenMvi]=useState(false)
  const [openSrs,setOpenSrs]=useState(false)

const handleClick1=()=>{
  setOpenMvi(!openMvi)
}
const handleClick2=()=>{
  setOpenSrs(!openSrs)

}

    const classes=useStyles()
    return (
      <>
         
        
            <List
      component="nav"
      aria-labelledby="nested-list-subheader"
   subheader={
    "DashBoard"
   }
      className={classes.root}
    >
   
     
      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Series" />
        {openSrs ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSrs} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <Link to={"/uploadsrs"}><ListItemText primary="Upload Series" /> </Link>
          </ListItem>

          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
          <Link to={"srslist"}><ListItemText primary="Series List" /></Link>
          </ListItem>
        </List>
      </Collapse>



      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Movie" />
        {openMvi ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openMvi} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Upload Movie" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Movie List" />
          </ListItem>
        </List>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
 
    </List>
    </>



  );

};

export default NavList;