// rafc
import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../store/BTMovieBooking/slice'
import cn from 'classnames'

export const Chair = ({ ghe }) => {
    const { chairsBooking, chairsBooked } = useSelector((state) => state.btMovieBooking)

    console.log('chairsBooking: ', chairsBooking)

    const dispatch = useDispatch()

    return (
        <div
            className={cn('Chair abc', {
                booking: chairsBooking.find((e) => e.soGhe === ghe.soGhe),
                booked: chairsBooked.find((e) => e.soGhe === ghe.soGhe),
            })}
            onClick={() => {
                dispatch(btMovieBookingActions.setChairsBooking(ghe))
            }}
        >
            {ghe.soGhe}
        </div>
    )
}
