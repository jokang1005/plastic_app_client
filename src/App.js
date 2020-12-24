import React from 'react'
import './App.css';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link, Switch} from "react-router-dom"
import Calculator from './pages/Calculator'
import Signup from './pages/signup'

export const GlobalCtx = React.createContext(null)


function App() {
  
  const [gState, setGState] = React.useState({url: "http://localhost:3000"})

  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
      <div className = "App">
        <Route exact path = "/" render = {(rp) => <Home {...rp}/>}/>
        <main>
          <Switch>
            <Route path = "/plastic-calculator" render = {(rp) => <Calculator {...rp}/>}/>
            <Route path = "/signup" render = {(rp) => <Signup {...rp}/>}/>
          </Switch>
        </main>
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
