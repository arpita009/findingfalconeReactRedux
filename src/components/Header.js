import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Logo from './Logo';
import ViewMenu from './ViewMenu';



const ColorAppBar = styled(AppBar)(() => ({
    color: "black",
    backgroundColor: "#57cfed",
    '&:hover': {
      backgroundColor: "#bbebf7",
    },
}));
const ColorButton = styled(Button)(() => ({
    color: "#d3d8df",
    backgroundColor: "#5788ed",
    '&:hover': {
      backgroundColor: "grey",
    },
}));
const MainHeadingTypography = styled(Typography)(() => ({
  color: "#473fe0",
  fontFamily: 'Georgia,Times,serif'
}));

const Header= (props) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [openView, setViewMenu] = useState(false)
  const history=useHistory()
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')) //tracks for a mobile device

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick=(pageRoute) =>{
    // navigates to the given route
    history.push(pageRoute)
  }
  const handleOpenViewMenu =() =>{
    setViewMenu(true)
  }
  return (
    <Box sx={{flexGrow: 1}}>
      <ColorAppBar position="static">
        <Toolbar sx={{display: "flex", justifyContent: "space-evenly"}}>
            <Logo/>
          <MainHeadingTypography variant="h6" component="div" 
            sx={{ [theme.breakpoints.down('sm')] : {flexGrow: 1} }}
          >
            Finding Falcone!
          </MainHeadingTypography>
            <div>
                {isMobile ? (
                <>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                        </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={()=>setAnchorEl(null)}
                    >
                        <MenuItem onClick={()=>handleMenuClick('/')}>Home</MenuItem>
                        <MenuItem onClick={handleOpenViewMenu}>View Details</MenuItem>
                        <MenuItem onClick={()=>history.push('/falconeTracker')}>Falcone Tracker</MenuItem>
                        <ViewMenu open={openView} />
                    </Menu>
                </>):(
                     <Stack spacing={10} direction="row">
                        <ColorButton variant='contained' onClick={()=>handleMenuClick('/')}>Home</ColorButton>
                        {/* <ColorButton variant='contained' onClick={handleOpenViewMenu}>View Details</ColorButton> */}
                        <ColorButton variant='contained' onClick={()=>history.push('/falconeTracker')}>Falcone Tracker</ColorButton>
                        <ViewMenu open={openView} />
                    </Stack>
                )}
            </div>
            {/* {openView && <ViewMenu open={openView} />} */}
        </Toolbar>
      </ColorAppBar>
    </Box>
  )
}
export default Header;