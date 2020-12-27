import React from 'react'
import {GlobalCtx} from "../App"
import Form from 'react-bootstrap/Form'


const Edit = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState
    const [plastics, setPlastics] = React.useState(props.params.id)

    const getPlasticForm = async () => {
        const response = await fetch(`${url}/plastics/${props.params.method.id}`, {
            method: "get",
            headers: {

                Authorization: "bearer " + token
            }
        })
        const json = await response.json()
        setPlastics(json)
    }

    React.useEffect(()=>{
        getPlasticForm()
    }, [])

    return(
        <h1>Hello</h1>
    )
}

export default Edit;