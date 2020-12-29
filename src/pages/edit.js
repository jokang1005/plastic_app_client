import React from 'react'
import {GlobalCtx} from "../App"
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Header from '../components/Header'


const Edit = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState
    const [plastics, setPlastics] = React.useState(null)
    console.log(plastics)

    const blank = {
        plastic_bags: React.useRef(null),
        coffee_cup: React.useRef(null),
        plastic_straw: React.useRef(null),
        six_pack_plastic_rings: React.useRef(null),
        plastic_water_bottle: React.useRef(null),
        coffee_pod: React.useRef(null),
        plastic_cup: React.useRef(null),
        disposable_diaper: React.useRef(null),
        plastic_toothbrush: React.useRef(null)
    }

    const [form, setForm] = React.useState(blank)

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
        console.log(`The ${event.target.name} has ${event.target.value} many`)
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        const {plastic_bags, coffee_cup, plastic_straw, six_pack_plastic_rings, plastic_water_bottle, coffee_pod, plastic_cup, disposable_diaper, plastic_toothbrush} = form

        fetch(`${url}/plastics/${props.match.params.id}`, {
            method: "put",
            headers: {
                "Content-Type":"application/json",
                "Authorization": 'bearer ' + token
            },
            body: JSON.stringify({plastic_bags:plastic_bags, coffee_cup:coffee_cup, plastic_straw:plastic_straw, six_pack_plastic_rings:six_pack_plastic_rings, plastic_water_bottle:plastic_water_bottle, coffee_pod:coffee_pod, plastic_cup:plastic_cup, disposable_diaper:disposable_diaper, plastic_toothbrush:plastic_toothbrush})
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)

            setForm(blank)
            props.history.push("/")
        })
    }
//Again, more DRY
    return (
        <>
            <Header/>
            <h1>Measure My Plastic Footprint Today</h1>
            <Form onSubmit={handleUpdate}>
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
                            name="plastic_bags"
                            id="inlineFormCustomSelectPref"
                            value={form.plastic_bags}
                            custom
                            onChange={handleChange}
                        >
                            <option value="0">Edit...</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
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
                                name="coffee_cup"
                                id="inlineFormCustomSelectPref"
                                value={form.coffee_cup}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                                name="plastic_straw"
                                id="inlineFormCustomSelectPref"
                                value={form.plastic_straw}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                                name="six_pack_plastic_rings"
                                id="inlineFormCustomSelectPref"
                                value={form.six_pack_plastic_rings}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                                name="plastic_water_bottle"
                                id="inlineFormCustomSelectPref"
                                value={form.plastic_water_bottle}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                                name="coffee_pod"
                                id="inlineFormCustomSelectPref"
                                value={form.coffee_pod}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                                name="plastic_cup"
                                id="inlineFormCustomSelectPref"
                                value={form.plastic_cup}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                        </Form.Control>
                    </Col>
                </Form.Row>
                <Form.Row className="justify-content-md-center">
                    <Col md = {4}>
                        <Form.Label className="disposable-diaper" 
                        htmlFor="inlineFormCustomSelectPref">
            Disposable Diaper
                            </Form.Label>
                            <Form.Control
                                as="select"
                                className="disposable-diaper"
                                name="disposable_diaper"
                                id="inlineFormCustomSelectPref"
                                value={form.disposable_diaper}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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
                                name="plastic_toothbrush"
                                id="inlineFormCustomSelectPref"
                                value={form.plastic_toothbrush}
                                custom
                                onChange={handleChange}

                            >
                                <option value="0">Edit...</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
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

export default Edit;