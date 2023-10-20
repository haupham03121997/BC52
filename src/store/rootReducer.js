import { combineReducers } from 'redux'
import { demoReduxReducer } from './demoRedux/reducer'
import { btPhoneReducer } from './BTPhone/reducer'
import { btMovieBookingReducer } from './BTMovieBooking/slice'

export const rootReducer = combineReducers({
    demoRedux: demoReduxReducer,
    btPhone: btPhoneReducer,
    btMovieBooking: btMovieBookingReducer
})

// rootReducer = {
//     demoRedux: {
//         number: 10,
//         name: 'ABC',
//         age: 20,
//     }
// }
