import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Home.scss';
import LogInButton from '../components/LogInButton'

class Home extends Component {
    render() {
        //https://www.investopedia.com/investing/tips-for-investing-in-ipos/
        return (
            <div>
               <Image src="assets\main_banner4.jpg" className="header-image" />
                <Container>
                    <Row>
                        <Col xs={4} sm={5} smOffset={2}>
                            <h1>You Are The Auction</h1>
                            <p>Auxion is a revolutionary decentralized IPO pricing tool and dutch auctioning system designed to be as cost efficient as your business needs.</p>
                            <p>It gives issuing company the power to launch live, real-time dutch auctions from the palm of their hands. IPO investor can also enjoy full end-to-end service from anywhere with lower entry barrier than with the traditional IPOs.</p>
                        </Col>
                        <Col xs={4} sm={7} >
                            <Image className="body-image" src='assets\banner_laptop2.png'/>
                        </Col> 
                        
                    </Row>
                </Container>
                <hr>
                </hr> 
                <Container>
                    <Row>
                        <Col xs={4} sm={7} >
                            <Image className="body-image" src='assets\dutch-auction-clock.jpg'/>
                        </Col> 
                        <Col xs={4} sm={5} smOffset={2}>
                            <h1>What is Dutch Auction? </h1>
                            <br></br>
                            <p>Dutch Auctions date to the 17th-century flower market and are sometimes referred to as uniform price auctions. In this type of auction, bidding starts at a high selling price and decreases over time. With each price decrement, buyers place bids for the quantity (or volume) they wish to purchase.</p>
                            <p>We use dutch auction as a method for pricing shares (in an initial public offering) whereby the price of the shares offered is lowered until there are enough bids to sell all shares.</p>
                            <p>With each round of bidding, a buyer has the opportunity to place a bid at a new lower price. However, buyers are encouraged to place their bids early as the action could end at any point.</p>
                        </Col>
                    </Row>
                </Container>
                <hr></hr>
                <Container>
                    <Row><h1>Research Tool</h1></Row>
                </Container>
                <hr></hr>
                <Container>
                    <Row><h1>Your Dashboard</h1></Row>
                </Container>
                <hr>
                </hr>
                <Container className="last-container">
                    <LogInButton/>
                </Container>
            </div>
        )
    }
}
export default Home;