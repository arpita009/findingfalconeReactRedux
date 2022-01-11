import React from "react";
import Box from "@mui/material/Box"
// import falconLogo from '/images/planets/donlon.png'
import { useHistory } from "react-router-dom";

const Logo =(props) =>{
    const history= useHistory()
    return(
        <Box
            onClick={()=>history.push('/')}
            component="img"
            sx={{
                // height: 50,
                mt: '2px',
                padding: '4px',
                width:100
            }}
            alt="logo"
            src='/images/falconLogo.jpg'
        />
    )
}
export default Logo