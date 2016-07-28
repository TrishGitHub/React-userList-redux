import React from 'react';
import ReactDOM from 'react-dom';
import UserList from './UserList.js';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './reducers/userListReducer'

const middleware = process.env.NODE_ENV === 'production' ?
    [ thunk ] :
    [ thunk, logger() ]

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
)

class MainComponent extends React.Component {

    render(){
        return (
            <Provider store={store}>
                <div className="container">
                    <UserList />
                </div>
            </Provider>

        )
    }
}


ReactDOM.render(
    <MainComponent/>, document.getElementById('app')
)
