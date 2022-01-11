import React from "react";
import {Box, Typography, Button, styled} from '@mui/material'
import { useHistory } from "react-router-dom";


const ColorButton = styled(Button)(() => ({
    color: "#E4E7EB",
    backgroundColor: "#2560be",
    "&:hover": {
        backgroundColor: "grey",
    },
}));

const FalconeTrackerFail=(props) =>{
    const history=useHistory()
    return(
        <Box sx={{mt:15, textAlign:'center'}}>
            <ColorButton sx={{mb:5}} onClick={() =>history.goBack()}>Back</ColorButton>
            <Typography variant="h4" color="secondary" gutterBottom>Kudos! Great Job</Typography><br/>
            <img src='/images/trackingMsg/sad-king.jpg' alt='sad-king' width='600px'/>
            <Box sx={{mt:5}}>
                <Typography variant="h5" color="secondary" gutterBottom >Better luck next time.</Typography>
            </Box>
        </Box>
    )
}
export default FalconeTrackerFail