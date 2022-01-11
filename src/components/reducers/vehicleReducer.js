const vehicleInitialState={
    isLoading: true,
    errors:{},
    vehicleData:[],
    vehicleSelected:[],
    falconeTrackingData:{}
}

const vehicleReducer=(state=vehicleInitialState, action) =>{
    switch(action.type){
        case 'SHOW_VEHICLES':{
            return {...state, vehicleData:action.payload}
        }
        case 'SET_VEHICLE_PLANET':{
            return {...state, vehicleSelected:[...state.vehicleSelected,action.payload]}
        }
        case 'UNITS_REDUCE':{
            const vehicleResult= state.vehicleData.map((vehicle) =>{
                if(vehicle.name===action.payload){
                    return {...vehicle, total_no:vehicle.total_no-1}
                }else{
                    return {...vehicle}
                }
            })
            return {...state,vehicleData:vehicleResult}
        }
        case 'FALCONE_TRACKING':{
            return {...state, falconeTrackingData:action.payload}
        }
        case 'RESET_SELECTED_VEHICLE':{
            return {...state,vehicleSelected:[]}
        }
        default:{
            return {...state}
        }
    }
    
}
export default vehicleReducer