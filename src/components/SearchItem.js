import React,{useEffect, useState} from "react";
import {Box} from '@mui/material'
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useSelector } from "react-redux";
import ShowVehicle from "./ShowVehicle";
import { useDispatch } from "react-redux";
import { startSelectedPlanet } from "./actions/planetActions";

const SearchItem =(props) =>{
    const {planetsPass,planetsListChange} =props
    const [planetDropDown,setplanetDropDown] = useState('')
    const [planetSelected,setPlanetSelected] = useState({})
    const dispatch=useDispatch()
    const handleCombo=(e,value) =>{
        setplanetDropDown(value.name)
        const excludingPlanetSelectedList= planetsPass.filter((planet) =>{
            return planet.name!==value.name
        })
        planetsListChange(excludingPlanetSelectedList)
    }
    const vehicles=useSelector((state) =>{
        return state.vehicle.vehicleData
    })
    const planets=useSelector((state) =>{
        return state.planet.planetData
    })
    useEffect(() =>{
        if(planets.length && planetDropDown){
            const result= planets.find((planet) =>{
                return planet.name===planetDropDown
            })
            setPlanetSelected(result)
        }
    },[planetDropDown])
    useEffect(() =>{
        if(Object.keys(planetSelected).length){
            dispatch(startSelectedPlanet(planetSelected))
        }
    },[planetSelected])
    return(
        <Box sx={{mt:5}} variant="form">
            <Autocomplete
                // disablePortal
                disabled={Boolean(planetDropDown)}
                id="combo-box-demo"
                onChange={(e,value)=>handleCombo(e,value)}
                options={planetsPass}
                getOptionLabel={(option)=>option.name}
                sx={{ width: 300}}
                renderInput={(params) => <TextField {...params} label="Select" />}
            />
            {planetDropDown ? vehicles.map((vehicle,idx)=>{
                return(
                    <ShowVehicle key={idx} vehicle={vehicle} planetSelected={planetSelected}/>
                )
            }):'Select planet first'}
        </Box>
    )
}
export default SearchItem;