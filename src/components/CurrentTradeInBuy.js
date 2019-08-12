import React, { Component } from 'react'
import {Jumbotron, Button, Badge, Table} from "react-bootstrap"
export default class CurrentTradeInBuy extends Component {
    render() {
        return (
            <div>
                
                <Jumbotron>
                    <h3>Current Trades in Buy</h3>
                    <hr></hr>
                    <Table>
                        <tbody>
                            <tr>
                                <td>
                                    <Button variant="primary">Active   <Badge variant="light">9</Badge></Button>
                                </td>
                                <td>
                                    <Button variant="warning">Pending <Badge variant="light">8</Badge></Button>
                                </td>
                                <td>
                                    <Button variant="secondary">Closing  <Badge variant="light">6</Badge></Button>
                                </td>
                                <td>
                                    <Button variant="success">Won  <Badge variant="light">6</Badge></Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Jumbotron>
            </div>
        )
    }
}
