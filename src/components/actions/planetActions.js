import axios from "axios";
import Swal from 'sweetalert2'

export const startGetPlanetsInfo = () =>{
    return(
        (dispatch) =>{
            axios.get(`https://findfalcone.herokuapp.com/planets`)
                .then((response) =>{
                    const planetsResp=response.data
                    dispatch(showPlanets(planetsResp))
                })
                .catch((err) =>{
                    // console.log(err)
                    Swal.fire(err)
                })
        }
    )
}

export const showPlanets =(planetsResp) =>{
    return{
        type: 'SHOW_PLANETS',
        payload: planetsResp
    }
}
export const startSelectedPlanet =(planetSelected) =>{
    return{
        type: 'SET_SELECTED_PLANET',
        payload: planetSelected
    }
}
export const startResetPlanetSelected=() =>{
    return{
        type: 'RESET_SELECTED_PLANET'
    }
}