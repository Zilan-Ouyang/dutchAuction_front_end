import {CREATE_AUCTION, SHOW_AUCTIONS} from '../actions/types';

const initialState={
    auctions: [],
    auction: {}
}

export default function(state=initialState, action){
    switch(action.type){
        case CREATE_AUCTION:
            return{
                ...state,
                auction: action.payload
            };
        case SHOW_AUCTIONS:
            return {
                ...state,
                auctions: action.payload
            }
        default:
            return state;
    }
}