import React,{useState} from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

const ColorButton = styled(Button)(() => ({
  color: "#d3d8df",
  backgroundColor: "#5788ed",
  '&:hover': {
    backgroundColor: "grey",
  },
}));

const ViewMenu= (props) =>{
  // const {open} = props
  const [anchorEl, setAnchorEl] = useState(null);
  const open=Boolean(anchorEl)
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return(
    <>
      <ColorButton onClick={handleClick}>View Details</ColorButton>
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      onClose={handleClose}
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <MenuItem >
        <Link to="/planets"  style={{ textDecoration: "none",color: "#242322" }}> Planets</Link>
      </MenuItem>
      <MenuItem >
        <Link to="/spaceVehicles"  style={{ textDecoration: "none",color: "#242322" }}>Space Vehicles</Link>
      </MenuItem>
      </Menu>
    </>
    
  )
}
export default ViewMenu