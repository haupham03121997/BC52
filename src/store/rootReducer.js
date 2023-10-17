import { combineReducers } from 'redux'
import { demoReduxReducer } from './demoRedux/reducer'

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
})

// rootReducer = {
//     demoRedux: {
//         number: 10,
//         name: 'ABC',
//         age: 20,
//     }
// }