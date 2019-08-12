import {combineReducers} from 'redux';
import createAuction from './createNewAucReducer';

const rootReducers = combineReducers({auction: createAuction});

export default rootReducers;