'use client'
import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link, useLocation } from 'react-router-dom';

export default function Title() {

    const location = useLocation()
    const componentName = location.pathname.replace('/', '')

    return (
        <div className='pagename'>
            <div className="pagename-blok">
                <h1>Our {componentName}</h1>
                <p>
                    <Link href="/" className='pagename-parent'>Home</Link>
                    <span className='pagename-drop'><MdOutlineKeyboardArrowRight /></span>
                    <span className='pagename-child'>{componentName}</span>
                </p>
            </div>
        </div>
    )
};