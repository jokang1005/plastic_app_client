import React from 'react'
import {GlobalCtx} from "../App"
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom"
import Carder from '../components/Carder'



const Home = (props) => {

    return (
        <div className="App">
            <Header/>
            <main className="main">
            <Carder />
            </main>
            
        </div>
    )
}

export default Home;