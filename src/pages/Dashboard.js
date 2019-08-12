import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartBroken} from '@fortawesome/free-solid-svg-icons';
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';
import LeftSidebar from '../components/LeftSidebar';
import BuyActivity from '../components/BuyActivity';
import SellActivity from '../components/SellActivity';
import CurrentTradeInSell from '../components/CurrentTradeInSell';
import CurrentTradeInBuy from '../components/CurrentTradeInBuy'

class Dashboard extends Component {
    
    handleClick(e){
        e.preventDefault();
        window.location.reload();
    }
    render() {
        if (window.web3.eth.accounts.length===0) {
            return (<div>
                        <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Sorry something went wrong <FontAwesomeIcon icon={faHeartBroken}/></Modal.Title>
                        </Modal.Header>
        
                        <Modal.Body>
                            <p>Please log in with your metamask wallet to check dashboard.</p>
                        </Modal.Body>
        
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.handleClick}>Proceed</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                    </div>)
        }

        else{
            return(
                <div className="dash-div">
                    <LeftSidebar />
                    <Container >
                        
                        <Row className="dash-con">
                            <Col xs={3}>
                                <BuyActivity />
                            </Col>
                            <Col xs={6}>
                                <CurrentTradeInSell />
                                <CurrentTradeInBuy />
                            </Col>
                            <Col xs={3}>
                                 <SellActivity />
                            </Col>
                        </Row>
                    </Container>
                </div>
            )
        }
    }
}

export default Dashboard;
