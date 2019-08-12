import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortNumericUpAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
export default class DisputeAuc extends Component {
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
                        <ListGroupItem><Row><Col><h6>Units bidded:</h6></Col><Col>getBid function on smart contract</Col></Row></ListGroupItem>
                        <ListGroupItem><Row><Col><h6>Final Price:</h6></Col><Col>2 eth</Col></Row></ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col sm={6}>
                                    <h6>New Nonce:</h6>
                                </Col>
                                <Col>
                                    <InputGroup>
                                        <FormControl
                                        placeholder="Nonce"
                                        aria-label="nonce"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary"><FontAwesomeIcon icon={faSortNumericUpAlt}/></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                            </Row>  
                            <br></br>
                            <Row>
                                <Col sm={6}>
                                    <h6>Update Unit:</h6>
                                </Col>
                                <Col>
                                    <InputGroup className="mb-3">
                                        <FormControl
                                        placeholder="unit"
                                        aria-label="unit"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                            <Button variant="outline-secondary"><FontAwesomeIcon icon={faPlus}/></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                    <Button variant="secondary" size="lg" block type="submit" value='Submit'>Dispute</Button>
                    <Card.Footer>
                        <small className="text-muted">Initiated by Auxion Corp</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
