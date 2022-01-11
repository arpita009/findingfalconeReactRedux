// import './App.css';
import RouteComp from './components/RouteComp';
import Header from './components/Header'
import CssBaseline from '@mui/material/CssBaseline'
import {Typography} from '@mui/material';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Header/>
      <Typography id="header" variant="h6" sx={{textAlign:'right',mr:2}}>
        <strong>  GeekTrust Home </strong>
      </Typography>
      <RouteComp/>
      <Footer/>
    </div>
  );
}

export default App;
