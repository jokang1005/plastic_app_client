import React from 'react'
import {GlobalCtx} from "../App"
import Header from './Header'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'
import {Link} from "react-router-dom"
import Modal from '../Modal'
import MeasureModal from './MeasureModal'



//Component so it deosn't have to repeat in Home.js and MyInfo.js
const Carder = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)

    return (
       <>

            <div className="parallax"></div>
            <div className="floating-text" id ="where">
                <CardDeck>
                    <Card class="card-outline" >
                        <Card.Body>
                        <Card.Title>Where can we find plastic?</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="light"><a href="https://www.alansfactoryoutlet.com/hubfs/7-types-plastic-toxicity-uses-3_compressed.png" target="_blank">Click to find out more</a></Button>
                        </Card.Footer>
                    </Card>
                    <Card class="card-outline" >

                        <Card.Body>
                        <Card.Title>HOW LONG DOES IT TAKE FOR PLASTIC TO DECOMPOSE? </Card.Title>
                        </Card.Body>
                        <Card.Footer>

                        <Modal />
                        </Card.Footer>
                    </Card>
                    <Card class="card-outline" >
                        <Card.Body>
                        <Card.Title>HOW PLASTIC AFFECTS WILDLIFE</Card.Title>
                        </Card.Body>
                        <Card.Footer>
                            <MeasureModal/>
                        </Card.Footer>
                    </Card>
                </CardDeck>

            </div>
            <div className="parallax1-1"></div>
            <div className="parallax2"></div>
            <div className="floating-text2">
                <Card className="text-center" id="now">
                    <Card.Header>Featured</Card.Header>
                    <Card.Body>
                        <Card.Title>See When Your Plastic Will Decompose</Card.Title>
                        <Card.Text>
                        Take the plastic you used today without recycling and fill in this chart to find out when it will decompose.
                        </Card.Text>
                        <Link to="/plastic-calculator"><Button variant="primary">Let's Do it!</Button></Link>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
            <div className="parallax2-1"></div>
            <div className="parallax3"></div>
            <div className="floating-text3">
                <Card className="text-center">
                    <Card.Header>Now What</Card.Header>
                    <Card.Body>
                        <Card.Title>What Can we do?</Card.Title>
                        <Card.Text>
                            Check out this site so see what you can do!
                        </Card.Text>
                        <a href="https://blogs.ei.columbia.edu/2018/05/11/can-fight-plastic-pollution/" target="_blank"><Button variant="primary">Let's Do it!</Button></a>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
            <div className="parallax3-1"></div>
            <div className="parallax4"></div>



        </>
    )
}

export default Carder;