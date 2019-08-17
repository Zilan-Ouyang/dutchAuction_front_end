import React, { Component } from 'react';
import {Container, Jumbotron, CardDeck} from 'react-bootstrap';
import DisputeAuc from '../components/DisputeAuc';
import {showAuctions} from '../actions/createAuction';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
class ClientBids extends Component {
    componentWillMount(){
        this.props.showAuctions();
    }
    render() {
        const disputeItems = this.props.auctions
        .filter(item => item.shares === 0)
        .map(auction => (
            <div key={auction.uid}>
                <DisputeAuc name ={auction.name} uid={auction.uid} description ={auction.description} shares ={auction.shares} offerPrice ={auction.offerPrice}/>
            </div>
        ))
        return (
            <div>
                <h3 style={{display: 'flex',justifyContent: 'center', paddingTop: 20}}>Dispute Channel</h3>
                <hr></hr>
                <Container className = "bid-container">
                    <Jumbotron>
                        <CardDeck>
                            {disputeItems}
                        </CardDeck>
                    </Jumbotron>
                </Container>    
            </div>
            
        )
    }
}

ClientBids.propTypes ={
    showAuctions: PropTypes.func.isRequired,
    auctions: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    auctions: state.auctions.items
})

export default connect(mapStateToProps,{showAuctions})(ClientBids);
