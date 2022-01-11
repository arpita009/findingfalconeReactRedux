import React,{useEffect,useState} from "react";
import {Box, Typography, Button,styled} from '@mui/material'
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

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
    const [time,setTime] = useState(0)
    const timeTaken=useSelector((state) =>{
        console.log('FalconeTrackerSuccess time',state.time)
        return state.time
    })
    useEffect(() =>{
        if(timeTaken){
            setTime(timeTaken)
        }
    },[])
    return(
        <Box sx={{mt:15, textAlign:'center'}}>
            <ColorButton sx={{mb:5}} onClick={() =>history.goBack()}>Start Again</ColorButton>
            <Typography variant="h4" color="secondary" gutterBottom>Kudos! Great Job</Typography><br/>
            <img src='/images/trackingMsg/happy-king.jpg' alt='happy-king' width='600px'/>
            {time && <Box sx={{mt:5}}>
                <Typography variant="h5" color="secondary" gutterBottom >Success! Congratulations on Finding Falcone. King Shan is mightly pleased.</Typography>
                <Typography variant="p" color="secondary" gutterBottom >Time Taken: <strong>{time}</strong></Typography> <br/>
                <Typography variant="p" color="secondary" gutterBottom >Planet found in: <strong>{planetName}</strong></Typography>
            </Box>}
        </Box>
    )
}
export default FalconeTrackerSuccess