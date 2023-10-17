import { combineReducers } from 'redux'
import { demoReduxReducer } from './demoRedux/reducer'
import { btPhoneReducer } from './BTPhone/reducer'

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
    btPhone: btPhoneReducer,
})

// rootReducer = {
//     demoRedux: {
//         number: 10,
//         name: 'ABC',
//         age: 20,
//     }
// }
