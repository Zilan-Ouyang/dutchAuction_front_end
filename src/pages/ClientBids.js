import React, { Component } from 'react';
import {Container, Jumbotron, CardDeck} from 'react-bootstrap';
import DisputeAuc from '../components/DisputeAuc';
export default class ClientBids extends Component {
    render() {
        return (
            <div>
                <h3 style={{display: 'flex',justifyContent: 'center', paddingTop: 20}}>Dispute Channel</h3>
                <hr></hr>
                <Container className = "bid-container">
                    <Jumbotron>
                        <CardDeck>
                            <DisputeAuc />
                        </CardDeck>
                    </Jumbotron>
                </Container>    
            </div>
            
        )
    }
}
