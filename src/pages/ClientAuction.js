import React, { Component } from 'react';
import {Container, Jumbotron, CardDeck} from 'react-bootstrap';
import Transfer from '../components/Transfer';
export default class ClientAuction extends Component {
    render() {
        return (
            <div>
                <h3 style={{display: 'flex',justifyContent: 'center', paddingTop: 20}}>Settlement Channel</h3>
                <hr></hr>
                <Container className = "bid-container">
                    <Jumbotron>
                        <CardDeck>
                            <Transfer />
                        </CardDeck>
                    </Jumbotron>
                </Container>    
            </div>
        )
    }
}
