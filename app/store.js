import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

 
import reducers from '../app/reducers/index'; //Import the reducer
 
// Connect our store to the reducers
export default createStore(reducers, applyMiddleware(promiseMiddleware(),thunk, logger()));

composeStoreWithMiddleware = applyMiddleware(
    promiseMiddleware(),
  )(createStore)
