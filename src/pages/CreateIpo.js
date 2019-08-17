import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Form, Button, Col, Container} from 'react-bootstrap';
import './Createipo.scss';
import BlockchainClient from "../blockchain";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createAuction} from '../actions/createAuction';

const blockchain = new BlockchainClient();

class CreateIpo extends Component {
    constructor(props){
        super(props);
        this.state={
            name: "",
            description: "",
            uid: "",
            disputeDurationLength: "",
            shares: "",
            offerPrice: ""
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange= this.handleChange.bind(this);
        this.routeChange= this.routeChange.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        // let uid = 12; //disputeDurationLength, uint256 _shares
        // let disputeDurationLength = 10;
        // let shares = 1000;
        const auction ={
            name: this.state.name,
            description: this.state.description,
            uid: this.state.uid,
            disputeDurationLength: this.state.disputeDurationLength,
            shares: this.state.shares,
            offerPrice: this.state.offerPrice
        }
        this.props.createAuction(auction);
        blockchain.newAuction(this.state.uid, this.state.disputeDurationLength, this.state.shares, this.state.offerPrice).then(res=>{
            console.log(res);
            window.location.reload();
        })
    }
    handleChange(e){
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    }
    routeChange() {
        let path = "/bid";
        this.props.history.push(path);
      }
    
    // handleChange2(e){
    //     e.preventDefault();
    //     this.setState({isRedirect: !this.state.isRedirect})
    // }
    //uint256 uid, uint256 _disputeDurationLength, uint256 _shares, uint256 _offerPrice
    render() {
        return (
            <div>
                <Container className="container">
                    <Form onSubmit={e => this.handleClick(e)}>
                        <Form.Row>
                            <Form.Group as={Col} sm={4} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" value={this.state.name} onChange={this.handleChange} placeholder="Give your new auction a name" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" value={this.state.description} onChange={this.handleChange} placeholder="Describe the purpose of your auction" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridUid">
                            <Form.Label>Unique ID</Form.Label>
                            <Form.Control name="uid" value={this.state.uid} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridDuration">
                            <Form.Label>Dispute Duration</Form.Label>
                            <Form.Control name="disputeDurationLength" value={this.state.disputeDurationLength} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridShares">
                            <Form.Label>Units</Form.Label>
                            <Form.Control name="shares" value={this.state.shares} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPrice">
                            <Form.Label>Starting Price</Form.Label>
                            <Form.Control name="offerPrice" value={this.state.offerPrice} onChange={this.handleChange}/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group id="formGridCheckbox">
                            <Form.Check type="checkbox" label="I accept the Terms of Service" />
                        </Form.Group>

                        <Button variant="outline-primary" type="submit" value='Submit' onClick={(e)=>{this.handleClick(e); this.routeChange(e)}}>
                            Create
                        </Button>
                    </Form>
                </Container>
            </div>
        )
    }
}
CreateIpo.propTypes = {
    createAuction: PropTypes.func.isRequired,
}

export default connect(null, {createAuction})(withRouter(CreateIpo));
