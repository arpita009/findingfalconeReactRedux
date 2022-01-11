import React,{useState,useEffect} from 'react'
import SearchItem from './SearchItem';
import {Box, Typography, Button} from '@mui/material'
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from "react-redux";
import { startFindFalcone } from './actions/vehicleActions';
import { useHistory } from 'react-router-dom';
import {startResetVehicleSelected} from './actions/vehicleActions'
import {startResetPlanetSelected} from './actions/planetActions'
import {startResetTimer} from './actions/timeActions'


const FindColorButton = styled(Button)(() => ({
    color: "#d3d8df",
    backgroundColor: "#4857b8",
    '&:hover': {
      backgroundColor: "#515b5c",
    },
}));
const ResetColorButton = styled(Button)(() => ({
    color: "#d3d8df",
    backgroundColor: "#8f2e4b",
    '&:hover': {
      backgroundColor: "#515b5c",
    },
}));

const FalconeContainer=(props) =>{
    const history=useHistory()
    const [planetsPass, setPlanetsPass] = useState([])
    const [planetsOpted,setPlanetsOpted] =useState([])
    const [vehiclesOpted,setvehiclesOpted] =useState([])
    const [trackingMsg, setTrackingMsg] = useState({})

    const dispatch= useDispatch()
    const noOfDest=4
    const planets=useSelector((state)=>{
        return state.planet.planetData
    })
    const planetsSelected=useSelector((state) =>{
        return state.planet.planetSelected
    })
    const vehiclesSelected=useSelector((state) =>{
        return state.vehicle.vehicleSelected
    })
    const trackingInfo= useSelector((state) =>{
        return state.vehicle.falconeTrackingData
    })
    useEffect(() =>{
        if(planets.length){
            setPlanetsPass(planets)
        }
    },[])
    useEffect(() =>{
        setPlanetsOpted(planetsSelected)
        setvehiclesOpted(vehiclesSelected)

    },[planetsSelected,vehiclesSelected])
    useEffect(() =>{
        if( Object.keys(trackingInfo).length){
            console.log('useEff trackingInfo',trackingInfo)
            // setTrackingMsg(trackingInfo)
        }
    },[trackingInfo])

    const planetsListChange=(planetlist) =>{
        setPlanetsPass(planetlist)
    }
    const routeURL=(trackingURL) =>{
        console.log('trackingURL',trackingURL)
        history.push(`/${trackingURL}`)
    }

    const handleSubmit =(e) =>{
        e.preventDefault()
        console.log('handleSubmit')
        dispatch(startFindFalcone(planetsOpted,vehiclesOpted,routeURL))
    }
    const handleReset=()=>{
        window.location.reload()
    }
    return(
        <Box component="form" onSubmit={handleSubmit}> 
            <Box sx={{ textAlign:'center'}} >
                <Box sx={{display: 'flex', justifyContent:'space-around',mb:10, flexWrap:'wrap'}}>
                    {[...Array(noOfDest)].map((elementInArray, index) => ( 
                        <Box key={index} sx={{ display:'flex'}}>
                            <Typography variant="h6" color="secondary" gutterBottom>Destination-{index+1}</Typography> 
                            <SearchItem planetsPass={planetsPass}  planetsListChange={planetsListChange}/> 
                        </Box> 
                    ))}
                </Box>
            
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-evenly'}}>
                <FindColorButton type='submit'>
                    Find Falcone!
                </FindColorButton>
                <ResetColorButton  onClick={handleReset} >Reset</ResetColorButton>
            </Box>
        </Box>
    )
}
export default FalconeContainer;