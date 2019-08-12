import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faPlusSquare, faChartLine, faCoins, faChartBar, faFlask, faUser} from '@fortawesome/free-solid-svg-icons'
import { useWeb3 } from '../UseWeb3';
import './Navigationbar.scss'

  function LoggedInfo(props) {
    let w3 = useWeb3();
    
    if (w3.status === 'READY') {
      return(
        <div>
          {w3.account.address}
        </div>
      )
    } else {
        return (<div>
                  Not Log In
              </div>)
    }
    }
    
   function Navigationbar(){
        return (
            <Navbar bg="light" expand="lg" sticky="top">
            <Navbar.Brand href="/">Au<FontAwesomeIcon icon={faTimes }/>ion</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
              
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item eventKey='1' href="/aution"><FontAwesomeIcon icon={faChartBar }/> Watch List</NavDropdown.Item>
                  <NavDropdown.Item eventKey='2' href="/research"><FontAwesomeIcon icon={faFlask }/> Research</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey='3' href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/bid"><FontAwesomeIcon icon={faCoins }/> Bid</Nav.Link>
                <Nav.Link href="/createipo"><FontAwesomeIcon icon={faPlusSquare }/>  Create </Nav.Link>
                <Nav.Link href="/dashboard"><FontAwesomeIcon icon={faChartLine }/>  Dashboard  </Nav.Link>
                <Navbar.Text><FontAwesomeIcon icon={faUser}/>  Signed in as: </Navbar.Text>
                <Navbar.Text><span className="login"><LoggedInfo/></span></Navbar.Text>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
            
        )
    }

    export default Navigationbar;

