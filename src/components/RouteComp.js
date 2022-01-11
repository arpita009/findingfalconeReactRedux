import React from "react";
import { Route, Switch } from 'react-router-dom'
import Home from "./pages/Home";
import PlanetDetails from "./pages/PlanetsDetails";
import SpaceVehicles from "./pages/SpaceVehicles";
import NotFound from "./pages/NotFound";
import FalconeTracker from "./pages/FalconeTracker";
import FalconeTrackerFail from "./pages/FalconeTrackerFail";
import FalconeTrackerSuccess from "./pages/FalconeTrackerSuccess";


const RouteComp= (props) =>{
    return(
        <Switch>
            <Route path='/' component={Home} exact/>
            {/* <Route path='/about' component={About} /> */}
            <Route path='/planets' component={PlanetDetails} />
            <Route path='/spaceVehicles' component={SpaceVehicles} />
            <Route path='/falconeTracker' component={FalconeTracker} />
            <Route path='/fail' component={FalconeTrackerFail} />
            <Route path='/success/:planetName' component={FalconeTrackerSuccess} />
            <Route  component={NotFound} />
        </Switch>
    )
}
export default RouteComp