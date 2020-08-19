import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';
import rootReducer from '../reducers';

const devToolEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
const composeEnhancers = devToolEnhancer || compose;
const sagaMiddleware = createSagaMiddleware();
const enhancer = [applyMiddleware( sagaMiddleware)];

export const configureStore = (initialState = {}) => {
    const store = createStore(rootReducer(), initialState, composeEnhancers(...enhancer));

    sagaMiddleware.run(rootSaga);
    return store;
};

const store = configureStore();

export { store };
