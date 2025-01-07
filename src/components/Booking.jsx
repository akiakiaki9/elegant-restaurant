import React from 'react'

export default function Booking() {
    return (
        <div className='layout' id='booking'>
            <div className="comp-title">
                <div className="comp-title-blok">
                    <p className='shrift'>Make A Reserve</p>
                    <h1>Book A table On time</h1>
                </div>
            </div>
            <div className="booking">
                <form className="booking-blok">
                    <div className="booking-blok__section-1">
                        <input className='booking__input' type="text" placeholder='Your Name' required />
                        <input className='booking__input' type="text" placeholder='Your Phone' required />
                    </div>
                    <div className="booking-blok__section-2">
                        <input className='booking__input' type="text" placeholder='Persons' required />
                        <input className='booking__input' type="date" required />
                        <input className='booking__input' type="time" required />
                    </div>
                    <div className="booking-blok__section-3">
                        <button type='submit'>Book Table</button>
                    </div>
                </form>
            </div>
        </div>
    )
};