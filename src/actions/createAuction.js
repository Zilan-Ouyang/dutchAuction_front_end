import {CREATE_AUCTION, SHOW_AUCTIONS, UPDATE_AUCTION} from './types';

export const showAuctions = () => dispatch =>{
    console.log("jey")
    fetch('https://us-central1-dutchauction-6abd7.cloudfunctions.net/getAllAuctions')
    .then(res => res.json())
    .then(auctions => {
        auctions.shift()
        dispatch({
            type: SHOW_AUCTIONS,
            payload: auctions
        })
    }
    )
}

// export const updateAuctionShares = (data) => dispatch => {
//     fetch('https://us-central1-dutchauction-6abd7.cloudfunctions.net/updateShares', {
//         method: 'PUT',
//         headers: {'content-type': "application/json"},
//         body: JSON.stringify(data)
//     })
//     .then(res => res.json())
//     .then(auction => dispatch({
//         type: UPDATE_AUCTION,
//         payload: auction
//     }))
// }

export const createAuction = (auctionData) => dispatch => {
    fetch('https://us-central1-dutchauction-6abd7.cloudfunctions.net/createAuction', {
        method: 'POST',
        headers: {'content-type': "application/json"},
        body: JSON.stringify(auctionData)
    })
    .then(res=>res.json())
    .then(auction => dispatch({
        type: CREATE_AUCTION,
        payload: auction
    })) 
}