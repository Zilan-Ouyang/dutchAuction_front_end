import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button, Row, Col } from 'react-bootstrap'

export default class Transfer extends Component {
//uint256 uid, uint newNonce, uint _updatedShares
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Item Name:Ikea Bed Frame</Card.Title>
                        <Card.Text>
                        Used for 3 years, bugs free, good condition.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Row><Col><h6>Units bidded:</h6></Col><Col>2</Col></Row></ListGroupItem>
                        <ListGroupItem><Row><Col><h6>Final Price:</h6></Col><Col>2 eth</Col></Row></ListGroupItem>
                    </ListGroup>
                    <Button style={{paddingTop:10}}variant="success" size="lg" block type="submit" value='Submit'>Make Payment/Refund</Button>
                    <Card.Footer>
                        <small className="text-muted">Initiated by Auxion Corp</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
