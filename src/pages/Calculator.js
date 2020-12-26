import React from 'react'
import {GlobalCtx} from '../App'
import Header from '../components/Header'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Calculator = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState

    // const getPlastic = async () => {
    //     const response
    // }
    

    return (
        <>
            <Header/>
            <h1>Measure My Plastic Footprint Today</h1>
            <Form>
                <Container>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label 
                            className="plastic-bags" htmlFor="inlineFormCustomSelectPref">
            Plastic Bags
                        </Form.Label>
                        <Form.Control
                            as="select"
                            className="plastic-bags"
                            id="inlineFormCustomSelectPref"
                            custom
                        >
                            <option value="0">Choose...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="3">4</option>
                            <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="coffee-cup" htmlFor="inlineFormCustomSelectPref">
            Coffee Cup
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="coffee-cup"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="plastic-straw" htmlFor="inlineFormCustomSelectPref">
            Plastic Straw
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="plastic-straw"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="6-pack-plastic-rings" htmlFor="inlineFormCustomSelectPref">
            6-pack Plastic Rings
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="6-pack-plastic-rings"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="plastic-water-bottle" htmlFor="inlineFormCustomSelectPref">
            Plastic Water Bottle
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="plastic-water-bottle"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="coffee-pod" htmlFor="inlineFormCustomSelectPref">
            Coffee Pod
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="coffee-pod"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="plastic-cup" htmlFor="inlineFormCustomSelectPref">
            Plastic Cup
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="plastic-cup"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="disposable-diaper" htmlFor="inlineFormCustomSelectPref">
            Disposable Diaper
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="disposable-diaper"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="plastic-toothbrush" htmlFor="inlineFormCustomSelectPref">
            Plastic Toothbrush
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="plastic-toothbrush"
                                id="inlineFormCustomSelectPref"
                                custom
                            >
                                <option value="0">Choose...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="3">4</option>
                                <option value="3">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Container>
            </Form>
        </>
    )
}

export default Calculator;