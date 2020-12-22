import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link, Switch} from "react-router-dom"
import Calculator from './pages/Calculator'





function App() {
  return (
    <div className = "App">
      <Route exact path = "/" render = {(rp) => <Home {...rp}/>}/>
      <Switch>
        <Route path = "/plastic-calculator" render = {(rp) => <Calculator {...rp}/>}/>
      </Switch>
    </div>
  );
}

export default App;
