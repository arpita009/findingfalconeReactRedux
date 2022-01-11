import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './components/store/configureStore';
import { Provider } from 'react-redux';
import { startGetPlanetsInfo } from './components/actions/planetActions';
import { startGetVehiclesInfo } from './components/actions/vehicleActions';


const store=configureStore()
// console.log('store', store)
// console.log('store getState',store.getState())

store.dispatch(startGetPlanetsInfo())
store.dispatch(startGetVehiclesInfo())

ReactDOM.render( 
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
,document.getElementById('root'));

