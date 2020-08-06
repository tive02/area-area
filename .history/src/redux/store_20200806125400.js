import { createStore, combineReducers, applyMildleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import { postReducer, tagReducer, copywriterReducer } from "./reducers"

export default createStore(
  combineReducers({ postReducer, tagReducer, copywriterReducer }),
  composeWithDevTools(applyMildleware(thunk))
)
