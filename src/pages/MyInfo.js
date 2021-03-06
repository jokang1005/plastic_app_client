import React from 'react'
import {GlobalCtx} from "../App"
import Header from '../components/Header'
import Carder from '../components/Carder'
import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'
import {Link} from "react-router-dom"



const MyInfo = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx)
    const {url, token} = gState
    const [plastics, setPlastics] = React.useState(null)

//function to fetch the data 
    const getPlastic = async () => {
        const response = await fetch(url + "/plastics", {
            method: "get",
            headers: {
                Authorization: "bearer " + token
            }
        })
        const json = await response.json()
        setPlastics(json)
    }
//What renders at the beginning
    React.useEffect(()=>{
        getPlastic()
    }, [])

//Delete function
    const handleDelete = (id) => {
        fetch(`${url}/plastics/${id}`, {
            method: "delete",
            headers: {
                "Authorization": "bearer " + token
            },
        })
        .then((response) => response.json())
        .then((data) => {
            getPlastic()
            console.log("Deed is done");

        })
        //I have getPlastic() rendering even for catch error so even if it is a catch error, it fetches the data again..not sure if that's the right way
        .catch(error => {
            getPlastic()
            console.log("SOMETHING HAPPENED BOOOOO")
        })
    }

    return (
        <div className="App">
            <Header/>
            <main className="main">
                <h1 className="h1">My Plastic Usage</h1>
                <Table striped bordered hover size="sm" className="table">
                    <thead>
                        <tr>
                        <th>Timestamp</th>
                        <th>Plastic Bags</th>
                        <th>Coffee Cups</th>
                        <th>Plastic Straws</th>
                        <th>6-Pack Plastic Rings</th>
                        <th>Plastic Water Bottles</th>
                        <th>Coffee Pods</th>
                        <th>Plastic Cups</th>
                        <th>Disposable Diapers</th>
                        <th>Plastic Toothbrush</th>
                        <th>Decomposing Time</th>
                        </tr>
                    </thead>
            
                    <tbody>
                        {/*gotta map through the data and bring it in*/}
                        {plastics ? plastics.map((plastic) => (
                            <tr>
                                <td>
                                    <Link to={`/${plastic.id}`}>{plastic.created_at}</Link>
                                    <br/>
                                    <Link to={`/edit/${plastic.id}`}>
                                        <Button variant="outline-info">Edit</Button>
                                    </Link>
                                    <Button onClick={() =>handleDelete(plastic.id)} variant="outline-danger">Delete</Button>
                                </td>
                                <td>{plastic.plastic_bags}</td>
                                <td>{plastic.coffee_cup}</td>
                                <td>{plastic.plastic_straw}</td>
                                <td>{plastic.six_pack_plastic_rings}</td>
                                <td>{plastic.plastic_water_bottle}</td>
                                <td>{plastic.coffee_pod}</td>
                                <td>{plastic.plastic_cup}</td>
                                <td>{plastic.disposable_diaper}</td>
                                <td>{plastic.plastic_toothbrush}</td>
                                <td>{(plastic.plastic_bags * 20) + (plastic.coffee_cup * 30) + (plastic.plastic_straw * 200) + (plastic.six_pack_plastic_rings * 400) + (plastic.plastic_water_bottle * 450) + (plastic.coffee_pod * 500) + (plastic.plastic_cup * 450) + (plastic.disposable_diaper * 500) + (plastic.plastic_toothbrush * 500) + ` years`}</td>
                            </tr>
                                )) : null
                            }
                    </tbody>
                </Table>

                <Carder />
            </main>

        </div>
    )
}

export default MyInfo;