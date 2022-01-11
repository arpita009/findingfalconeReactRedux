const timeInitialState=0
const timeReducer=(state=timeInitialState, action) =>{
    switch(action.type){
        case 'TIME_CALCULATOR':{
            return  state + (action.payload.distance/action.payload.speed)
        }
        case 'TIME_CALCULATOR':{
            return  state + (action.payload.distance/action.payload.speed)
        }
        case 'RESET_TIMER':{
            return timeInitialState
        }
        default:{
            return state
        }
    }
    
}
export default timeReducer