import React, { Component } from 'react'
import './LeftSidebar.scss';
import {Badge} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStoreAlt,  faFileAlt, faListOl, faHistory, faStamp, faEnvelope, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

export default class LeftSidebar extends Component {
    render() {
        return (
            <div id="sidebar-container">
                <ul className="sidebar navbar-nav" >
                        <div className="navigation-type">
                        <li >
                            <Badge variant="light" className="nav-item">
                                <FontAwesomeIcon icon={faStoreAlt }/>
                                <span> DASHBOARD</span>
                            </Badge>
                        </li>
                        <li >
                            <Badge variant="light" className="nav-item">
                            <FontAwesomeIcon icon={faFileAlt }/>
                                <span> INVOICES</span>
                            </Badge>
                        </li>
                        <li >
                            <Badge variant="light" className="nav-item">
                            <FontAwesomeIcon icon={faListOl }/>
                                <a href="/clientBids"> DISPUTE</a>
                            </Badge>
                        </li>
                        <li >
                            <Badge variant="light" className="nav-item">
                            <FontAwesomeIcon icon={faHistory }/>
                                <a href='/bid'> BIDS</a>
                            </Badge>
                        </li>
                        <li >
                            <Badge variant="light" className="nav-item">
                            <FontAwesomeIcon icon={faStamp }/>
                                <a href='/clientAuction'> SETTLEMENT</a>
                            </Badge>
                        </li>

                        </div>
                        
                        <div className="other-containt">
                            <Badge variant="light" className="nav-item">
                            <FontAwesomeIcon icon={faEnvelope }/>
                                <span> CONTACT</span>
                            </Badge>
                        
                            <Badge variant="light" className="nav-item">
                            <FontAwesomeIcon icon={faQuestionCircle }/>
                                <span> SUPPORT</span>
                            </Badge>
                        </div>
                    </ul>

            </div>
        )
    }
}
