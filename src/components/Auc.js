import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenSquare, faHandHoldingUsd, faWallet} from '@fortawesome/free-solid-svg-icons';
import BlockchainClient from "../blockchain";

const blockchain = new BlockchainClient();

class CreateAuc extends Component {
    constructor(props){
        super(props);
        this.state = { 
            uid: props.uid,
            name: props.name,
            description: props.description,
            shares: props.shares,
            offerPrice: props.offerPrice,
            deposit: "",
            units: "",
            isDeposited: false,
            isBidded: false,
            isUpdated: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3= this.handleChange3.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClick2 = this.handleClick2.bind(this);
        this.handleClick3 = this.handleClick3.bind(this);
    }
    handleChange(e){
        this.setState({deposit: parseInt(e.target.value)});
    }
    handleChange2(e){
        this.setState({units: parseInt(e.target.value)})
    }
    handleChange3(e){
        this.setState({offerPrice: parseInt(e.target.value)})
    }
    handleClick(e){
        e.preventDefault();
        console.log(this.state.deposit)
        console.log(this.state.uid)
        blockchain.deposit(this.state.uid, this.state.deposit).then(res=>{
            console.log(res);
            this.setState({isDeposited: true});
            console.log(this.state.isDeposited)
        })
    }
    // localStorage.setItem('assetName', this.state.asset);
    //     localStorage.setItem('address', this.state.address);
    //     localStorage.setItem('strikePrice', this.state.strikePrice);
    //     localStorage.setItem('time', this.state.time);
    //     localStorage.setItem('rate', this.state.rate);
    handleClick2(e){
        e.preventDefault();
        blockchain.bidding(this.state.uid, this.state.units).then(res =>{
            console.log(res);
            //console.log(this.state.nonce,this.state.shares )
            this.setState({isBidded: true, shares: this.state.shares-this.state.units})
            localStorage.setItem('units', this.state.units);
            //     uid: this.state.uid,
            //     shares: this.state.shares-this.state.units
            // }
            console.log(this.state.shares)
            let info ={ uid: this.state.uid, shares: this.state.shares}
            fetch('https://us-central1-dutchauction-6abd7.cloudfunctions.net/updateShares', {
                method: 'POST',
                headers: {'content-type': "application/json"},
                body:JSON.stringify(info)
            })
            .then(res=> console.log(res))
            //.then(result => console.log(result))
        })
    }

    handleClick3(e){
        e.preventDefault();
        this.setState({offerPrice: parseInt(e.target.value)})
        blockchain.setPrice(this.state.uid, this.state.offerPrice).then(res => console.log(res));
        this.setState({offerPrice: this.state.offerPrice});
        let info = { uid: this.state.uid, offerPrice: this.state.offerPrice}
        fetch('https://us-central1-dutchauction-6abd7.cloudfunctions.net/updatePrice', {
                method: 'POST',
                headers: {'content-type': "application/json"},
                body:JSON.stringify(info)
            })
            .then(res=> {console.log(res); this.setState({isUpdated: true})})
            //.then(result => console.log(result))

    }
    render() {

        return (          
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Item Name:{this.state.name}</Card.Title>
                        <Card.Title>Item ID:{this.state.uid}</Card.Title>
                        <Card.Text>
                        {this.state.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Row><Col><h6>Units On Sale:</h6></Col><Col>{this.state.shares}</Col></Row></ListGroupItem>
                        <ListGroupItem><Row><Col><h6>Current Price:</h6></Col><Col>{this.state.offerPrice}</Col></Row></ListGroupItem>
                        <ListGroupItem>
                            <h6>Update Price:</h6>
                            {this.state.isUpdated ? (<div>Price updated!</div>): (
                                <InputGroup className="mb-3" onSubmit={e => this.handleClick3(e)}>
                                    <FormControl
                                    // value={this.state.offerPrice} 
                                    onChange={this.handleChange3}
                                    placeholder="Seller Only"
                                    name="offerPrice"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button type="submit" value='Submit' variant="outline-secondary" onClick={(e)=>this.handleClick3(e)}><FontAwesomeIcon icon={faPenSquare}/></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                             )} 
                        </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Row>
                            <Col><Card.Link href="https://www.kijiji.ca/v-bed-mattress/city-of-toronto/hemnes-double-full-bed-frame-ikea/1452639868?enableSearchNavigationFlag=true">more</Card.Link></Col>
                            <Col>
                                {this.state.isDeposited ? (<div>you deposited: {this.state.deposit}</div>): (
                                    <InputGroup className="mb-3" onSubmit={e => this.handleClick(e)}>
                                        <FormControl
                                        value={this.state.deposit} 
                                        onChange={this.handleChange}
                                        placeholder="deposit"
                                        name="deposit"
                                        aria-describedby="basic-addon2"
                                        />
                                        <InputGroup.Append>
                                        <Button type="submit" value='Submit' variant="outline-secondary" onClick={(e)=>this.handleClick(e)}><FontAwesomeIcon icon={faWallet}/></Button>
                                        </InputGroup.Append>
                                    </InputGroup>
                                )}   
                            </Col>
                        </Row>
                        <Row>
                            <Col md={{ span: 6, offset: 6 }}>
                            {this.state.isBidded ? (<div>Success!</div>): (
                                <InputGroup className="mb-3" onSubmit={e => this.handleClick2(e)}>
                                    <FormControl
                                    value={this.state.units} 
                                    onChange={this.handleChange2}
                                    placeholder="units"
                                    name="units"
                                    aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button type="submit" value='Submit' variant="outline-secondary" onClick={(e)=>this.handleClick2(e)}><FontAwesomeIcon icon={faHandHoldingUsd}/></Button>
                                    </InputGroup.Append>
                                </InputGroup>
                                )}
                            </Col>
                        </Row>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Initiated by Auxion Corp</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}

export default CreateAuc;