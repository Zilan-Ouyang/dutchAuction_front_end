import React, { Component } from 'react'
import {Card, ListGroup, ListGroupItem, Button, Row, Col, Badge} from 'react-bootstrap'
import BlockchainClient from "../blockchain";

const blockchain = new BlockchainClient();
export default class Transfer extends Component {
    constructor(props){
        super(props);
        this.state = { 
            uid: props.uid,
            name: props.name,
            description: props.description,
            shares: props.shares,
            offerPrice: props.offerPrice,
            units: "",
            isClicked: false
        };
        this.handleClick = this.handleClick.bind(this);
    }
    componentWillMount(){
        let unitsBidded = localStorage.getItem('units');
        this.setState({units: unitsBidded});
    }
    handleClick(e){
        e.preventDefault();
        blockchain.transfer(this.state.uid).then(res=>{
            console.log(res);
            this.setState({isClicked: true});
            console.log(this.state.isClicked)
        })
    }
    render() {
        return (
            
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Item Name:{this.state.name}</Card.Title>
                        <Card.Text>
                        Item ID: {this.state.uid}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><Row><Col><h6>Units bidded:</h6></Col><Col>{this.state.units}</Col></Row></ListGroupItem>
                        <ListGroupItem><Row><Col><h6>Final Price:</h6></Col><Col>{this.state.offerPrice}</Col></Row></ListGroupItem>
                    </ListGroup>
                    {this.state.isClicked ? (<h6> Congratulation!<Badge variant="success">You won the bid</Badge></h6>): (
                    <Button style={{paddingTop:10}}variant="success" size="lg" block onClick={(e)=>this.handleClick(e)}>Make Payment/Refund</Button>)}
                    <Card.Footer>
                        <small className="text-muted">Initiated by Auxion Corp</small>
                    </Card.Footer>
                </Card>
            </div>
        )
    }
}
