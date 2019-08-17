import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortNumericUpAlt, faPlus} from '@fortawesome/free-solid-svg-icons';
class DisputeAuc extends Component {
    constructor(props){
        super(props);
        this.state = { 
            uid: props.uid,
            name: props.name,
            description: props.description,
            shares: props.shares,
            offerPrice: props.offerPrice,
        };
    }
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Item Name:{this.state.name}</Card.Title>
                        <Card.Text>
                        {this.state.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Row><Col><h6>Units bidded:</h6></Col><Col>{this.state.shares}</Col></Row></ListGroupItem>
                        <ListGroupItem><Row><Col><h6>Final Price:</h6></Col><Col>{this.state.offerPrice}</Col></Row></ListGroupItem>
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

export default DisputeAuc;
