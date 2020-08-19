import { combineReducers } from 'redux';

import weatherReducer from '../container/Weather/ducks';

const rootReducer = () =>
    combineReducers({
        weather: weatherReducer,
    });

export default rootReducer;
