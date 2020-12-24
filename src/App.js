import React from 'react'
import './App.css';
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Link, Switch} from "react-router-dom"
import Calculator from './pages/Calculator'
import Signup from './pages/signup'
import Login from './pages/login'
import MyInfo from './pages/MyInfo'

export const GlobalCtx = React.createContext(null)


function App() {
  
  const [gState, setGState] = React.useState({
    url: "http://localhost:3000", 
    token: null
  })

  React.useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token) {
      setGState({...gState, token: token.token})
    }
  }, [])

  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
      <div className = "App">
        <Route exact path = "/" render = {(rp) => gState.token ? <MyInfo {...rp}/> : <Home {...rp}/> }/>
        <main>
          <Switch>
            <Route path = "/plastic-calculator" render = {(rp) => <Calculator {...rp}/>}/>
            <Route path = "/signup" render = {(rp) => <Signup {...rp}/>}/>
            <Route path = "/login" render = {(rp) => <Login {...rp}  />}/>
          </Switch>
        </main>
      </div>
    </GlobalCtx.Provider>
  );
}

export default App;
