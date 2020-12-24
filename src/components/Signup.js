import React from 'react'
import {GlobalCtx} from "../App"
import Header from '../components/Header'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


const Signup = (props) => {

    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url} = gState

    const blank = {
        username: "",
        password: ""
    }

    const [form, setForm] = React.useState(blank)

    const handleChange = (event) => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = form
        fetch(`${url}/users`, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username, password: password})
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            setForm(blank)
            props.history.push("/login")
        })
        
    }

    return(
        <>
            <Header/>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text" 
                            name="username"
                            value={form.username} 
                            onChange = {handleChange} placeholder="Enter username" 
                        />
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            name="password"
                            value={form.password} 
                            onChange={handleChange} placeholder="Password" 
                        />
                    </Form.Group>
                    <Button variant="primary" value="signup" type="submit">
                        Signup
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default Signup;