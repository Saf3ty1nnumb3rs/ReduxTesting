import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
// import reduxPromise from 'redux-promise';
import async from 'middlewares/async'
import stateValidator from 'middlewares/stateValidator';
//Custom 'async' middleware handling the work of ReduxPromise

export default ({ children, initialState = {} }) => {
    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(async, stateValidator)
        //reduxPromise - looks at action from creator and delays all requests
    ) 
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}  