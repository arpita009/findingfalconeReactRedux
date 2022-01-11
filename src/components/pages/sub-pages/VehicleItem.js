import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// import imageMenu from "./imageMenu";
import { styled } from '@mui/material/styles'



const CustomCardMedia = styled(CardMedia)(() => ({
    color: "black",
    backgroundColor: "white",
    '&:hover': {
      backgroundColor: "#baf1f5",
    },
}));
const CardTypography = styled(Typography)(() => ({
    color: "#8359f0",
    fontFamily: 'Georgia,Times,serif'
}));

const VehicleItem =(props) =>{
    const {name,total_no,max_distance,speed} = props
    const imageSelect=(name)=>{
        if(name.toLowerCase()==='space pod'){
            return '/images/vehicles/pod.png'
        }else if(name.toLowerCase()==='space rocket'){
            return '/images/vehicles/rocket.png'
        }else if(name.toLowerCase()==='space shuttle'){
            return '/images/vehicles/shuttle.png'
        }else if(name.toLowerCase()==='space ship'){
            return '/images/vehicles/ship.png'
        }
    }
    return(
        <Card sx={{ maxWidth: 500 }}>
            <CustomCardMedia sx={{p: 5}}
                component="img"
                alt="planet-img"
                height="400"
                image={imageSelect(name)}
            />
                <CardContent sx={{flex:'1 0 auto', justifyContent: 'center', alignItems: 'center'}}>
                    <CardTypography gutterBottom variant="h5" component="div">
                        <strong>{name}</strong>    
                    </CardTypography>
                    <CardTypography gutterBottom component="p">
                        Available- {total_no} units
                    </CardTypography>
                    <CardTypography gutterBottom component="p">
                        Max Distance- {max_distance} megamiles
                    </CardTypography>
                    <CardTypography gutterBottom component="p">
                        Speed- {speed} megamiles/hour
                    </CardTypography>
                </CardContent>
        </Card>
    )
}
export default VehicleItem