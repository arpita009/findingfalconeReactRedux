import React from "react";
import { Typography,Box } from "@mui/material"
import { styled } from '@mui/material/styles';

const FooterTypography = styled(Typography)(() => ({
    color: "#9e468f",
    fontFamily: 'Georgia,Times,serif'
}));

const Footer=(props) =>{
    return(
        <Box sx={{textAlign:'center'}}>
            <FooterTypography variant="h5" color="secondary" gutterBottom
                sx={{ textAlign: 'center', mt:55}}
            >
                <strong>Coding Problem- <a href='https://www.geektrust.in/coding-problem/frontend/space'>www.geektrust.in/coding-problem/frontend/space</a></strong>
            </FooterTypography>
        </Box>
    )
}
export default Footer