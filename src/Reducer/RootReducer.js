import Table from './Table'
import Api from './Api'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  Table,
  Api,
});
export default rootReducer;