import {CREATE_AUCTION, SHOW_AUCTIONS} from './types';

export const showAuctions = (auctions) => ({ //fetching when backend is ready
    type: SHOW_AUCTIONS,
    payload: auctions
})

export const createAuction = (auction) => ({
    type: CREATE_AUCTION,
    payload: auction
})