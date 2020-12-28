import React from 'react'
import {GlobalCtx} from '../App'
import Header from '../components/Header'
import Table from 'react-bootstrap/Table'

const Show = (props) => {
    const {gState, setGState} = React.useContext(GlobalCtx) 
    const {url, token} = gState
    const [plastics, setPlastics] = React.useState(null)

    const getPlastic = async () => {
        const response = await fetch(url + "/plastics/" + props.match.params.id, {
            method: "get",
            headers: {
                "Authorization": "bearer " + token
            },
        })
        const json = await response.json()
        setPlastics(json)
    }

    
    React.useEffect(()=>{
        getPlastic()
    }, [])

    return(
        <>
            <Header />
            {console.log(plastics)}
            {plastics ? 
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>Timestamp</th>
                    <th>{plastics.created_at}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>Plastic Bags</td>
                    <td>{plastics.plastic_bags}</td>
                    </tr>
                    <tr>
                    <td>Coffee Cups</td>
                    <td>{plastics.coffee_cup}</td>
                    </tr>
                    <tr>
                    <td>Plastic Straws</td>
                    <td>{plastics.plastic_straw}</td>
                    </tr>
                    <tr>
                    <td>6-Pack Plastic Rings</td>
                    <td>{plastics.six_pack_plastic_rings}</td>
                    </tr>
                    <tr>
                    <td>Plastic Water Bottles</td>
                    <td>{plastics.plastic_water_bottle}</td>
                    </tr>
                    <tr>
                    <td>Coffee Pods</td>
                    <td>{plastics.coffee_pod}</td>
                    </tr>
                    <tr>
                    <td>Plastic Cup</td>
                    <td>{plastics.plastic_cup}</td>
                    </tr>
                    <tr>
                    <td>Disposable Diaper</td>
                    <td>{plastics.disposable_diaper}</td>
                    </tr>
                    <tr>
                    <td>Plastic Toothbrush</td>
                    <td>{plastics.plastic_toothbrush}</td>
                    </tr>
                </tbody>
            </Table> : null}
            
        </>
    )
}

export default Show;