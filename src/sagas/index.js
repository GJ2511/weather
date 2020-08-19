import { all } from 'redux-saga/effects';

import { weatherSaga } from '../container/Weather/ducks';
// single entry point to start all Sagas at once
export default function* rootSaga() {
    yield all([
        weatherSaga(),
    ]);
}
