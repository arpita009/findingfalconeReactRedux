import axios from "axios";
import Swal from 'sweetalert2'
import {startResetPlanetSelected} from './planetActions'
import {startResetTimer} from './timeActions'

export const startGetVehiclesInfo = () =>{
    return(
        (dispatch) =>{
            axios.get(`https://findfalcone.herokuapp.com/vehicles`)
                .then((response) =>{
                    const vehiclesResp=response.data
                    // console.log('vehiclesResp', vehiclesResp)
                    dispatch(showVehicles(vehiclesResp))
                })
                .catch((err) =>{
                    // console.log(err)
                    Swal.fire(err)
                })
        }
    )
}

export const showVehicles =(vehiclesResp) =>{
    return{
        type: 'SHOW_VEHICLES',
        payload: vehiclesResp
    }
}


export const startUnitsReduce =(vehicleSelect) =>{
    return{
        type: 'UNITS_REDUCE',
        payload: vehicleSelect
    }
}
export const startSelectedVehicle =(vehicleSelect) =>{
    return{
        type: 'SET_VEHICLE_PLANET',
        payload: vehicleSelect
    }
}
export const startFindFalcone = (planetsOpted,vehiclesOpted,routeURL) =>{
    return(
        (dispatch) =>{
            const planetNames=planetsOpted.map(planet=>planet.name)
            const vehicleNames=vehiclesOpted.map(vehicle=>vehicle.name)
            // dispatch(findFalcone({planetNames,vehicleNames}))
            axios.post(`https://findfalcone.herokuapp.com/token`,{},{
                headers:{
                    "Accept" : "application/json"
                }
            }
            ).then((tokenResp) =>{
                // console.log('tokenResp',tokenResp.data.token)
                axios.post(`https://findfalcone.herokuapp.com/find`,{
                    "token": tokenResp.data.token,
                    "planet_names": planetNames,
                    "vehicle_names" : vehicleNames
                },{ headers:{
                    "Accept" : "application/json"
                }
                }).then((messageResp) =>{
                    // console.log('messageResp',messageResp)
                    const trackingMsg= messageResp.data
                    dispatch(startFalconeTracking(trackingMsg))
                    if(!trackingMsg.status){
                        routeURL('fail')
                    }else if(trackingMsg.status==='success'){
                        routeURL(`success/${trackingMsg.planet_name}`)
                    }else if(trackingMsg.status==='error'){
                        // alert('Token not initialized. Please get a new token with the token API!')
                        Swal.fire({
                            icon : 'error',
                            title: 'Token not initialized',
                            text: 'Please get a new token with the token API!'
                        })
                    }
                    // resetForm()
                    dispatch(startResetPlanetSelected())
                    dispatch(startResetTimer())
                }).catch((err) =>{
                    console.log('err',err)
                })
            }).catch((err) =>{
                console.log('err', err)
            })
        }
    )
}

export const startFalconeTracking =(trackingMsg) =>{
    return{
        type: 'FALCONE_TRACKING',
        payload: trackingMsg
    }
}

export const startResetVehicleSelected=() =>{
    return{
        type: 'RESET_SELECTED_VEHICLE'
    }
}
