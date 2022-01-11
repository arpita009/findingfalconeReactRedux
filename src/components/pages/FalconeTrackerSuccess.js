import React from "react";
import {Box, Typography, Button,styled} from '@mui/material'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

const ColorButton = styled(Button)(() => ({
    color: "#E4E7EB",
    backgroundColor: "#237d7b",
    "&:hover": {
        backgroundColor: "grey",
    },
}));

const FalconeTrackerSuccess=(props) =>{
    const history=useHistory()
    const{planetName} =useParams()
    return(
        <Box sx={{mt:15, textAlign:'center'}}>
            <ColorButton sx={{mb:5}} onClick={() =>history.goBack()}>Back</ColorButton>
            <Typography variant="h4" color="secondary" gutterBottom>Kudos! Great Job</Typography><br/>
            <img src='/images/trackingMsg/happy-king.jpg' alt='happy-king' width='600px'/>
            <Box sx={{mt:5}}>
                <Typography variant="h5" color="secondary" gutterBottom >Finally, you got hold of Queen AI Falcone in <strong>{planetName}</strong> planet.</Typography>
            </Box>
        </Box>
    )
}
export default FalconeTrackerSuccess