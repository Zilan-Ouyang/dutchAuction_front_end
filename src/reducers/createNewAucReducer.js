import {CREATE_AUCTION, SHOW_AUCTIONS, UPDATE_AUCTION} from '../actions/types';

const initialState={
    items: [],
    item: {}
}

export default function(state=initialState, action){
    console.log(action.type)
    switch(action.type){
        case CREATE_AUCTION:
            return{
                ...state,
                item: action.payload
            };
        // case UPDATE_AUCTION:
        //     return {
        //         ...state,
        //         price: action.payload
        //     }
        case SHOW_AUCTIONS:
            //console.log(initialState)`
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}