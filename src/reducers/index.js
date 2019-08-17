import {combineReducers} from 'redux';
import createAuction from './createNewAucReducer';

const rootReducers = combineReducers({auctions: createAuction});

export default rootReducers;