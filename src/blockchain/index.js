import { ethers } from 'ethers'
import ContractABI from './abi/contract.json'


export default class BlockchainClient {

    constructor(){

        window.ethereum.enable()
        this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
        this.signer = this.provider.getSigner()
        this.auctionContract = new ethers.Contract("0x587e24d7fb7f6bebd4033bc4c3548fb35059b5f9", ContractABI, this.signer)
    }

    async newAuction(uid,disputeDurationLength, shares, offerPrice) {
        let txHash = await this.auctionContract.newAuction(uid,disputeDurationLength, shares, offerPrice);
        // console.log(txHash);
        return txHash.hash;
    }

}