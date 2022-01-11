import React,{useState,useEffect} from 'react'
import {Box, Typography} from '@mui/material';
import { useDispatch } from 'react-redux';
import { startUnitsReduce } from './actions/vehicleActions';
import { startTimeCalculate } from './actions/timeActions';
import { startSelectedVehicle } from './actions/vehicleActions';


const ShowVehicle=(props) =>{
    const {vehicle,planetSelected}= props
    const dispatch=useDispatch()
    const [vehicleUnits, setVehicleUnits] = useState(vehicle.total_no)
    const [unitsFlag, setUnitsFlag] = useState(false)
    const [vehicleSelect,setVehicleSelect]= useState(vehicle)
    const [saved,setSaved]= useState(false)

    const handleVehicleChange=(e) =>{
        setVehicleSelect(vehicle)
        const timeCalculateInput={distance:planetSelected.distance, speed:vehicle.speed}
        console.log('selcted',planetSelected,vehicleSelect)
        dispatch(startSelectedVehicle(vehicleSelect))
        dispatch(startTimeCalculate(timeCalculateInput))
        setSaved(true)
    }
    useEffect(() =>{
        if(vehicleSelect.name && saved){
            dispatch(startUnitsReduce(vehicleSelect.name))
            setUnitsFlag(true)
        }
    },[vehicleSelect.name,saved])

    useEffect(() =>{
        if(unitsFlag){
            setVehicleUnits(vehicle.total_no)
        }
    },[unitsFlag])

    return(
        <Box>
            <Typography variant="p" gutterBottom>
                <input type='radio' value={vehicleSelect.name} name='radioUnique' 
                    onChange={handleVehicleChange}
                    disabled={(planetSelected.distance > vehicleSelect.max_distance)||(vehicleUnits===0)}
                />

                {vehicle.name} {`(${vehicleUnits})`}
            </Typography>
        </Box>
    )
}
export default ShowVehicle