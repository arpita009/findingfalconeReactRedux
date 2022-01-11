import React from "react";
import { styled } from '@mui/material/styles'
import { Typography } from "@mui/material"
import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import VehicleItem from "./sub-pages/VehicleItem";

const VehicleHeadingTypography = styled(Typography)(() => ({
    color: "#9e468f",
    fontFamily: 'Georgia,Times,serif'
}));

const SpaceVehicles =(props) =>{
    const allVehiclesInfo=useSelector((state)=>{
        // console.log('Planet Detials',typeof state.planet.planetData)
        return state.vehicle.vehicleData
    })
    return(
        <div>
            <VehicleHeadingTypography variant="h5" color="secondary" gutterBottom
                sx={{ textAlign: 'center', mt:6}}
            >
                <strong>Potential Hideouts -{allVehiclesInfo.length}</strong>
            </VehicleHeadingTypography>

            <Grid sx={{mt:5}} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {allVehiclesInfo.length >0 && allVehiclesInfo.map((vehicle,idx)=>{
                    return (
                        <Grid item xs={3} key={idx}>
                            <VehicleItem   {...vehicle} />
                        </Grid>
                        
                    )
                })}
            </Grid>
        </div>
    )
}
export default SpaceVehicles