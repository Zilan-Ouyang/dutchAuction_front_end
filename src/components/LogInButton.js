import React from 'react';
import { useWeb3 } from '../UseWeb3';
import {Button, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt} from '@fortawesome/free-solid-svg-icons';

function MetamaskStatus() {
  let w3 = useWeb3();
  console.log(w3); // look in your JS console
  return <div>status = {w3.status}</div>;
}

function Web3Info(props) {
let w3 = useWeb3();

if (w3.status === 'READY') {
    return <div>
        <span>Your address: {w3.account.address}</span>
        <div>Your network ID: {w3.account.networkId}</div>
        <div>Your network Name: {w3.account.networkName}</div>
    </div>;
} else {
    return (<div>
              <span>web3 not ready: {w3.status}</span>
              <Button variant="success"><FontAwesomeIcon icon={faSignInAlt} onClick={()=> w3.enable()}/> Connect To Log In</Button>
          </div>)
}
}



function LogInButton() {
    return (
      <div>
        <Jumbotron>
                    <h1>Auxion. Where every day is auction day!</h1>
                    <p>
                        Connect with MetaMask to begin your auxion journey!
                    </p>
                    <p>
                        <MetamaskStatus/>
                        <Web3Info />
                    </p>
                </Jumbotron>
      </div>
      )
}

export default LogInButton;