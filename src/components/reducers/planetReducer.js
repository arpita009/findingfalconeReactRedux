const planetInitialState={
    isLoading: true,
    errors:{},
    planetData:[],
    planetSelected:[]
}

const planetReducer=(state=planetInitialState, action) =>{
    switch(action.type){
        case 'SHOW_PLANETS':{
            return {...state, planetData:action.payload}
        }
        case 'SET_SELECTED_PLANET':{
            return {...state, planetSelected:[...state.planetSelected,action.payload]}
        }
        case 'RESET_SELECTED_PLANET':{
            console.log('RESET_SELECTED_PLANET',{...planetInitialState})
            return {...state,planetSelected:[]}
        }
        default:{
            return {...state}
        }
    }
    
}
export default planetReducer