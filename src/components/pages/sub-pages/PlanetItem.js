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

const PlanetItem =(props) =>{
    const {name,distance} = props
    const imageSelect=(name)=>{
        if(name.toLowerCase()==='donlon'){
            return '/images/planets/donlon.png'
        }else if(name.toLowerCase()==='enchai'){
            return '/images/planets/enchai.png'
        }else if(name.toLowerCase()==='jebing'){
            return '/images/planets/jebing.png'
        }else if(name.toLowerCase()==='sapir'){
            return '/images/planets/sapir.png'
        }else if(name.toLowerCase()==='lerbin'){
            return '/images/planets/lerbin.png'
        }else if(name.toLowerCase()==='pingasor'){
            return '/images/planets/pingasor.png'
        }
    }
    return(
        <Card sx={{ maxWidth: 500 }}>
            <CustomCardMedia sx={{p: 5}}
                component="img"
                alt="planet-img"
                height="400"
                // image={name.toLowerCase()}
                image='/images/planets/donlon.png'
                image={imageSelect(name)}
            />
                <CardContent sx={{flex:'1 0 auto', justifyContent: 'center', alignItems: 'center'}}>
                    <CardTypography gutterBottom variant="h5" component="div">
                        {name}
                    </CardTypography>
                    <CardTypography gutterBottom component="p">
                        Distance- {distance} megamiles
                    </CardTypography>
                </CardContent>
        </Card>
    )
}
export default PlanetItem