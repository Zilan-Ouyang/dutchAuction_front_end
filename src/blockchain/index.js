import { ethers } from 'ethers'
import ContractABI from './abi/contract.json'


export default class BlockchainClient {

    constructor(){

        window.ethereum.enable()
        this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider)
        this.signer = this.provider.getSigner()
        this.auctionContract = new ethers.Contract("0x5d06581705b1dc823b36ed43d6a8aaf0bf1dea03", ContractABI, this.signer)
    }

    async newAuction(uid,disputeDurationLength, shares, offerPrice) {
        let txHash = await this.auctionContract.newAuction(uid,disputeDurationLength, shares, offerPrice);
        // console.log(txHash);
        return txHash.hash;
    }

    async deposit(uid, amount) {
        let txHash = await this.auctionContract.deposit(uid, {value: amount});
        return txHash.hash
    }

    async bidding(uid, shares){
        let txHash = await this.auctionContract.bidding(uid, shares);
        return txHash.hash
    }

    async setPrice(uid, price){
        let txHash = await this.auctionContract.setPrice(uid, price);
        return txHash.hash
    }

    async transfer(uid) {
        let txHash = await this.auctionContract.transfer(uid);
        return txHash.hash
    }

}