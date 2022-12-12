import { combineReducers } from 'redux'
import reducer from './MainListReducer'

const rootReducer = combineReducers({
    mainList : reducer,
})
export default  rootReducer