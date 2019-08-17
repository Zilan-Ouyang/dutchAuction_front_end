import React, { Component } from 'react';
import {connect} from 'react-redux';
import {showAuctions} from '../actions/createAuction';
import PropTypes from 'prop-types';
import CreateAuc from '../components/Auc';
import {Container, Jumbotron, CardDeck} from 'react-bootstrap'
import './Bid.scss'
class Bid extends Component {
    componentWillMount(){
        this.props.showAuctions();
    }
    // componentWillReceiveProps(nextProps){
    //     if(nextProps.newAuction){
    //         this.props.auction.unshift(nextProps.newAuction);
    //     }
    // }

    render(){
        const auctionItems = this.props.auctions
        .filter(item => item.shares > 0)
        .map(auction => (
            <div key={auction.uid}>
                <CreateAuc name ={auction.name} uid={auction.uid} description ={auction.description} shares ={auction.shares} offerPrice ={auction.offerPrice}/>
            </div>
        ))
        return (
            <Container className = "bid-container">
                <Jumbotron>
                    <CardDeck>
                        {auctionItems}
                    </CardDeck>
                 </Jumbotron>
             </Container>
        )
    }
    }
  

Bid.propTypes ={
    showAuctions: PropTypes.func.isRequired,
    auctions: PropTypes.array.isRequired
}
const mapStateToProps = state => ({
    auctions: state.auctions.items
})

export default connect(mapStateToProps,{showAuctions})(Bid);