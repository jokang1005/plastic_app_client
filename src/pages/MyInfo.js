import React from 'react'
import {GlobalCtx} from "../App"
import Header from '../components/Header'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container'
import {Link} from "react-router-dom"



const MyInfo = (props) => {

    return (
        <div className="App">
            <Header/>
            <h1><a href="https://www.nationalgeographic.com/environment/2020/10/us-plastic-pollution/">Did you know U.S. generates more plastic trash than any other nation?</a></h1>
            <h1>MY INFO PAGE... PUT A GRAPH IF YOU GOTS TIMES</h1>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1563245160-225a9e276fd6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGxhc3RpYyUyMHBvbGx1dGlvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                    <Card.Body>
                    <Card.Title>DO YOU KNOW WHAT PLASTIC IS USED IN?</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Click to find out more</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1523898377974-b4f882164761?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1649&q=80" />
                    <Card.Body>
                    <Card.Title>HOW LONG DOES IT TAKE FOR PLASTIC TO DECOMPOSE? </Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Click to find out more</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://images.unsplash.com/photo-1559076118-d0c8300844d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    <Card.Body>
                    <Card.Title>HOW PLASTIC AFFECTS WILDLIFE</Card.Title>
                    <Card.Text>
                        
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">Click to find out more</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
            <br/>
            <Container>
                <Link to="/plastic-calculator">
                <Card className="bg-dark text-white">
                    <Card.Img src="https://images.unsplash.com/photo-1537084642907-629340c7e59c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1567&q=80" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>MEASURE MY PLASTIC POLLUTION TODAY</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                </Link>
            </Container>
            <br/>
            <Card>
                <Card.Header>WHAT CAN WE DO?</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                    <p>
                        {' '}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                        erat a ante.{' '}
                    </p>
                    <footer className="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                    </blockquote>
                </Card.Body>
            </Card>
        </div>
    )
}

export default MyInfo;