import {applyMiddleware,combineReducers,createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { UserReducer } from '../redux/reducers/UserAuthReducers.js'

const reducers=combineReducers({
   getAll:UserReducer
})
const middleware=[thunk]

const store=createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store