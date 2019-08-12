import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faHandHoldingUsd, faWallet} from '@fortawesome/free-solid-svg-icons';
// export default class CreateAuc extends Component {
//     state = {props.auction}
//     render() {

//         return (
const CreateAuc = props => (            
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Item Name:{props.name}</Card.Title>
                        <Card.Title>Item ID:{props.uid}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Row><Col><h6>Units On Sale:</h6></Col><Col>{props.shares}</Col></Row></ListGroupItem>
                        <ListGroupItem><Row><Col><h6>Current Price:</h6></Col><Col>{props.offerPrice}</Col></Row></ListGroupItem>
                        <ListGroupItem>
                            <h6>Update Price:</h6>
                            <InputGroup className="mb-3">
                                <FormControl
                                placeholder="Seller Only"
                                aria-label="new price"
                                aria-describedby="basic-addon2"
                                />
                                <InputGroup.Append>
                                    <Button variant="outline-secondary"><FontAwesomeIcon icon={faPenSquare}/></Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Row>
                            <Col><Card.Link href="https://www.kijiji.ca/v-bed-mattress/city-of-toronto/hemnes-double-full-bed-frame-ikea/1452639868?enableSearchNavigationFlag=true">more</Card.Link></Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="deposit"
                                    aria-label="deposit"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"><FontAwesomeIcon icon={faWallet}/></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 6 }}>
                                <InputGroup className="mb-3">
                                    <FormControl
                                    placeholder="bid"
                                    aria-label="bid"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="outline-secondary"><FontAwesomeIcon icon={faHandHoldingUsd}/></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Initiated by Auxion Corp</small>
                    </Card.Footer>
                </Card>
            </div>
)

export default CreateAuc;