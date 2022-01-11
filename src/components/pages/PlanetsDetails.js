import React from "react";
import { styled } from '@mui/material/styles'
import { Typography } from "@mui/material"
import { useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import PlanetItem from "./sub-pages/PlanetItem";

const PlanetHeadingTypography = styled(Typography)(() => ({
    color: "#9e468f",
    fontFamily: 'Georgia,Times,serif'
}));

const PlanetDetails =(props) =>{
    const allPlanetsInfo=useSelector((state)=>{
        // console.log('Planet Detials',typeof state.planet.planetData)
        return state.planet.planetData
    })

    return(
        <div>
            <PlanetHeadingTypography variant="h5" color="secondary" gutterBottom
                sx={{ textAlign: 'center', mt:6}}
            >
                <strong>Potential Hideouts -{allPlanetsInfo.length}</strong>
            </PlanetHeadingTypography>

            <Grid sx={{mt:5}} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {allPlanetsInfo.length >0 && allPlanetsInfo.map((planet,idx)=>{
                    return (
                        <Grid item xs={3} key={idx}>
                            <PlanetItem   {...planet} />
                        </Grid>
                        
                    )
                })}
            </Grid>
        </div>
    )
}
export default PlanetDetails