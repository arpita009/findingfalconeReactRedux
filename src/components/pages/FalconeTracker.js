import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import { useSelector } from 'react-redux';
import FalconeContainer from '../FalconeContainer';
import { GiSandsOfTime } from "react-icons/gi";


const TrackerHeadingTypography = styled(Typography)(() => ({
    color: "#322085",
    fontFamily: 'Georgia,Times,serif'
}));


const FalconeTracker =(props) =>{
    const [time,setTime] =useState(0)
    const planets=useSelector((state)=>{
        return state.planet.planetData
    })
    const timeTakenData= useSelector((state) =>{
        return state.time
    })
    useEffect(() =>{
        if(timeTakenData){
            setTime(timeTakenData)
        }
    },[timeTakenData])
    return(
        <div>
            <TrackerHeadingTypography variant="h4" color="secondary" gutterBottom
                sx={{ textAlign: 'center', mt:6}}
            >
                <strong>Select Planets you want to search in: </strong> <br/>
                <span>Time Taken : <GiSandsOfTime/> {time >0 ? time : 0} </span>
            </TrackerHeadingTypography>
            <Grid sx={{mt:5}} container spacing={2} style={{justifyContent: "center"}}>
                    {planets.length >0 && <FalconeContainer />}
            </Grid>
        </div>
    )
}
export default FalconeTracker