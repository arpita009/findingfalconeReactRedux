import {createStore, combineReducers, applyMiddleware} from 'redux'
import planetReducer from '../reducers/planetReducer'
import vehicleReducer from '../reducers/vehicleReducer'
import timeReducer from '../reducers/timeReducer'
import { composeWithDevTools } from 'redux-devtools-extension'  
import thunk from 'redux-thunk'

const configureStore= () =>{
    const store= createStore(combineReducers({
        planet: planetReducer,
        vehicle:vehicleReducer,
        time: timeReducer
    }),composeWithDevTools(applyMiddleware(thunk)))
    return store
}
export default configureStore