import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div className='header'>
            <div className="header-blok">
                <p className='shrift header-blok__p1'>MAKE A ORDER</p>
                <h1>Come For A Drink, Stay For A Meal</h1>
                <p className='header-blok__p2'>There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration</p>
                <Link to='/menu'><button>Our Menu <span className='button-span'></span></button></Link>
            </div>
        </div>
    )
};